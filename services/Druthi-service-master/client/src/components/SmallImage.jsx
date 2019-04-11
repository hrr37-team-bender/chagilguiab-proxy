import React from 'react';
import styled from 'styled-components';

//

const Box = styled.div`
    cursor:pointer;
    height: 32px;
    width: 32px;
    border: ${({id, selectedImageId }) => id.toString() === selectedImageId.toString() ? '2px solid red' : '1px solid black'};
    padding: 5px;
    margin-left: 10px;
    opacity: ${({displayImageId, selectedImageId, id }) => (id.toString() === displayImageId.toString() && displayImageId.toString() !== selectedImageId.toString()) ? 0.4 : 1};
  `;
const Img = styled.img`
    width: 100%;
    height: -webkit-fill-available;
  `;

var SmallImage = ({ image, selectedImageId, displayImageId, onClick, mouseOverUpdate, changeImageBack }) => {
  return (
    <Box onMouseLeave={changeImageBack} onMouseOver={mouseOverUpdate.bind(null, image)}className='small_image' onClick={onClick.bind(null, image)} id={image.id} selectedImageId={selectedImageId} displayImageId={displayImageId}>
      <Img src={image.image_url} />
    </Box>
  );
};

export default SmallImage;