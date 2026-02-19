import { useState } from "react"
import Navbar from "./components/Navbar"
import Modal from "./components/Modal";

const App = () => {
  const [open,setOpen]=useState(false);
  return (
    <div className='w-full h-screen bg_image text-white'>
      <Navbar/>
      <div className="flex flex-col items-center justify-center h-screen">
        <button className="bg-white text-black px-5 py-2.5 rounded-md
         shadow-lg cursor-pointer hover:bg-gray-100 transition duration-300">Click here</button>
      </div>
      <Modal setOpen={setOpen} />
    </div>
  )
}

export default App