import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setLoading,setQuery } from '../redux/features/dataSlice';

const Search = () => {
    const dispatch=useDispatch();
    const [query,settQuery]= useState('');
    function handleQuery(e){
        settQuery(e.target.value);

    }
    function submitHandler(e){
        e.preventDefault();
        console.log(query);
        console.log('Submit handler was called!')
        dispatch(setLoading(true));
        dispatch(setQuery(query))

        settQuery('');

    }
  return (
    <>
    <form onSubmit={(e)=>{submitHandler(e)}}>
    <div className='w-full py-6 px-6'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-2 hover:shadow-purple-500/50 transition-shadow duration-300'>
          <input 
            placeholder='Search for photos, videos, or gifs...' 
            value={query}
            onChange={(e)=>{handleQuery(e)}}
            className='flex-1 px-6 py-4 text-lg text-gray-700 bg-transparent outline-none placeholder:text-gray-400'
          />
          <button type='submit' className='px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl'>
            Search
          </button>
        </div>
      </div>
    </div>
    </form>
    </>
  )
}

export default Search