import { UserCircle } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-around gap-3 z-40 p-4 bg-gray-900 opacity-80">
      <div className="">
        <h1 
        
        className="text-sm sm:text-lg font-semibold md:text-xl
         cursor-pointer">
          Izzatbek <span className="text-pink-600">Abdusharipov</span>
        </h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <li className="cursor-pointer hover:text-pink-500 transition duration-300 font-medium">Home</li>
          <li className="cursor-pointer hover:text-pink-500 transition duration-300 font-medium">About</li>
          <li className="cursor-pointer hover:text-pink-500 transition duration-300 font-medium">Service</li>
          <li className="cursor-pointer hover:text-pink-500 transition duration-300 font-medium">Project</li>
          <li className="cursor-pointer hover:text-pink-500 transition duration-300 font-medium">Contact</li>
        </ul>
      </div>
      <div className="text-pink-500 cursor-pointer hover:text-white">
        <UserCircle />
      </div>
    </div>
  );
};

export default Navbar;
