import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';


const Pagination = () => {

  const {page,handlerPageChange, totalPages} = useContext(AppContext);
  // const {handlerPageChange} = useContext(AppContextProvider);

  return (
    <div className='class=" fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 w-full'>
    <div className='flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto'>
      {
        page > 1 &&
        <button className='border-2 bg-red-600 text-white border-gray-300 py-1 px-4 rounded-md' onClick={() => handlerPageChange(page - 1)}>Previous</button>
      }
      {
        page < totalPages &&
        <button className='border-2 border-gray-300 text-white bg-green-600 py-1 px-4 rounded-md' onClick={() => handlerPageChange(page + 1)}>Next</button>
      }

      <p className='border-2 border-gray-300 text-white  font-bold bg-blue-400 py-1 px-4 rounded-md text-sm ml-auto'>Page {page} of {totalPages}</p>
    </div>
  </div>
  )
}

export default Pagination