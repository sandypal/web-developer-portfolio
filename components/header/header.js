import Link from 'next/link';
function Header() {
    const navs = ['home', 'about', 'projects', 'experience', 'contact'];
  return (
    <header className='backdrop-filter backdrop-blur-lg  dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 min-w-full flex flex-col fixed'>      
      <nav className='lg:w-11/12 2xl:w-4/5 w-full md:px-6 2xl:px-0 mx-auto py-4 hidden sm:flex items-center justify-between'>

        <ul className='flex items-center gap-8'>
         {
         navs.map((nav, index) => (
            <li key={index} className='hover:text-violet-700 hover:dark:text-violet-500 transition-colors capitalize cursor-pointer'>
                <Link href={`#${nav}`} className='cursor-pointer'>{nav}</Link>
                </li>
               ))
        }              
        </ul>
      </nav>
    </header>
  );
}
export default Header;