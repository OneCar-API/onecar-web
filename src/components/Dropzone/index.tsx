import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import { Container } from './styles';

interface DropzoneProps {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];

      const fileUrl = URL.createObjectURL(file);

      setSelectedFileUrl(fileUrl);

      onFileUploaded(file);
    },
    [onFileUploaded],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <Container>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {selectedFileUrl ? (
          <p>{selectedFileUrl}</p>
        ) : (
          <h1>
            <FiUpload />
            Arraste ou clique aqui!
          </h1>
        )}
      </div>
    </Container>
  );
};

export default Dropzone;
