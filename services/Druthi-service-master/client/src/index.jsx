import React from 'react';
import { render } from 'react-dom';
import Images from './components/App.jsx';

window.ImageCarousel = Images;
render(<Images />, document.getElementById('Images') || document.createElement('div'));