/* eslint-disable no-plusplus */
/* eslint-disable import/newline-after-import */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';
import { useAuth } from '../../../hooks/auth';

import api from '../../../services/api';
import logo from '../../../assets/images/logo.svg';

// eslint-disable-next-line import/no-useless-path-segments
import TopBar from '../../../components/TopBar/';
import HighlightsPictures from './components/HighlightPictures';
import carExample from '../../../assets/images/car-example.jpg';
interface RouterParams {
  id: string;
}

const ShowAnnouncement: React.FC = () => {
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

  const sendImagesResquestd = async (formData: any) => {
    try {
      const response = await api.patch(
        `/ads/${announcement.id}/car/${announcement.car.id}/car-image`,
        formData,
        {
          headers: { 'content-type': 'multipart/form-data' },
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
      formData.append('car.carImages', pictures[i], pictures[i].name);
    }

    const pictureResponse = await sendImagesResquestd(formData);

    if (pictureResponse === 200) location.reload();
  }

  return (
    <Container>
      <TopBar />
      <HighlightsPictures
        main={announcement?.car?.carImages[0]?.image || carExample}
        gallery={[carExample]}
      />

      <input
        id="upload"
        placeholder="upload-image"
        type="file"
        accept="image/*"
        multiple
        onChange={e => {
          const pictureFiles = e.target.files;
          handleSendPictures(pictureFiles);
        }}
      />

      <h1>Descrição</h1>
      <input placeholder={announcement?.description} />
    </Container>
  );
};

export default ShowAnnouncement;
