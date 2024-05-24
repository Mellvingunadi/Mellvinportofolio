import React, { useState } from 'react';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import './App.css';
import Footer from './footer';
import myImageSrc from './Image/image.png';
import image1 from'./Portofolio/image1.png';
import image2 from './Portofolio/image2.png';
import image3 from './Portofolio/image3.png';




function App() {

  const image =[
    {
      src:image1,
      id:1,
    },
    {
      src: image2,
      id:2,
    },
    {
      src: image3,
      id:3,
    },

  
  
  ];

  const [currentIndex, setIndex] = useState(0);

  {/* Previous Slide Function */}

  const prevSlide = () => {
    const isfirstSlide = currentIndex === 0;
    const updatedIndex = isfirstSlide ? image.length - 1 : currentIndex - 1;
    setIndex(updatedIndex);
  }

  const nextSlide = () =>{
    const isLastSlide = currentIndex === image.length - 1;
    const updatedIndex = isLastSlide ? 0 : currentIndex + 1;
    setIndex(updatedIndex);
  }


  return (
    <div className="App h-full w-full animated-background bg-gradient-to-r from-black via-gray-500  to-indigo-500">
      {/*NavBar */}
        <div className='flex justify-between items-center bg-blue-50 bg-opacity-10 p-7 h-[80px]' alt="navBar">
            <h3 className='font-mono font-medium text-white'>Mellvin gunadi</h3>
            <ul>
              <a href="mailto:mellvingunadi@gmail.com" className='text-center cursor-pointer bg-white bg-opacity-50 p-3 w-32 shadow-md rounded-md text-black '>Contact Me</a>
            </ul>
        </div>

        {/*Body Page */}
      <div className=''>
           {/*Main Image Container */}
            <div className="flex justify-center mt-16">
               <img class="rounded-full mt-5 max-w-[800px] min-w-56 h-auto" src={myImageSrc}/>
            </div>
           
           <div className="justify-items-center ">
              <div className="text-center">
                  {/* Main Title */}
                  <h1 className="mt-2 text-4xl text-white">I'm Mellvin Gunadi</h1>
                  <h4 className=" text-lg font-medium text-white">Interactive Developer</h4>
                  <p className="m-2 text-gray-300 font-semibold font-mono md:h-full md:w-68 md:p-10 sm:p-5 ">Passionate developer with combination of UI & UX Designer & Web Developer, Crafting Beautiful website application with interactive user experience.</p>
                  <a href="mailto:mellvingunadi@gmail.com">
                     <button className='bg-slate-100 h-[50px] w-[150px] border rounded-full font-semibold text-white hover:bg-gray-100 duration-200 hover:text-black' type='button'>Contact Me</button>
                  </a>
                 
              </div>
           </div>

            {/* Section About Me */}
            <div className='text-center p-7 gap-5 justify-items-center mt-3'>
              <h1 className='text-5xl text-white'>About Me</h1>
              <p className='mt-8 text-gray-300 md:h-full md:w-68 md:p-10 md:ml-10 md:mr-10 md sm:p-5'>As a dedicated web developer and UI/UX designer, I specialize in crafting unique and engaging digital experiences. With a keen eye for design and a passion for coding, I help small and medium businesses create websites that not only look stunning but also provide intuitive user experiences.</p>
              <p className='mt-8 text-gray-300 md:h-full md:w-68 md:p-10 md:ml-10 md:mr-10 md sm:p-5'>Over the years, I've honed my skills in various web technologies and design principles, ensuring each project is both visually appealing and highly functional. My approach combines creativity with precision, delivering results that exceed client expectations.</p>
            </div>

            {/* Experience */}

            <div className=' grid text-center p-7 gap-5 justify-items-center mt-3'>
    
                <h1 className='text-5xl text-white'>Experience</h1>
                <p className='text-gray-300 md:h-full md:w-68 md:p-10 md:ml-10 md:mr-10 sm:p-5'>I had the privilege of working with various clients, helping them transform their digital presence through exceptional UI and UX design. By leveraging my expertise in tools like Figma for design and technologies such as React and Next.js for web application development, I've consistently delivered projects that meet and exceed client expectations</p>
                    <ul className='flex gap-5'>
                        <li className='text-center cursor-pointer bg-white bg-opacity-30 text-white p-2 w-auto rounded-2xl'>React</li>
                        <li className='text-center cursor-pointer bg-white bg-opacity-30 text-white p-2 w-auto rounded-2xl'>Next JS</li>
                        <li className='text-center cursor-pointer bg-white bg-opacity-30 text-white p-2 w-auto rounded-2xl'>Figma</li>
                    </ul>
                
       
            </div>

            {/* Project Showcase */}
            <h1 className='text-5xl py-8 text-center text-white'>Projects</h1>
           

      </div>
      <div className='group text-center w-full h-full overflow-hidden m-auto py-10 px-4 relative aspect-square md:p-10 md:w-[800px] md:justify-center md:items-center'>
    <div style={{ backgroundImage: `url(${image[currentIndex].src})`, backgroundSize: 'cover', objectFit: 'cover' }} className='image-container r w-full h-full aspect-square object-cover rounded-xl bg-center duration-500'></div>

  {/**Previous Icon */}
  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -trasnlate-y-[50%] left-5  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
     <GrPrevious onClick={prevSlide} size={30}/>
  </div>

  {/*Next Icon */}
  <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -trasnlate-y-[50%] right-5  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
     <GrNext onClick={nextSlide} size={30}/>
  </div>
</div>

<Footer/>
   
    </div>
  );
}

export default App;


