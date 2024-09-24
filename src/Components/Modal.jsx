import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RxCross2 } from "react-icons/rx";
import { GrDocumentPdf } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import me from '../Assets/me.jpg';
import resume from '../Assets/tusharcv333.pdf'; // path to your resume

export const Modal = ({ handleCloseModal, showModal }) => {

    const handleClose = () => {
        handleCloseModal();
    };

    const inputAnimation = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
        transition: { duration: 0.3 }
    };

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                    id="static-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="absolute top-0 right-0 z-50 flex justify-center items-center rounded-lg"
                >
                    <div className="relative m-10 w-auto max-h-full">
                        <div className="relative bg-[#2A2A2A] rounded-xl w-auto px-4 p-6 text-center">

                            {/* Close button at the top-right corner */}
                            <button
                                onClick={handleClose}
                                className="absolute top-4 right-4 text-white text-3xl"
                            >
                                <RxCross2 />
                            </button>

                            {/* Circular Image */}
                            <motion.img
                                src={me}
                                alt="Profile"
                                className="rounded-full w-40 h-40 mx-auto mb-2 object-cover"
                                initial={inputAnimation.initial}
                                animate={inputAnimation.animate}
                                exit={inputAnimation.exit}
                                transition={inputAnimation.transition}
                            />
                            <h2 className="text-xl text-white font-light mb-6">Tushar Yadav</h2>
                            <div>
                                <motion.a
                                    href={resume}
                                    download="tusharcv333.pdf"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                    className="w-64 bg-[#484848] text-white text-xl font-light py-2 rounded-lg flex items-center justify-center"
                                >
                                    <GrDocumentPdf className="mr-2" /> Download Resume
                                </motion.a>
                            </div>
                            <div className='grid grid-cols-3 gap-4 m-5 mt-4'>
                                <div className='col-span-1'>
                                    <motion.a
                                        href="https://github.com/Tusharyadav1340"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        className="w-full h-full bg-[#484848] text-white p-2 rounded-lg flex items-center justify-center"
                                    >
                                        <FaGithub className='size-10' />
                                    </motion.a>
                                </div>
                                <div className='col-span-1'>
                                    <motion.a
                                        href="https://www.linkedin.com/in/tushar-yadav-8b7569249"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        className="w-full h-full bg-[#484848] text-white p-2 rounded-lg flex items-center justify-center"
                                    >
                                        <FaLinkedin className='size-10' />
                                    </motion.a>
                                </div>
                                <div className='col-span-1'>
                                    <motion.a
                                        href="mailto:0710tushar.2003@gmail.com"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        className="w-full h-full bg-[#484848] text-white p-2 rounded-lg flex items-center justify-center"
                                    >
                                        <SiGmail className='size-10' />
                                    </motion.a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
