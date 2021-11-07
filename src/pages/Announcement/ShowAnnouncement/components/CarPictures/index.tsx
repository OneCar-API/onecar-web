/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAuth } from '../../../../../hooks/auth';
import api from '../../../../../services/api';

import NoImageThumb from '../../../../../assets/images/no-image-thumb.png';

import { Container } from './styles';

interface RouterParams {
  id: string;
}
interface ICarPictures {
  pictures: any;
}

const CarPictures = ({ pictures }: ICarPictures) => {
  const [mainPicture, setMainPicture] = useState();
  const [announcement, setAnnouncement] = useState(Object);
  const { token } = useAuth();
  const { id } = useParams<RouterParams>();

  useEffect(() => {
    showAnnouncements();
  }, [id]);

  async function showAnnouncements() {
    const response = await api.get(`/ads/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setAnnouncement(response.data);
  }

  const sendPicturesResquest = async (formData: any) => {
    try {
      const response = await api.post(
        `/ads/${announcement?.id}/car/${announcement?.car?.id}/car-image`,
        formData,
        {
          headers: {
            'content-type': 'multipart/form-data',
            authorization: `Bearer ${token}`,
          },
        },
      );

      return response.status;
    } catch (error: any) {
      return error.response;
    }
  };

  async function handleSendPictures(pictures: any) {
    const formData = new FormData();

    for (let i = 0; i < pictures.length; i++) {
      formData.append('image', pictures[i], pictures[i].name);
    }

    const pictureResponse = await sendPicturesResquest(formData);

    if (pictureResponse === 200) location.reload();
  }

  useEffect(() => {
    if (pictures?.length) {
      setMainPicture(pictures[1]?.image);
    }
  }, [pictures]);

  return (
    <Container>
      <img src={mainPicture} alt="" />

      <div className="gallery-and-upload">
        <label>
          <input
            id="upload"
            placeholder="Enviar Imagens"
            type="file"
            name="image"
            accept="image/*"
            multiple
            onChange={e => {
              const pictureFiles = e.target.files;
              handleSendPictures(pictureFiles);
            }}
          />
          Enviar Imagens
        </label>
        <div className="pictures">
          {pictures ? (
            pictures.map((picture: any) => (
              <img
                src={picture?.image}
                alt=""
                onClick={() => setMainPicture(picture?.image)}
              />
            ))
          ) : (
            <img src={NoImageThumb} alt="" />
          )}
        </div>
      </div>
    </Container>
  );
};

export default CarPictures;
