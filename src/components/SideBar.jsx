import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export default function SideBar() {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(true);

  const toggleSubmenu = () => {
    setIsSubmenuVisible(!isSubmenuVisible);
  };

  const openSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('hidden');
    }
  };

  return (
    <>
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={openSidebar}
      >
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>

      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <FontAwesomeIcon icon={faBullhorn} />
            <h1 className="font-bold text-gray-200 text-[20px] ml-3"><span className='font-semibold'>Announce</span><span className='font-bold'>Sync</span></h1>
            <i
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
              onClick={openSidebar}
            ></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        <div
          className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${isSubmenuVisible ? '' : 'hidden'}`}
          id="submenu"
        >
          <h1 className="cursor-pointer p-2 hover:bg-gray-800 rounded-md mt-1 flex gap-6">
            <FontAwesomeIcon icon={faUser} />
            DashBoard
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-800 rounded-md mt-1 flex gap-6">
          <FontAwesomeIcon icon={faUser} />
            Profile
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-800 rounded-md mt-1 flex gap-6">
          <FontAwesomeIcon icon={faBullhorn} />
            Announcement
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-800 rounded-md mt-1 flex gap-6">
          <FontAwesomeIcon icon={faNewspaper} />
            News
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-800 rounded-md mt-1 flex gap-6">
          <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
          </h1>
        </div>
    </div>
    </>
  );
}
