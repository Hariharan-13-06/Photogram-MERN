import React from 'react';
import { PhotographIcon, LogoutIcon } from '@heroicons/react/outline'

const Header = ({handleLogout, userName}) => {
    return (
        <nav className="flex flex-row items-center justify-between text-white bg-blue-700">
            <p className="p-4 text-4xl text inline-block">
                Photogram
            </p>
            <div className="cursor-pointer mr-4 group flex flex-row space-x-3 items-center justify-evenly">
                <p className="text-3xl text-white font-semibold">{userName}</p>
                <LogoutIcon className="h-10 w-10" onClick={handleLogout} />
            </div>
            
        </nav>
    )
}

export default Header;
