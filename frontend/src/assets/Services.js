import image from './homeImage.png'
import gainWeight from './gainWeight.png'
import loseWeight from './loseWeight.png'
import hairAndSkinCare from './skinCare.png'
import stressManagement from './stressManagement.png'

const services = [
    {
      id: 1,
      title: 'Hair and Skin Care',
      description: 'Comprehensive solutions for healthy hair and skin.',
      imageUrl: hairAndSkinCare,
      to:"/services/hairandskin"
      
    },
    {
      id: 2,
      title: 'Weight Gain',
      description: 'Personalized diet and exercise plans for healthy weight gain.',
      imageUrl: gainWeight,
      to:"/services/weightgain"
    },
    {
      id: 3,
      title: 'Weight Loss',
      description: 'Effective and sustainable strategies for weight loss.',
      imageUrl: loseWeight,
      to:"/services/weightloss"
    },
    {
      id: 4,
      title: 'Stress Management',
      description: 'Techniques and support to manage stress effectively.',
      imageUrl: stressManagement,
      to:"/services/stress"
    },
    
  ];
export default services;
// this is for our services detail and is we have to add a service we can add data here and service is automatically added to our services page no need to hardcode there