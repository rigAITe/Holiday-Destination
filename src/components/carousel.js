import React from 'react';

import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slide1 from '../images/slide1.jpg'
import Slide2 from '../images/slide2.jpg'
import Slide3 from '../images/slide3.jpg'
import Slide4 from '../images/slide4.jpg'
import Slide5 from '../images/slide5.jpg'

const items = [
  {
    src: Slide1,
    altText: 'Slide 1',
    // caption: 'Slide 1',
    header: 'Airline',
    key: '1'
  },
  {
    src: Slide2,
    altText: 'Slide 2',
    // caption: 'Slide 2',
    header: 'Hotel and Resort Centers',
    key: '2'
  },
  {
    src: Slide3,
    altText: 'Slide 3',
    // caption: 'Slide 3',
    header: 'Travel tour guide companies',
    key: '3'
  },
  {
    src: Slide4,
    altText: 'Slide 4',
    // caption: 'Slide 4',
    header: 'Recreational Tourist agencies',
    key: '3'
  },
  {
    src: Slide5,
    altText: 'Slide 5',
    // caption: 'Slide 5',
    header: 'Ministry of Tourism',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;

