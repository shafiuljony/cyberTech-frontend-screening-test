import { useState } from 'react';
import Menubar from './Menubar';
import Sidebar from './Sidebar';



export default function Header(){

  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
    setMenuOpen(false);
  };

  const openMenu = () => {
    setMenuOpen(true);
    setSidebarOpen(false);
  };

  const closeSidebarAndMenu = () => {
    setSidebarOpen(false);
    setMenuOpen(false);
  };
  return (
    <>
      <nav className="bg-black text-white h-[30px] md:h-[60px]">
        <ul className="hidden md:flex text-white items-center justify-center h-full gap-20 p-[10px]">
          <li className="font-roboto text-base font-medium leading-5 hover:text-[#2D3FE4] "><a href="#" className="">Home</a></li>
          <li className="font-roboto text-base font-medium leading-5 hover:text-[#2D3FE4]"><a href="#" className="">About</a></li>
          <li className="font-roboto text-base font-medium leading-5 hover:text-[#2D3FE4]"><a href="#" className="">Blog</a></li>
          <li className="font-roboto text-base font-medium leading-5 hover:text-[#2D3FE4]"><a href="#" className="">Contact</a></li>
        </ul>
        <div className="mx-3 flex items-center justify-between h-full md:hidden">
          <h1 className="flex items-center gap-2 font-normal text-base h-full cursor-pointer md:hidden" onClick={openMenu}>
            <span className="flex items-center">Menu</span>
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5H13" stroke="white" strokeLinecap="round"/>
              <path d="M1 6.5H13" stroke="white" strokeLinecap="round"/>
              <path d="M1 11.5H13" stroke="white" strokeLinecap="round"/>
            </svg>
          </h1>
          <h1 className="flex items-center gap-2 font-normal text-base h-full cursor-pointer md:hidden" onClick={openSidebar}>
            <span className="flex items-center">Sidebar</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 10H10" stroke="white" strokeLinecap="round"/>
              <path d="M18 6H6" stroke="white" strokeLinecap="round"/>
              <path d="M18 14H6" stroke="white" strokeLinecap="round"/>
              <path d="M18 18H10" stroke="white" strokeLinecap="round"/>
            </svg>

          </h1>
        </div>
      </nav>

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebarAndMenu} />
      <Menubar isOpen={menuOpen} onClose={closeSidebarAndMenu} />
  </>
  )
}