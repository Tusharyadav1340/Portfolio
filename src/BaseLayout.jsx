import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './transitions.css'; // Ensure this path is correct

const BaseLayout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <TransitionGroup className="relative overflow-hidden">
        <CSSTransition
          key={location.pathname}
          timeout={500}
          classNames="slide-up"
        >
          <div className="w-full h-full">
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default BaseLayout;
