
export default function MenuBar({ isOpen, onClose }) {
  return (
    <div className={`fixed right-0 top-0 h-full w-[205px] bg-[#ADADAD] text-white transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="">
            <button className="absolute top-2 right-2 cursor-pointer" onClick={onClose}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.6569 27.6569L16.3432 16.3432" stroke="white" strokeLinecap="round"/>
                    <path d="M27.6568 16.3432L16.3431 27.6569" stroke="white" strokeLinecap="round"/>
                </svg>
            </button>
           <ul className="text-black text-center mt-[83px] flex flex-col mx-3 gap-10">
                <li className="font-roboto text-xs font-medium leading-4 hover:text-[#2D3FE4]"><a href="#" className="">Home</a></li>
                <li className="font-roboto text-xs font-medium  leading-4 hover:text-[#2D3FE4]"><a href="#" className="">About</a></li>
                <li className="font-roboto text-xs font-medium leading-4 hover:text-[#2D3FE4]"><a href="#" className="">Blog</a></li>
                <li className="font-roboto text-xs font-medium leading-4 hover:text-[#2D3FE4]"><a href="#" className="">Contact</a></li>
            </ul>
        </div>
    </div>
  );
}
