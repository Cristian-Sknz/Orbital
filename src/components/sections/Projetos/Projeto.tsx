import * as React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

type ProjectPropos = {
  title: string,
  author: string,
  src: string,
  link: string
}

const Projeto: React.FC<ProjectPropos> = ({ title, author, src, link }) => {
  return (
    <li className='project'>
      <img src={src} alt={title} className='project-img' />

      <div className='overlay'>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='icon'
          children={<Icon icon={['fas', 'external-link-alt']} />}
        ></a>
        <div className='overlay-content'>
          <h2>{author}</h2>
          <p>{title}</p>
        </div>
      </div>
    </li>
  );
};

export default Projeto;
