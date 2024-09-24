import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Function to generate a random hex color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Tooltip = ({ text, showTooltip }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bgColor, setBgColor] = useState('#ffffff');

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update background color when tooltip is shown
  useEffect(() => {
    if (showTooltip) {
      setBgColor(getRandomColor());
    }
  }, [showTooltip]);

  return (
    <>
      {showTooltip && (
        <motion.div
          className="fixed z-50 pointer-events-none"
          style={{
            top: `${position.y + 20}px`,
            left: `${position.x + 20}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        >
          <div
            className="text-black py-1 px-3 rounded-full  shadow-lg"
            style={{ backgroundColor: bgColor }}
          >
            {text}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Tooltip;
