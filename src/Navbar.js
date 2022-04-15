import React from 'react';
import Cal from './Calculator';
import Image from './images/calculator.png';

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
    <div className="flex justify-between items-center space-x-5 w-screen ">
        <p className="display:inline text-2xl bg-blue-500 text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900">
           <img className="w-9 h-9 float-right" src={Image}/>
           Calculator 
        </p>
      <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg">{darkTheme ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
    <Cal/>
  </div>
);