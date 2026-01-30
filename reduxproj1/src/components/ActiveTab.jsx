import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs, setLoading } from '../redux/features/dataSlice.js'

const ActiveTab = () => {
  const dispatch = useDispatch();
  const searched=useSelector((state)=>state.search.query);
  const active = useSelector((state) => state.search.activeTabs)
  const tabs = ['Gifs', 'Videos', 'Images']
  
  function handleTabClick(value) {
    console.log('Active tab is set to'+value)
    dispatch(setActiveTabs(value))
  }

  return (
    <div className="flex gap-3 p-4 mb-6 bg-white rounded-lg shadow-sm">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleTabClick(tab)}
          className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
            tab === active 
              ? 'bg-amber-500 text-white shadow-md hover:bg-amber-600' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {tab}
        </button>
      ))}
      <div className="ml-auto flex items-center px-6 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow duration-200">
        <span className="text-sm font-medium text-gray-700">
          {searched ? (
            <>
              <span className="text-gray-500">Searching: </span>
              <span className="text-purple-600 font-semibold">{searched}</span>
            </>
          ) : (
            <span className="text-gray-400 italic">Search anything...</span>
          )}
        </span>
      </div>
    </div>
  )
}

export default ActiveTab