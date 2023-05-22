import React, { useEffect, useRef } from 'react';
import { Controller, Scene } from 'scrollmagic';
import { TweenMax } from 'gsap';

const About = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const controller = new Controller();

    new Scene({
      triggerElement: scrollRef.current,
      triggerHook: 'onLeave',
      duration: '200%', // Adjust the duration based on your design
    })
      .setPin(scrollRef.current)
      .setTween(TweenMax.fromTo(scrollRef.current, 1, { x: '0%' }, { x: '-100%' }))
      .addTo(controller);

    return () => {
      controller.destroy();
    };
  }, []);

  return (
    <div>
      <div style={{ width: '200%' }} ref={scrollRef}>
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default About;

