import React, {Component} from 'react';
import Carousel from './Carousel.jsx';
import DisplayImage from './DisplayImage.jsx';
import styled from 'styled-components';
import axios from 'axios';
import _ from 'lodash';


let mode = 'development';
let url = {
  production: '',
  development: 'http://localhost:3001'
};

var MainContainer = styled.div`
  margin-left:50px;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smallImages: [],
      displayImage: {},
      selectedImage: {},
      hover: false
    };
    this.changeImage = this.changeImage.bind(this);
    this.mouseOverUpdate = this.mouseOverUpdate.bind(this);
    this.changeImageBack = this.changeImageBack.bind(this);
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
  }

  componentDidMount() {
    console.log(window.location.href);
    let urlSplit = window.location.href.split('/');
    let id = urlSplit[urlSplit.length - 2];
    axios({
      method: 'get',
      url: `${url[mode]}/images/${id}`,
      'content-type': 'application/json'
    })
      .then((response) => {
        console.log(response);
        this.setState({
          smallImages: response.data,
          displayImage: response.data[0],
          selectedImage: response.data[0]
        });
      });
  }

  changeImage(image) {
    this.setState( {
      displayImage: image,
      selectedImage: image
    });
  }

  mouseOverUpdate(image) {
    this.setState( {
      displayImage: image,
      hover: true
    });
  }

  changeImageBack() {
    this.setState( {
      displayImage: this.state.selectedImage,
    });
  }

  onClickLeft() {
    let { selectedImage, smallImages } = this.state;
    let index = _.findIndex(smallImages, (img) => {
      return img.id.toString() === selectedImage.id.toString();
    });
    if (index > 0) {
      this.setState({
        selectedImage: smallImages[ index - 1],
        displayImage: smallImages[ index - 1],
        hover: false
      });
    }
  }

  onClickRight() {
    let { selectedImage, smallImages } = this.state;
    let index = _.findIndex(smallImages, (img) => {
      return img.id.toString() === selectedImage.id.toString();
    });
    if (index !== smallImages.length - 1) {
      this.setState({
        selectedImage: smallImages[ index + 1],
        displayImage: smallImages[ index + 1],
        animationRun: true,
        hover: false
      });
    }
  }

  render() {
    return (
      <MainContainer>
        <DisplayImage animationRun={this.state.animationRun} images={this.state.smallImages} onClickLeft={this.onClickLeft} onClickRight={this.onClickRight} image={this.state.displayImage} hoverSmallImage={this.state.hover}/>
        <Carousel selectedImageId={this.state.selectedImage.id} mouseOverUpdate={this.mouseOverUpdate} onClick={this.changeImage} displayImageId = {this.state.displayImage.id} changeImageBack={this.changeImageBack} images={this.state.smallImages}/>
      </MainContainer>
    );
  }
}
export default App;