import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
          if (window.pageYOffset > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', toggleVisibility);
    
        return () => {
          window.removeEventListener('scroll', toggleVisibility);
        };
      }, []);
    // useEffect(() => {
    //     const toggleVisibility = () => {
    //       if (window.pageYOffset > 300) {
    //         setIsVisible(true);
    //       } else {
    //         setIsVisible(false);
    //       }
    //     };
    
    //     window.addEventListener('scroll', toggleVisibility);
    
    //     return () => {
    //       window.removeEventListener('scroll', toggleVisibility);
    //     };
    //   }, []);

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    
      return (
        <div className={`scroll-up-arrow ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      );
  
}

export default ScrollUp