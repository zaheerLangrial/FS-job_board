import React from "react";

const JobRow = () => {
  return (
    <>
      <div className="bg-white p-4 flex gap-4 rounded-lg shadow-sm">
        <div className=" content-center">
          <img
            className=" size-12"
            src="https://static.vecteezy.com/system/resources/previews/015/280/523/non_2x/job-logo-icon-with-tie-image-free-vector.jpg"
            alt=""
            // width={100}
            // height={100}
          />
        </div>
        <div className=" grow">
          <div className="text-gray-500 text-sm">Spotify</div>
          <div className="font-bold mb-1 text-lg">Product designer</div>
          <div className="text-sm text-gray-400">
            Remote &middot; New York, US &middot; Full-time
          </div>
        </div>
        <div className="content-end text-sm text-gray-400">2 weeks ago</div>
      </div>
    </>
  );
};

export default JobRow;
