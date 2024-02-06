import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default layout