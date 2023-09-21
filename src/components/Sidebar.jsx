export default function Sidebar({ isOpen, onClose }){
  return (
    <div className={`fixed left-0 top-0 h-full w-[205px] bg-[#9398BF] text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <button className='absolute right-2 top-2 cursor-pointer' onClick={onClose}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.6569 27.6569L16.3432 16.3432" stroke="white" strokeLinecap="round"/>
            <path d="M27.6568 16.3432L16.3431 27.6569" stroke="white" strokeLinecap="round"/>
        </svg>
      </button>
      <div className="mr-2 ml-[19px] mt-16">
        <h3 className='text-black text-custom-pra leading-custom-pra font-medium font-roboto'>Sidebar</h3>
        <div className="flex flex-col gap-2 mt-4">
            <select className='text-black text-custom-pra font-medium leading-[15.23px] py-1 bg-white' name="Item 1" id="">
                <option hidden>Item 1</option>
                <option className='bg-[#B8B6B6]'>Item A</option>
                <option className='bg-[#B8B6B6]'>Item B</option>
            </select>
            <select className='text-black text-custom-pra font-medium leading-[15.23px] py-1 bg-white' name="Item 2" id="">
                <option hidden>Item 2</option>
                <option className='bg-[#B8B6B6]'>Item A</option>
                <option  className='bg-[#B8B6B6]'>Item B</option>
            </select>
            <select className='text-black text-custom-pra font-medium leading-[15.23px] py-1 bg-white' name="Item 3" id="">
                <option hidden>Item 3</option>
                <option className='bg-[#B8B6B6]'>Item A</option>
                <option className='bg-[#B8B6B6]'>Item B</option>
            </select>
        </div>   
      </div>
    </div>
  );
}
