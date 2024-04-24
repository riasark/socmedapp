import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation()
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    const fetchUserHobbies = async () => {
      try {
        const queryParams = new URLSearchParams(location.search)
        const userId = queryParams.get('userId');
        const response = await axios.get(`http://localhost:3030/users/${userId}`); 
        if(Array.isArray(response.data)){
          setHobbies(response.data);
        }  
        else{
          console.log(response.data)
        }
      } catch (error) {
        console.error("Error fetching user hobbies:", error);
      }
    };

    fetchUserHobbies();
  }, [location.search]);

  return (
<<<<<<< HEAD
    <div className="relative h-[730px] hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700">
      <button
        type="button"
        className="text-gray-500 hover:text-gray-600"
        data-hs-overlay="#docs-sidebar"
        aria-controls="docs-sidebar"
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle Navigation</span>
        <svg
          className="flex-shrink-0 size-4"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          ></path>
        </svg>
      </button>
=======
    <div id="application-sidebar" class="hs-overlay [--auto-close:lg]
      hs-overlay-open:translate-x-0
      -translate-x-full transition-all duration-300 transform
      w-[260px]
      hidden
      fixed inset-y-0 start-0 z-[60]
      bg-white border-e border-gray-200
      lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
      dark:bg-neutral-800 dark:border-neutral-700
    ">
  <div class="px-8 pt-4">
    <h1 class="text-4xl font-extrabold dark:text-white">Your Hobbies</h1>
  </div>
>>>>>>> page-test

  <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
    <ul className="space-y-1.5">
      {hobbies.map((hobby) => (
        <li>
          <a
            className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-700 dark:text-white"
            href={`http://localhost:3030/hobbies/${hobby._id}`}
          >
          {hobby}
          </a>
        </li>
      ))}
    </ul>
  </nav>
</div>
  );
}

export default SideBar;
