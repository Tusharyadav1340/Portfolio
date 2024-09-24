import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Tooltip from '../Components/Tooltip';
import man from '../Assets/man.png';
import blender from '../Assets/blender.jpeg';
import css from '../Assets/css.png';
import figma from '../Assets/figma.png';
import html from '../Assets/html.png';
import js from '../Assets/js.png';
import react from '../Assets/react.png';
import tailwind from '../Assets/tailwind.png';
import django from '../Assets/django.png';
import python from '../Assets/python.png';
import bootstrap from '../Assets/bootstrap.jpeg';
import sqlite from '../Assets/sqlite.jpeg';
import signin1 from "../Assets/signin1.mp4";
import ewastevideo from "../Assets/ewastevideo.mp4";
import eventvideo from "../Assets/eventvideo.mp4";
import journeyvideo from "../Assets/journeyvideo.mp4";
import project1 from "../Assets/project1.png";
import project2 from "../Assets/project2.png";
import trophy from "../Assets/trophy.png";
import agnethon from "../Assets/agnethon.jpeg";
import bit from "../Assets/bit and build.png";
import sih from "../Assets/sih.png";
import journeydesign from "../Assets/journeydesign.png";
import ewastedesign from "../Assets/ewastedesign.png";
import opddesign from "../Assets/opddesign.png";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import robot from '../Assets/robot.jpg';
import certifcate1 from '../Assets/certifcate1.jpg';
import certifcate2 from '../Assets/certifcate2.jpg';
/////////////////////////////////////
const skills = [
  { id: 1, icon: blender },   // Blender Image
  { id: 2, icon: css },       // CSS Image
  { id: 3, icon: figma },     // Figma Image
  { id: 4, icon: html },      // HTML Image
  { id: 5, icon: js },        // JavaScript Image
  { id: 6, icon: react },     // React Image
  { id: 7, icon: tailwind },  // Tailwind Image
  { id: 8, icon: django },    // Django Image
  { id: 9, icon: python },    // Python Image
  { id: 10, icon: bootstrap },// Bootstrap Image
  { id: 11, icon: sqlite },   // SQLite Image
];

const carouselItems = [
  { id: 1, content: "Box 1", bgColor: "bg-red-500" },
  { id: 2, content: "Box 2", bgColor: "bg-blue-500" },
  { id: 3, content: "Box 3", bgColor: "bg-green-500" },
  { id: 4, content: "Box 4", bgColor: "bg-yellow-500" },
  { id: 5, content: "Box 5", bgColor: "bg-purple-500" },
];

const carouselItems2 = [
  { id: 1, content: "Item 1", bgColor: "bg-red-500" },
  { id: 2, content: "Item 2", bgColor: "bg-blue-500" },
  { id: 3, content: "Item 3", bgColor: "bg-green-500" },
  { id: 4, content: "Item 4", bgColor: "bg-yellow-500" },
  { id: 5, content: "Item 5", bgColor: "bg-purple-500" },
  { id: 6, content: "Item 6", bgColor: "bg-pink-500" },
  { id: 7, content: "Item 7", bgColor: "bg-orange-500" },
];

const randomPosition = (min, max) => Math.random() * (max - min) + min;

