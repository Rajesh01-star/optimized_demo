import { groq } from "next-sanity";
import { readClient } from "../lib/client";
import { buildQuery } from "../utils";

interface Resource {
    _id: string;
    title: string;
    downloadLink: string;
    image: string;
    views: number;
    category: string;
    slug?: string; // Optional property
}

interface GetResourcesParams {
    query: string;
    category: string;
    page: string;
}

export const getResourcesPlaylist = async () => {
    try {
        const resources = await readClient.fetch<Resource[]>(
            groq`*[_type == "resourcePlaylist"]{
                _id,
                title,
                resources[0...6]->{
                    title,
                    _id,
                    downloadLink,
                    "image": poster.asset->url,
                    views,
                    category
                }
            }`
        );
        return resources;
    } catch (err) {
        console.error("Error fetching resource playlists:", err);
        return []; 
    }
}

export const getResources = async (params: GetResourcesParams) => {
    const { query, category, page } = params;

    try {
        const resources = await readClient.fetch<Resource[]>(
            groq`${buildQuery({
                type: 'resource',
                query,
                category,
                page: parseInt(page),
            })}{
                title,
                _id,
                downloadLink,
                "image": poster.asset->url,
                views,
                slug,
                category
            }`
        );
        return resources;
    } catch (err) {
        console.error("Error fetching resources:", err);
        return []; 
    }
}
