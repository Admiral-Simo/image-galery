import React from "react";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen p-3 bg-cyan-50 font-poppins">
      {/* Card Container */}
      <div className="p-6 space-y-10 bg-white shadow-2xl rounded-3xl md:p-40">
        <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
          {/* Menu Container */}
          <MenuItem title="Vector" />
          <MenuItem title="Illustrations" />
          <MenuItem title="Images" />
          <MenuItem title="Icons" />
        </div>
        {/* Search Container */}
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
          {/* Input and svg container */}
          <div className="flex justify-between border-b">
            <input
              type="text"
              placeholder="Search"
              className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 text-gray-300 duration-200 hover:scale-110"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="10" cy="10" r="7"></circle>
                <line x1="21" y1="21" x2="15" y2="15"></line>
              </svg>
            </button>
          </div>
          {/* Upload Button */}
          <button className="py-3 text-lg font-normal text-white duration-200 bg-black border border-black rounded-md shadow-2xl px-14 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>
        <GaleryImages />
      </div>
    </div>
  );
}

export default App;
function GaleryImages() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Image image={require('./images/image1.jpg')} />
      <Image image={require('./images/image2.jpg')} />
      <Image image={require('./images/image3.jpg')} />
      <Image image={require('./images/image4.jpg')} />
      <Image image={require('./images/image5.jpg')} />
      <Image image={require('./images/image6.jpg')} />      
    </div>
  );
}

function Image({image}) {
  return (
    <div className="relative group">
      <img
        src={image}
        alt="wallpaper"
        className="w-72"
      />
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
        <div className="flex justify-between w-full">
          <div className="font-normal">
            <p className="text-sm">Abstract Painting</p>
            <p className="text-xs">245 likes - 35 Shares</p>
          </div>
          <div className="flex items-center">
           <BookMark />
          </div>
        </div>
      </div>
    </div>
  );
}



function BookMark() {
  return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2" />
  </svg>;
}

function MenuItem({ title }) {
  return (
    <div className="group">
      <a href="#">{title}</a>
      <div className="mt-2 duration-500 border-b-2 border-black opacity-0 group-hover:opacity-100"></div>
    </div>
  );
}
