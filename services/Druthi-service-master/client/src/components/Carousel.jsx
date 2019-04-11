import React from 'react';
import SmallImage from './SmallImage.jsx';
import styled from 'styled-components';

var Div = styled.div`
  display:flex;
  margin-top: 3%;
  margin-left: 77px;
`;

var Carousel = ({ images, displayImageId, selectedImageId, onClick, mouseOverUpdate, changeImageBack }) => {
  return (
    <Div>
      {images.map((image, key) => {
        return <SmallImage selectedImageId={selectedImageId} mouseOverUpdate={mouseOverUpdate} changeImageBack={changeImageBack} onClick={onClick} displayImageId={displayImageId} key={key} image = {image}/>;
      })}
    </Div>
  );
};

export default Carousel;