import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-12 max-md:flex-col'>
        <p>
            copyright © 2024 Atharv | All rights reserved
        </p>
        <div className='flex gap-x-9'>
            <Link href="/terms-of-use">Terms & conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
    </footer>
  )
}

export default Footer