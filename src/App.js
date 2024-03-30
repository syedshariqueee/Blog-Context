import React from 'react'
import Header from './components/Header';
import Blogs from './components/Blogs'
import Pagination from './components/Pagination';
// import { AppContext } from './Context/AppContext';


export const App = () => {
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      

      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>


    </div>
  )
}

export default App