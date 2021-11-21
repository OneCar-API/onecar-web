import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import { Container} from './style';


import uploadimg from '../../assets/images/uploadimg.svg'

interface DropzoneProps {
  onFileUploaded: (file: File) => void;
}

const DropzoneImg: React.FC<DropzoneProps> = ({ onFileUploaded }) => {
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
        <>
          <img src={uploadimg} alt='upload' />    
           
        </>
        )}
      </div>
      
    </Container>
  );
};

export default DropzoneImg;