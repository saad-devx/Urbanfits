// import React, { useState } from 'react'
// import Navbar from '../components/navbar';
// import LinkBtn from '@/components/link_btn';
// import Footer from '../components/footer'
// import Shoppingcard from '@/components/cards/shoppingcard';
// import SearchBar from '@/components/searchBar';

// import image1 from '../public/card imgs/card img4.png'

// export default function Search() {
//   const [expand, setExpand] = useState(false)
//   return (
//     <>
//       <main className="bg-gray-100 w-full h-screen font_futuraLT">
//         <Navbar setExpand={setExpand} />
//         <section className={`bg-gray-100 ${expand === true ? 'lg:w-3/4' : 'w-full lg:w-[95%]'} h-full fixed right-0 transition-all duration-700 overflow-x-hidden overflow-y-scroll`}>
//           <div className="w-full flex justify-center">
//             <section className='w-full p-2 lg:p-0 lg:pt-9 lg:w-[85%] h-full font_futuraLT text-left pt-9' >
//               <SearchBar />
//                                                       pill buttons
//               <div className=" my-8 w-full flex flex-wrap text-sm md:text-base">
//                 <h1 className="w-full text-2xl mb-7">Suggestions</h1>
//                 {["Jeans Women", "Blazer Women", "Jeans Men", "Blazer Men", "T-Shirt Men", "T-Shirt Women", "Shoes Men", "Shoes Women", "Dresses", "Bags"].map(value => {
//                   return <>
//                     <LinkBtn href="/productlisting" classes="mr-3 px-[7%] md:px-[4%] border border-gray-400 hover:bg-gold-land hover:border-current hover:text-white" my="my-1" text="text" bg="bg-white" >{value}</LinkBtn>
//                   </>
//                 })}
//               </div>

//                                                      Top Searches Section                                                 
//               <section className="w-full my-10 mx-auto">
//                 <h1 className="text-2xl mb-7">Top Searches</h1>
//                 <div className="w-full flex flex-wrap justify-between overflow-hidden">
//                   <Shoppingcard img={image1} />
//                   <Shoppingcard img={image1} />
//                   <Shoppingcard img={image1} />
//                   <Shoppingcard img={image1} />
//                 </div>
//               </section>

//             </section>
//           </div>
//           <Footer classes={expand === true ? 'rounded-3xl' : 'rounded-sm'} />
//         </section>
//       </main>
//     </>
//   )
// }
