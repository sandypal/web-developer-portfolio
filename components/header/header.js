import Navigation from "./navigation";
function Header() {
    
  return (
    <header className='backdrop-filter backdrop-blur-lg  dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 min-w-full flex flex-col fixed'>
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">   
      <div className="p-[2px] md:rounded-full bg-gradient-to-r from-red-400 via-cyan-500 to-orange-500 animate-gradient-x">
        
<Navigation/>
</div>   
</div>
    </header>
  );
}
export default Header;