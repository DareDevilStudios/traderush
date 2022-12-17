import React, { useState } from 'react';

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative inline-block text-left mr-9">
      <div>
        <span className="rounded-md shadow-sm">
          <select
            
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2.5 bg-blue-700 text-sm leading-5 font-medium text-white hover:text-white focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
            onClick={toggleDropdown}
          >
            Dropdown
          </select>
        </span>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg border border-blue-300">
          <div className="rounded-md bg-white shadow-xs">
            <div className="py-1">
              <option
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-100 focus:outline-none focus:bg-gray-100"
              >
                {props.option[0]}
              </option>
              <option
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-100 focus:outline-none focus:bg-gray-100"
              >
                {props.option[1]}
              </option>
              <option
                href="#"
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-blue-100 focus:outline-none focus:bg-gray-100"
              >
                {props.option[2]}
              </option>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;