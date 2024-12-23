// import React from "react";

// const Home = () => {
//   return (
//     <div style={{ backgroundColor: "white", height: "100vh" }}>
//       <h1>Home Page</h1>
//     </div>
//   );
// };

// export default Home;

// import React from "react";

// const ImageGallery = () => {
//   const images = [
//     "ma images/n 1.png",
//     "ma images/n2.png",
//     "ma images/n3.png",
//     "ma images/n4.png",
//     "ma images/n5.png",
//   ];

//   return (
//     <div className="flex mt-5 justify-around flex-wrap">
//       {images.map((src, index) => (
//         <div key={index} className="m-5">
//           <img src={src} alt={`Image ${index + 1}`} className="h-48 w-48" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;

import React from "react";

const Home = () => {
  const items = [
    { id: 1, imgSrc: "src/assets/ma images/n 1.png", title: "Item 1" },
    { id: 2, imgSrc: "src/assets/ma images/n2.png", title: "Item 2" },
    { id: 3, imgSrc: "src/assets/ma images/n3.png", title: "Item 3" },
    { id: 4, imgSrc: "src/assets/ma images/n4.png", title: "Item 4" },
    { id: 5, imgSrc: "src/assets/ma images/n5.png", title: "Item 5" },
  ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-[200px] h-[200px] object-cover rounded-full mb-4"
            />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
