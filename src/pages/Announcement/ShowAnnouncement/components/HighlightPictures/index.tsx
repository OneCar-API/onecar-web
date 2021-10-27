import React from 'react';

import { Container } from './styles';

interface IHighlightPictures {
  main: string;
  gallery?: Array<string>;
}

const HighlightPictures: React.FC<IHighlightPictures> = ({ main, gallery }) => {
  return (
    <Container>
      <img src={main} alt="" />
      <div className="gallery">
        {gallery?.map(picture => (
          <img src={picture} alt="" />
        ))}
      </div>
    </Container>
  );
};

export default HighlightPictures;