const Homepage = () => {
  const containerRef = useRef(null);
  const [containerBounds, setContainerBounds] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Calculate container bounds once the component is mounted or resized
    const handleResize = () => {
      if (containerRef.current) {
        const bounds = containerRef.current.getBoundingClientRect();
        setContainerBounds({
          width: bounds.width,
          height: bounds.height
        });
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize); // Update bounds on resize

    return () => window.removeEventListener('resize', handleResize); // Clean up listener
  }, []);

  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth - carouselRef.current.offsetWidth;
      setWidth(totalWidth);
    }
  }, []);

  const orbitVariants = {
    rotate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 10,
        ease: 'linear',
      },
    },
    rotateFaster: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 8,
        ease: 'linear',
      },
    },
    rotateFastest: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 6,
        ease: 'linear',
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.8
      }
    }
  };

  const [tooltipText, setTooltipText] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  // Handle mouse enter and leave for specific text parts
  const handleMouseEnter = (text) => {
    setTooltipText(text);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const projectsRef = useRef(null);
  const designRef = useRef(null);

  // Scroll to the Projects section
  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to the Design section
  const handleScrollToDesign = () => {
    designRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black">
      <div className='grid grid-cols-3 p-32'>
        <div className="flex flex-col col-span-2">
          <div>
            <Tooltip text={tooltipText} showTooltip={showTooltip} />
            {/* Interactive text */}
            <p className="text-6xl font-semibold text-yellow-200">
              WEB{' '}
              <span
                className="text-purple-400 cursor-pointer"
                onMouseEnter={() => handleMouseEnter('Project')}
                onMouseLeave={handleMouseLeave}
                onClick={handleScrollToProjects}
              >
                DEVELOPER
              </span>{' '}
              <span className="text-8xl font-bold">&</span>
            </p>
          </div>
          <p className="text-6xl font-semibold ps-40">
            <span className="text-green-300">UI/UX</span> <span className="text-white cursor-pointer" onMouseEnter={() => handleMouseEnter('Design')}
              onMouseLeave={handleMouseLeave} onClick={handleScrollToDesign}>DESIGNER</span>
          </p>
          <p className="text-sm font-semibold text-white text-center w-3/4 px-9 mt-8">
            A self-motivated and enthusiastic <span className="text-purple-400">WEB DEVELOPER</span> with a strong passion to create and a desire to constantly learn and improve my skills.
          </p>
        </div>
        <div className="col-span-1"><img src={man} alt="header1" /></div>
      </div>

      <div className='grid grid-cols-2 mx-11'>
        <div className='col-span-1' onMouseEnter={() => handleMouseEnter('My Skills')}
          onMouseLeave={handleMouseLeave}>
          <Tooltip text={tooltipText} showTooltip={showTooltip} />
          <h1 className='text-white text-6xl font-bold text-center mt-32'>SKILLS</h1>
          <p className='text-[#848484] text-l mt-24 mx-12 text-start'>
            I am skilled in <span className="text-purple-400">ReactJS, JavaScript, HTML5, CSS3,</span> and frameworks like <span className="text-blue-400">Tailwind CSS</span>.
            With strong backend expertise in <span className="text-green-400">Python</span> and <span className="text-green-600">Django</span>, I've built scalable web applications and implemented secure, RESTful APIs.
            I also have experience in UI/UX design using <span className="text-pink-500">Figma</span> and <span className="text-blue-500">Flutter</span> for mobile app development.
            My skills include version control with <span className="text-orange-400">Git</span>, API integration, and Cybersecurity from internship projects.
            I am eager to continuously learn and take on new challenges in full-stack development.
          </p>
        </div>
        <div className='col-span-1 flex justify-center mt-2'>
          {/* Draggable container */}
          <div
            ref={containerRef}
            className="w-[500px] h-[600px] bg-[#171717] rounded-lg flex justify-center items-center"
            style={{ overflow: 'hidden', position: 'relative' }}
          >
            {/* Skill icons */}
            {skills.map(skill => (
              <motion.div
                key={skill.id}
                drag
                dragConstraints={containerRef}
                dragElastic={0.3}
                initial={{
                  x: randomPosition(50, containerBounds.width - 6), // Adjusted for icon size
                  y: randomPosition(9, containerBounds.height - 8) // Adjusted for icon size
                }}
                animate={{
                  x: randomPosition(60, containerBounds.width - 605),
                  y: randomPosition(30, containerBounds.height - 800)
                }}
                transition={{
                  duration: randomPosition(4, 7),
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="absolute p-4"
                onDragStart={(event) => {
                  // Pausing animation when dragging starts
                  event.target.style.animationPlayState = 'paused';
                }}
                onDragEnd={(event) => {
                  // Resume animation after dragging stops
                  event.target.style.animationPlayState = 'running';
                }}
              >
                <div className="w-24 h-24 flex items-center justify-center rounded-lg bg-white">
                  <img src={skill.icon} alt="skill icon" className="w-3/4 h-full object-contain rounded-full" draggable={false} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div ref={projectsRef} id="projects" className='bg-white w-full h-auto my-24 text-end font-bold text-7xl px-24'>PROJECTS</div>
      <div className='grid grid-rows-3 gap-5'>
        <div className='col-span-1 grid grid-cols-3 gap-4'>
          <Tooltip text={tooltipText} showTooltip={showTooltip} />
          <div className='col-span-1 h-96'>
            <img className='px-24' src={project1} alt="project1" />
          </div>
          <div className='col-span-2 grid grid-cols-2 bg-[#171717] h-96' onMouseEnter={() => handleMouseEnter('E-Waste facility')}
            onMouseLeave={handleMouseLeave}>
            <div className="col-span-1 flex ms-10 mt-8 rounded-x-md" style={{ width: '50vw', height: '50vh', overflow: 'hidden' }}>
              <video
                style={{ width: '60%', height: '100%', objectFit: 'cover' }} loop muted autoPlay>
                <source src={ewastevideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='col-span-1'>
              <p className='text-[#848484] text-l mt-16 mx-12 text-center'>
                The project (prototype) is a web application based on <span className="text-blue-400">React-JS</span> for frontend and <span className="text-green-400">Django</span> for backend.
                The project allows the users to locate the nearest <span className="text-yellow-400">e-waste facility</span> for recycling electronic waste.
                The project offers <span className="text-purple-400">inbuilt maps</span> for navigation, <span className="text-orange-400">QR code</span> for rewards system,
                <span className="text-teal-400">Education page</span>, and a lot more.
                The project contains a <span className="text-red-400">full-fledged rewards system</span> where the facility can verify the electronic waste and the user gets <span className="text-yellow-500">digital coins</span> for it.
                The project also contains <span className="text-pink-400">authentication</span> and <span className="text-indigo-400">role-based access</span> to the website with <span className="text-gray-400">private routes</span>.
              </p>
            </div>
          </div>
        </div>

        <div className='col-span-1 grid grid-cols-3 gap-4'>
          <Tooltip text={tooltipText} showTooltip={showTooltip} />
          <div className='col-span-2 grid grid-cols-2 bg-[#171717] h-96 relative' onMouseEnter={() => handleMouseEnter('Journey Jett')}
            onMouseLeave={handleMouseLeave}>
            <div className=" col-span-1 mx-10 mt-8  " style={{ width: '50vw', height: '50vh', overflow: 'hidden' }}>
              <video
                style={{ width: '60%', height: '100%', objectFit: 'cover' }} loop muted autoPlay>
                <source src={journeyvideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='col-span-1'><p className='text-[#848484] text-l mt-16 mx-12 text-center'>
              <span className="text-purple-400 font-semibold">Journey Jett</span> is a web-based travel recommendation system with <span className="text-yellow-400">weather</span> and <span className="text-teal-300">maps</span> integration. The application helps the user to select their travel destination based on the <span className="text-yellow-400">weather</span>.
              The user is also provided with <span className="text-purple-400">saving the trip</span> feature and a <span className="text-pink-400">search feature</span> along with adding a <span className="text-red-400">review</span> to the place using a <span className="text-indigo-400">profile</span>.
              Its technical stack includes <span className="text-blue-400">React-JS</span>, <span className="text-green-500">Django</span>, <span className="text-orange-400">MySQL</span>, <span className="text-purple-500">Map Box</span>, and <span className="text-blue-300">Weather API</span>.
            </p>
            </div>
          </div>
          <div className='col-span-1 h-96'>
            <img className='px-24 ' src={project2} alt="project1" />
          </div>
        </div>
        <div className='col-span-1 grid grid-cols-3 gap-4'>
          <Tooltip text={tooltipText} showTooltip={showTooltip} />
          <div className='col-span-1 h-96'></div>
          <div className='col-span-2 grid grid-cols-2 bg-[#171717] h-96' onMouseEnter={() => handleMouseEnter('EventPro')}
            onMouseLeave={handleMouseLeave}>
            <div className=" col-span-1 ms-10 mt-8 rounded-x-md" style={{ width: '50vw', height: '50vh', overflow: 'hidden' }}>
              <video
                style={{ width: '60%', height: '100%', objectFit: 'cover' }} loop muted autoPlay>
                <source src={eventvideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className='col-span-1'><p className='text-[#848484] text-l mt-16 mx-12 text-center'>
              <span className="text-purple-400">EventPro</span> is an event management software designed to simplify campus event
              planning and foster engagement between
              <span className="text-blue-400"> students</span>,
              <span className="text-green-400"> faculty</span>, and
              <span className="text-orange-400"> administration</span>. It offers secure, role-based access,
              an event proposal form, workflow management, and automated notifications to streamline event coordination.

              Features like <span className="text-pink-500">document uploads</span>,
              <span className="text-blue-500">calendar integration</span>, and
              <span className="text-yellow-400">dashboards</span> for authorities ensure efficient organization and oversight.

              With built-in <span className="text-red-400">analytics</span> and personal event histories, users can track
              past and upcoming registrations and gain insights for future events.
              <span className="text-purple-400">EventPro</span> centralizes event planning, reduces manual efforts,
              and enhances communication for a vibrant campus experience.
            </p></div>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div className="carousel-container bg-[#1E1E1E] mt-12 " onMouseEnter={() => handleMouseEnter('Other Projects coming soon')}
        onMouseLeave={handleMouseLeave}>
        <Tooltip text={tooltipText} showTooltip={showTooltip} />

        <motion.div ref={carouselRef} className="carousel flex space-x-4 p-12 overflow-hidden">
          <motion.div
            className="carousel-track flex gap-8"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {carouselItems.map(item => (
              <motion.div
                key={item.id}
                className={`w-[100px] h-[100px] ${item.bgColor} flex justify-center items-center rounded-lg`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <p className="text-white text-2xl font-bold">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="bg-black text-white py-16">
        {/* Header */}
        <h1 ref={designRef} id="design" className="text-center text-7xl font-semibold mt-64 mb-24">DESIGN</h1>

        {/* Main Boxes (Design Section) */}
        <div className="grid grid-cols-3 gap-4 mb-16 px-64" >
          <Tooltip text={tooltipText} showTooltip={showTooltip} />

          <div className="bg-gray-200 w-full h-[500px] relative" onMouseEnter={() => handleMouseEnter('journey Jett')} onMouseLeave={handleMouseLeave}>
            <img
              src={journeydesign}
              alt="Journey Jett"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-150 absolute top-0 left-0 hover:overflow-visible"
              style={{ position: 'absolute', transformOrigin: 'center center' }}/>
          </div>
          <div className="bg-gray-200 w-full h-[500px] relative" onMouseEnter={() => handleMouseEnter('ewaste design')} onMouseLeave={handleMouseLeave}>
            <img
              src={ewastedesign} alt="Journey Jett" style={{ position: 'absolute', transformOrigin: 'center center' }}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-150 absolute top-0 left-0 hover:overflow-visible"/>
          </div>
          <div className="bg-gray-200 w-full h-[500px] relative" onMouseEnter={() => handleMouseEnter('opd design')} onMouseLeave={handleMouseLeave}>
            <img src={opddesign} alt="Journey Jett" style={{ position: 'absolute', transformOrigin: 'center center' }}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-150 absolute top-0 left-0 hover:overflow-visible"/>
          </div>
        </div>
        {/* Carousel */}
        <div className="carousel-container bg-[#1E1E1E] p-12" onMouseEnter={() => handleMouseEnter('Other Designs coming soon')} onMouseLeave={handleMouseLeave}>
          <Tooltip text={tooltipText} showTooltip={showTooltip} />
          <motion.div ref={carouselRef} className="carousel flex space-x-4 overflow-hidden">
            <motion.div className="carousel-track flex gap-4" drag="x" dragConstraints={{ right: 0, left: -width }}>
              {carouselItems2.map(item => (
                <motion.div key={item.id}  className={`w-[100px] h-[100px] ${item.bgColor} flex justify-center items-center rounded-lg`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  <p className="text-white font-bold">{item.content}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className=" text-white p-12">
        <div className="grid grid-cols-2 gap-8 items-center">
          {/* Left - Trophy */}
          <div className=" col-span-1 flex justify-center">
            <img
              src={trophy}
              alt="Trophy"/>
          </div>
          {/* Right - Achievements List */}
          <div className='col-span-1'>
            <h1 className="text-6xl font-bold mb-8 text-center">ACHIEVEMENTS</h1>
            <div className="grid gap-4">
              {/* Achievements Boxes with Fade Effect */}
              <div className="bg-gray-700 w-full h-[150px] rounded-lg grid grid-cols-4 transition duration-300 hover:bg-gray-600 hover:scale-105">
                <div className=" col-span-1 w-[120px] h-[120px] m-4 rounded-md">
                  <img src={sih} alt="Agnethon" />
                </div>
                <div className=' col-span-3 '>
                  <h1 className="text-2xl font-bold mt-2">Finalists for SIH 2023</h1>
                  <p className="text-[#848484] m-2">I was a finalist (waitlist) at the Smart India Hackathon 2023 for developing an e-waste facility locator. This project aimed to promote sustainability by helping users find the nearest e-waste recycling centers, ensuring proper disposal and recycling of electronic waste.</p>
                </div>
              </div>
              <div
                className="bg-gray-700 w-full h-[150px] rounded-lg grid grid-cols-4 transition duration-300 hover:bg-gray-600 hover:scale-105">
                <div className=" col-span-1 w-[120px] h-[120px] m-4 rounded-md">
                  <img src={bit} alt="Agnethon" />
                </div>
                <div className=' col-span-3 '>
                  <h1 className="text-2xl font-bold mt-2">Participated Bits and Build Hackathon 2024</h1>
                  <p className="text-[#848484] m-2">I participated in the Bits and Build Hackathon 2024 at Fr. Conceicao Rodrigues College of Engineering and Usha Mittal Institute of Technology, where I developed a supply chain management system. </p>
                </div>
              </div>
              <div
                className="bg-gray-700 w-full h-[150px] rounded-lg grid grid-cols-4 transition duration-300 hover:bg-gray-600 hover:scale-105">
                <div className=" col-span-1 w-[120px] h-[120px] m-4 rounded-md">
                  <img src={agnethon} alt="Agnethon" />
                </div>
                <div className=' col-span-3 '>
                  <h1 className="text-2xl font-bold">Participated In Agnethon 2024</h1>
                  <p className="text-[#848484] m-2">I participated in Agnethon, where I developed an event management system. This system was designed to streamline event planning, registration, and coordination, making it easier for organizers and attendees to manage events efficiently.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about */}
      <div className='bg-[#D9D9D9]'>
        <div className='grid grid-cols-3 gap-4 p-32'>
          <div className='col-span-1'>
            <h1 className='text-6xl font-bold '>ABOUT</h1>
            <p className='text-[#848484] text-l mt-6  '>
              Hello! I'm a passionate Frontend Developer with a keen interest in building user-friendly and
              visually appealing web applications. With extensive experience in React, I have contributed
              to numerous personal and team projects, focusing on delivering high-quality code and intuitive user experiences.
              My journey in web development has been marked by active participation in hackathons, where
              I have excelled at developing innovative solutions under tight deadlines.
            </p>
          </div>
          <div className='col-span-2 '>
            <div className='left-10' style={{position: 'relative',height: '400px',width: '500px',margin: 'auto',}}>
              {/* Pivot Point */}
              <div
                style={{ position: 'absolute', left: '50%',top: '50%', width: '10px', height: '10px', backgroundColor: 'black', borderRadius: '50%',transform: 'translate(-50%, -50%)', }}></div>
              {/* Orbit Paths */}
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  border: '2px dashed gray',
                  borderRadius: '50%',
                  width: '500px',  // Increased orbit size
                  height: '500px',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0,
                }}></div>
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  border: '2px dashed gray',
                  borderRadius: '50%',
                  width: '400px',  // Increased orbit size
                  height: '400px',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0,
                }}></div>
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  border: '2px dashed gray',
                  borderRadius: '50%',
                  width: '300px',  // Increased orbit size
                  height: '300px',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0,
                }}></div>
              {/* Revolving Images */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: '100px',  // Larger image size
                  height: '100px',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 10, // Adjust duration for speed
                  ease: 'linear',
                }}>
                <motion.img
                  src={robot}
                  alt="image1"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '0px',
                    left: '250px',  // Position on the edge of the orbit
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 10, // Adjust duration for speed
                    ease: 'linear',
                  }}/>
              </motion.div>
              <motion.div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: '80px',   // Smaller image size
                  height: '80px',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 8, // Adjust duration for speed
                  ease: 'linear',
                }}>
                <motion.img
                  src={certifcate1}
                  alt="image2"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '20%',
                    position: 'absolute',
                    top: '0px',
                    left: '200px',  // Position on the edge of the orbit
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 8, // Adjust duration for speed
                    ease: 'linear',
                  }}/>
              </motion.div>
              <motion.div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  width: '60px',   // Smallest image
                  height: '60px',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 6, // Adjust duration for speed
                  ease: 'linear',
                }}>
                <motion.img
                  src={certifcate2}
                  alt="image3"

                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '0%',
                    position: 'absolute',
                    top: '0px',
                    left: '150px',  // Position on the edge of the orbit
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 6, // Adjust duration for speed
                    ease: 'linear',
                  }}/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <motion.div
          className="bg-black text-white p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          <div className="flex justify-between items-center">
            {/* Social Media Icons */}
            <div className="flex space-x-8">
              <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
                <a href="https://www.instagram.com/0710.tushar2003/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-4xl text-white" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
                <a href="https://www.linkedin.com/in/tushar-yadav-8b7569249" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-4xl text-white" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer">
                <a href="https://github.com/Tusharyadav1340" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-4xl text-white" />
                </a>
              </motion.div>
            </div>
            {/* Email Icon */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer flex justify-center items-center space-x-2"
            >
              <a href="mailto:0710tushar.2003@gmail.com">
                <MdEmail className="text-5xl text-white" />
              </a>
            </motion.div>
            {/* Phone number and Location */}
            <div className="text-right">
              <div className="flex items-center space-x-2 justify-end">
                <BsTelephoneFill className="text-white text-lg" />
                <span className="text-white text-xl">8600104693</span>
              </div>
              <div className="text-white text-lg">Mumbai, India</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;
