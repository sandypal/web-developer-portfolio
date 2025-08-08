'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  ComputerDesktopIcon,
  NewspaperIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid';

function Navigation() {
   const path = usePathname();
   console.log(path);
    const navs = [
        {
         label: 'home',
         icon: HomeIcon,
         href: '/'   
        },{
         label: 'about',
         icon: UserIcon,
         href: '/about'   
        },{
         label: 'skills',
         icon: CodeBracketIcon,
         href: '/skills'   
        },{
         label: 'projects',
         icon: ComputerDesktopIcon,
         href: '#projects'   
        },{
         label: 'blog',
         icon: NewspaperIcon,
         href: '/blog'   
        },{
         label: 'contact',
         icon: EnvelopeIcon,
         href: '#contact'   
        }
    ];
  return (
         <nav className='bg-stone-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5'>

        { <ul className='flex items-center gap-0'>
         {
         navs.map((nav, index) => (

            <li className="px-2">
                 <Link href={nav.href} className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2  hover:bg-white/10 ${path === nav.href || (nav.href !== '/' && path.startsWith(nav.href))? 'bg-white/15':''} text-white`}>
              <nav.icon className="w-5 h-5" />
              <span className="inline capitalize">{nav.label}</span>
            </Link>
            </li>
               ))
        }
        </ul> }
        
      </nav>

  );
}
export default Navigation;