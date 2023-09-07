import React from "react";
import * as Locker from './Locker';

const KBVE = ({ ve }) => {
  const category = ve.getAttribute("category") ? ve.getAttribute("category") : "General";
  const img = ve.getAttribute("img") ? ve.getAttribute("img") : "https://source.unsplash.com/random/480x360/?4"
  const title = ve.getAttribute("title") ? ve.getAttribute("title") : "Title";
  const link = ve.getAttribute("link") ? ve.getAttribute("link") : "/#";


  return (
    <>
      <div className="max-w-lg p-4 shadow-md bg-default dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href={link}
              className="mb-0 capitalize dark:text-gray-100">
              {category}
            </a>
          </div>
          <a rel="noopener noreferrer" href="#">
            See All
          </a>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={img}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-orange-400">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </a>
            <p className="leadi dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default KBVE;
