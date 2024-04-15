import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav/MobileNav';
import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
    return (
        <nav className='flex justify-between fixed z-50 w-full px-6 p-4 lg-px-10 bg-dark-1 text-white '>
            <Link href='/' className='flex gap-4'>
                <Image src='/icons/logo.svg' height={32} width={32} alt="" />
                <p className='font-bold text-2xl max-sm:hidden'> আলোচনা</p>
            </Link>


            {/* mobile nav */}

            <MobileNav></MobileNav>

            <div className='hidden sm:block'>
            <UserButton/>
            </div>
        </nav>
    );
};

export default Navbar;