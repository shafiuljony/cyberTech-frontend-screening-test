
export default function MainContent(){
  return (
    <section className="bg-white text-black flex">
      <aside className="hidden md:block bg-[#9398BF] w-[486px] p-4 h-screen">
          <h2 className="font-roboto font-medium text-custom-h2 leading-custom-h2">Sidebar</h2>
          <div className="flex flex-col gap-2 mt-4">
              <select className='text-black text-custom-pra font-medium leading-[15.23px] py-1 bg-white' name="Item 1" id="">
                  <option hidden>Item 1</option>
                  <option className='bg-[#B8B6B6]'>Item A</option>
                  <option className='bg-[#B8B6B6]'>Item B</option>
              </select>
              <select className='text-black text-custom-pra font-medium leading-[15.23px] py-1 bg-white' name="Item 2" id="">
                  <option hidden>Item 2</option>
                  <option className='bg-[#B8B6B6]'>Item A</option>
                  <option className='bg-[#B8B6B6]'>Item B</option>
              </select>
              <select className='text-black text-custom-pra font-medium leading-[15.23px] py-1 bg-white' name="Item 3" id="">
                  <option hidden>Item 3</option>
                  <option className='bg-[#B8B6B6]'>Item A</option>
                  <option className='bg-[#B8B6B6]'>Item B</option>
              </select>
          </div>
      </aside>
      <div className="mx-[22px] md:mx-[84px] flex-grow">
          <h1 className="font-roboto font-medium text-center text-custom-h1 leading-custom-h1 mt-5 md:text-4xl md:leading-[42.19px]">Main Content</h1>
          <p className="mt-[14px] font-normal text-custom-pra md:text-base leading-custom-pra font-roboto"> My country’s name is Bangladesh. Bangladesh is a very small country huge population. It is a medium-developed country in South Asia. We have a very good and progressing economy. It has an area of 147,570 square kilometers. But it has a population of 164 million. That is huge than the area. <br />
              <br /> But it is still a very beautiful and peaceful country. People of Bangladesh are so friendly with each other. This country has a glorious history of independence. We got independence from Pakistan in 1971 after nine mothers’ blood-shedding war. More than 3 million Bangladeshi sacrificed their life in that genocide. <br />
              <br /> But still, we were able to get our independence. After independence, the newly born country faced lots of hard times and struggles. But it rises very well. Now Bangladesh is one of the best countries to live in South Asia. There are so many beautiful spots to see in this country.
          </p>
      </div>
    </section>
  )
}