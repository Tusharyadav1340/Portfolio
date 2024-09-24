import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {Modal} from './Modal';
import { motion,AnimateSharedLayout, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleOpenModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  return (
    <div className='bg-black text-white h-16 flex items-center justify-center relative'>
      <h1 className='text-2xl'>Me</h1>
      <motion.button className='absolute right-4 text-2xl cursor-pointer'  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => handleOpenModal('Notes for Profile 1')}>
      <FaBars 
         
        
      /></motion.button>
      
      <Modal handleCloseModal={handleCloseModal}   showModal={showModal}/>
    </div>
  );
}

export default Navbar;
