/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Link } from 'react-router-dom';

import Ad from './components/Ad';
import { Container } from './styles';

interface IAdverts {
  announcements: any;
}

const Adverts = ({ announcements }: IAdverts) => {
  return (
    <Container>
      <div className="ads">
        {announcements?.length &&
          announcements.map((announcement: any) => (
            <Link to={`/advert/${announcement?.id}`}>
              <Ad
                isPausedAd={announcement?.paused}
                image={announcement?.car?.carImages[0]?.image_url}
                year={announcement?.car?.year_manufacture}
                brand={announcement?.car?.brand}
                model={announcement?.car?.model}
                price={announcement?.price}
                created_at={announcement?.created_at}
              />
            </Link>
          ))}
      </div>
    </Container>
  );
};

export default Adverts;
