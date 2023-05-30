import  React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Footer() {
   const {page,pageHnadle,totalPage} = useContext(AppContext);
   return (
      <div className='w-full flex justify-center items-center border-2 fixed bottom-0 bg-white'>
    <div className='flex w-11/12 max-w-[450px] justify-between py-2'>
    <div className='flex gap-x-2'>
    {
         page>1 &&(
         <button className='rounded-md border px-3 ' onClick={() => pageHnadle(page-1)}>
            Previous
         </button>
         )
       }

       {
         page<totalPage &&(
         <button className='rounded-md border px-3 ' onClick={() => pageHnadle(page+1)}>
            Next
         </button>
         )
       }
    </div>
     
       <p className='font-bold text-xs'>Page {page} of {totalPage} </p>
       </div>
    </div>
   )
}
export default Footer;