import { Info, X } from 'lucide-react'
import { motion } from 'framer-motion';

const Modal = ({setOpen}) => {
  return (
    <div onClick={()=>setOpen(false)} className='fixed inset-0 flex flex-col items-center justify-center w-full h-screen bg-black/80 z-40'>
      <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 0.8 }}
      exit={{ opacity: 0.4 }} 
      onClick={e=>e.stopPropagation()}
      className="absolute  w-full max-w-lg bg-white text-black p-6 rounded-md shadow-md z-50">
        <button onClick={()=>setOpen(false)} className='cursor-pointer text-gray-500 hover:text-gray-300 transition-all duration-300
         hover:rotate-90 hover:scale-110'>
          <X/>
        </button>
        <button className='flex items-center justify-center mx-auto text-pink-500'>
          <Info size={56} />
        </button>
        <div className="py-4 text-center">
          <h1 className='text-2xl font-semibold'>This is a modal for test</h1>
          <p className='text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="flex items-center gap-3 pt-4">
          <button className='bg-red-400 text-white hover:bg-red-300 transition duration-300 px-5 py-2.5 rounded-md shadow-md
           w-full' onClick={()=>setOpen(false)}>Cancel</button>
          <button className='bg-gray-300 px-5 py-2.5 shadow-md rounded-md w-full
           cursor-pointer hover:bg-gray-200 transition duration-300'>Next</button>
        </div>
      </motion.div>
    </div>
  )
}

export default Modal