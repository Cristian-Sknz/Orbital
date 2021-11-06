import * as React from 'react';
import './galeria.css';
import OrbitalSection from '../OrbitalSection';

const Galeria = () => {
  return (
    <OrbitalSection id='galeria' title={'Galeria'} showTitle={true}>
      <div className='embed'>
        <iframe
          title='Vídeo de apresentação do squad'
          src='https://www.youtube.com/embed/8gti3OXU_sY'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </OrbitalSection>
  );
};

export default Galeria;
