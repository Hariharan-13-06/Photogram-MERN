import React from 'react';
import { PhotographIcon } from '@heroicons/react/outline'

const Header = () => {
    return (
        <nav className="flex flex-row items-center justify-between text-white bg-blue-700">
            <p className="p-4 text-4xl text inline-block">
                Photogram
            </p>
            <div className="cursor-pointer mr-4 group flex flex-row items-center justify-evenly">
                <p className='mr-3 opacity-0 group-hover:opacity-100 '>Upload</p>
                <PhotographIcon className="h-10 w-10" />
            </div>
            
        </nav>
    )
}

export default Header;
