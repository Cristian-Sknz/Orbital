
import React from 'react';

type OrbitalSectionProps = {
  id: string;
  title: string;
  showTitle?: boolean;
  children: JSX.Element | JSX.Element[];
};

const OrbitalSection: React.FC<OrbitalSectionProps> = (props) => {
  return (
    <section id={props.id} className={props.id}>
      <div className={`container ${props.id}-container`}>
        {props.showTitle && <h2 className='section-title'>{props.title}</h2>}
        {props.children}
      </div>
    </section>
  );
};

export default OrbitalSection;