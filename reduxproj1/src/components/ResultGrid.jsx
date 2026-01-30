import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGifs } from '../api/mediaApi.js';
import { setError, setResult } from '../redux/features/dataSlice.js';
import ResultCard from './ResultCard.jsx';


const ResultGrid = () => {

    const active=useSelector((state)=>state.search.activeTabs)
    const query=useSelector((state)=>state.search.query)
    const err=useSelector((state)=>state.search.error)
    const load=useSelector((state)=>state.search.loading)
    const flowData=useSelector((state)=>state.search.result)
    const dispatch=useDispatch();
    
    
    useEffect(()=>{
        let data=[];
        async function getData(){
            try{
            if(active==='Images' && query){  
                const response = await fetchPhotos(query);
                data = (response.results).map((item)=>({
                    id: item.id,
                    title: item.alt_description,
                    src: item.urls.small,
                    download: item.links.download,
                    type:'image'
                }));
            }else if(active==='Gifs' && query){  
                const response = await fetchGifs(query);
                data = (response.data).map((item)=>({
                    id: item.id,
                    title: item.title,
                    src: item.images.fixed_height.url,
                    download: item.url,
                    type:'gifs'
                }));
            }else if(active==='Videos' && query){  
                const response = await fetchVideos(query);
                data = (response.videos).map((item)=>({
                    id: item.id,
                    title: item.title || 'Video',
                    src: item.video_files[0].link,
                    download: item.url,
                    type:'videos'
                }));
            }
            console.log(data);
            dispatch(setResult(data));
            }catch(err){
                dispatch(setError(err));
            }
         }

        getData();
        
        console.log("This is redux result array: ",flowData)

    },[active,query]);   
    if(err){
        return (<>
        <h1>An Error has occured {err}</h1>
        </>)
    }
    if(load){
        return(<>
        <div className='flex items-center justify-center h-screen'>
            <div className='text-center'>
                <div className='animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mx-auto mb-4'></div>
                <h3 className='text-lg font-semibold text-gray-700'>Loading...</h3>
            </div>
        </div>
        </>)
    }
    
    return(<>
    <div className='w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-8'>
        <div className='max-w-7xl mx-auto'>
            {flowData.length === 0 ? (
                <div className='flex items-center justify-center h-64'>
                    <p className='text-gray-500 text-lg font-medium'>No results found. Try searching for something!</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {flowData.map(function(item, index){
                        return(
                            <ResultCard item={item} key={index}></ResultCard>
                        )
                    })}
                </div>
            )}
        </div>
    </div>

    </>)
}

export default ResultGrid