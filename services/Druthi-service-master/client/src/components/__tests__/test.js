import React from 'react';
import { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DisplayImage from '../DisplayImage.jsx';
import SmallImage from '../SmallImage.jsx';
import Carousel from '../Carousel.jsx';
import App from '../App.jsx';
import index from '../../index.jsx';
//import axios from 'axios';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  test('should render', () => {
    const Wrapper = shallow(<App />);
    expect((Wrapper).exists()).toBe(true);
  });
});
let image = { 'id': 21, 'image_url': 'http://lorempixel.com/640/480/cats'};
describe('Display image', () => {
  it('should display large image', () => {
    const Wrapper = render(<DisplayImage image={image}/>);
    expect(Wrapper.find('img').prop('src')).toEqual(image.image_url);
  });
  it('should display small images', () => {
    let onClick = jest.fn();
    const Wrapper = render(<SmallImage onClick={onClick} displayImageId={1} image={image}/>);
    expect(Wrapper.find('img').prop('src')).toEqual(image.image_url);
  });
  // it('should update large image onClick of small image', () => {
  //   let onClick = jest.fn();
  //   let images = [{"id":1,"image_url":"https://catfriendly.com/wp-content/uploads/2018/08/AdobeStock_125402488.jpeg"},
  //     {"id":1,"image_url":"https://s.abcnews.com/images/Lifestyle/cats-dogs4-gty-mem-171130_16x9_1600.jpg"}];
  //   const Wrapper = render(<SmallImage onClick={onClick} displayImageId={1} image={image}/>);
  //   console.log(Wrapper);
  //   Wrapper.find('div').simulate('click');
  //   expect(onClick).toHaveBeenCalled();
  // });
});

