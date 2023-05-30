import  React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

function Blogs() {
   const {posts,loading} = useContext(AppContext);
   return (
    <div className='w-11/12 max-w-[450px] mt-[55px] mb-[55px] '>
      {loading ? 
      (<Spinner />) : 
      (
         posts.length===0 ?
          (<div>
            <p> No Post Found </p>
         </div>) :
          (posts.map( (post) =>(
            <div key={post.id}> 

            <p className='font-bold'> {post.title} </p>
            <p className='text-xs mt-[4px]'> By <span className='italic'>{post.author}</span> on <span className='font-bold underline mt-[4px]'>{post.category}</span></p>
            <p className='text-xs mt-[4px]'> Posted on {post.date}</p>
            <p className='text-sm mt-[9px]'>{post.content}</p>
            <div>
               {post.tags.map( (tag,index) =>{
                  return <span className='text-xs text-blue-500 mt-[5px]' key={index}> {`#${tag}`} </span>
               } )}
            </div>
            </div>
           ) ))
      )}
    </div>
   )
}
export default Blogs;