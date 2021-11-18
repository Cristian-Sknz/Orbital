import * as React from 'react';
import './projetos.css';
import Projeto from './Projeto';
import OrbitalSection from '../OrbitalSection';

import Projetcs from '~/assets/data/projetos.json';
import useReveal from '~/lib/hooks/useReveal';

const Projetos = () => {
  const project = useReveal<HTMLUListElement>('top');

  return (
    <OrbitalSection id={'projetos'} title={'Projetos'} showTitle={true}>
      <ul className='project-row' ref={project}>
        {Projetcs.map((project, index) => {
          return (
            <Projeto
              title={project.title}
              author={project.author}
              src={project.image}
              link={project.link}
              key={index}
            />
          );
        })}
      </ul>
    </OrbitalSection>
  );
};

export default Projetos;
