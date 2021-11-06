import * as React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projeto = ({ ...props }) => {
  return (
    <li className='project'>
      <img src={props.src} alt={props.title} className='project-img' />

      <div className='overlay'>
        <a
          href={props.link}
          target='_blank'
          rel='noreferrer'
          className='icon'
          children={<Icon icon={faExternalLinkAlt} />}
        ></a>
        <div className='overlay-content'>
          <h2>{props.author}</h2>
          <p>{props.title}</p>
        </div>
      </div>
    </li>
  );
};

export default Projeto;
