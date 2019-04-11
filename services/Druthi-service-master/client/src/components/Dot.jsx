import React from 'react';
import styled from 'styled-components';


const Span = styled.span`
  height: ${({image, displayImage}) => image.id.toString() === displayImage.id.toString() ? 8 : 6}px;
  width: ${({image, displayImage}) => image.id.toString() === displayImage.id.toString() ? 8 : 6}px;
  background-color: ${({image, displayImage}) => image.id.toString() === displayImage.id.toString() ? 'white' : '#e7e1dd'};
  border-radius: 50%;
  display: inline-block;
  margin-left: 10px;
`;

var Dots = ({image, displayImage}) => {
  var equalId = image.id.toString() === displayImage.id.toString() ? true : false;
  return (
    <Span image={image} displayImage={displayImage}>
    </Span>
  );
};

export default Dots;