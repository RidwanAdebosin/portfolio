// import { useState } from 'react';
// import { links } from '../assets/data';
// import Hamburger from "hamburger-react";

// const Navbar = () => {
//   const [hamburgerIsOpen, setHamburgerIsOpen]= useState(false);


//   return (
//     <nav className='bg-black fixed w-full top-0 left-0'>
//       <div className='flex align-element justify-between py-2 px-4'>
//         <h2 className='text-white text-3xl font-bold'>
//           Rid
//           <span className='text-emerald-200'>Web</span>
//         </h2>
//         <div className='md:hidden'>
//           <Hamburger color="white" toggle={setHamburgerIsOpen} toggled={hamburgerIsOpen}/>
//         <div className={` md:hidden absolute top-15.9 left-0 w-full h-screen bg-black bg-opacity-50 transition-transform duration-300 ${hamburgerIsOpen ? 'flex flex-col gap-14 translate-x-0 mt-76 min-w-full bg-custom p-4 shadow-custom backdrop-filter border border-none' : 'hidden'}`}>
//           {links.map((link) => {
//             const { id, href, text } = link;
//             return (
//               <a
//               key={id}
//               href={href}
//               onClick={(() => setHamburgerIsOpen(!hamburgerIsOpen))}
//               className='text-white justify-end capitalize text-lg tracking-wide hover:text-black duration-300'
//               >
//                 {text}
//               </a>
//             );
//           })}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;

// // sm:flex-row sm:gap-x-16 sm:items-center sm:py-8

import { useState } from 'react';
import { links } from '../assets/data';
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  return (
    <nav className='bg-black fixed w-full top-0 left-0'>
      <div className='flex justify-between items-center py-2 px-4'>
        <h2 className='text-white text-3xl font-bold'>
          Rid
          <span className='text-emerald-200'>Web</span>
        </h2>
        <div className='md:hidden'>
          <Hamburger color="white" toggle={setHamburgerIsOpen} toggled={hamburgerIsOpen} />
        </div>
        <div className='hidden md:flex md:space-x-4'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='text-white capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
      <div className={`absolute left-0 w-full h-screen bg-black bg-opacity-50 transition-transform duration-300 ${hamburgerIsOpen ? 'flex flex-col gap-14 translate-x-0 mt-76 min-w-full bg-custom p-4 shadow-custom backdrop-filter border border-none' : 'hidden'}`}>
        <div className='flex flex-col items-center justify-start h-full space-y-5'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                onClick={(() => setHamburgerIsOpen(!hamburgerIsOpen))}
                className='text-white capitalize text-lg tracking-wide hover:text-emerald-600 duration-300'
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
