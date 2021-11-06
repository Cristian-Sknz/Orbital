import * as React from 'react';
import OrbitalSection from '../OrbitalSection';
import { useReveal } from '~/lib/hooks';
import './inicio.css';

const Inicio = () => {
  const left = useReveal<HTMLDivElement>('left', { width: 968, origin: 'bottom' });
  const right = useReveal<HTMLDivElement>('right', { width: 968, origin: 'top' });
  const top = useReveal<HTMLAnchorElement>('top', { width: 968, origin: 'bottom' });

  return (
    <OrbitalSection id={'inicio'} title='title'>
      <div className='inicio-content'>
        <div className='home-img' ref={right}>
          <img src='./images/home.svg' alt='Estudante Orbital' />
        </div>
        {/* home-img */}

        <div className='home-texts' ref={left}>
          <div className='home-title'>
            <img alt='logo' />
          </div>

          <div className='home-subtitle'>Inovando e mudando órbitas</div>
        </div>
        {/* home-texts */}

        <a href='#contato' className='home-btn' ref={top}>
          Mude sua órbita!
        </a>
      </div>
      {/* inicio-content */}
    </OrbitalSection>
  );
};

export default Inicio;
