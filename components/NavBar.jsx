import React from 'react'
import Image from 'next/image'
import { navLinks } from '@/constants/'

const NavBar = () => {
  return (
    <header>
        <nav>
            <Image src="/logo.svg" alt="Apple logo" width={20} height={20} />

            <ul>
                {navLinks.map(({ label }) => (
                    <li key={label}>
                        <a href="#">{label}</a>
                    </li>
                ))}
            </ul>

            <div className='flex-center gap-3'>
                <button>
                    <Image src="/search.svg" alt="Search" width={20} height={20} />
                </button>
                <button>
                    <Image src="/cart.svg" alt="Cart" width={20} height={20} />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default NavBar