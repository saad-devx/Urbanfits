import React, { useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
// const AboutComponent = dynamic(() => import('@/components/aobutComponent'), {
//     loading: () => <div>Loading...</div>,
//   });
import AboutComponent from '@/components/aobutComponent';

const About = () => {
    return (
        <AboutComponent />
    );
};

export default About;