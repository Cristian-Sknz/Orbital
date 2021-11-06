import * as React from 'react';
import OrbitalSection from '../OrbitalSection';
import './servicos.css';

import Activity from './Activity';
import { faCode, faPencilRuler, faPoll } from '@fortawesome/free-solid-svg-icons';
import { useReveal } from '~/lib/hooks';

const Servicos = () => {
  const ref = useReveal<HTMLDivElement>('bottom');
  const activities = [
    { name: 'Desenvolvimento Web', icon: faCode },
    { name: 'Design Web', icon: faPencilRuler },
    { name: 'Marketing Digital', icon: faPoll },
  ];

  return (
    <OrbitalSection id={'servicos'} title={'Serviços'} showTitle={true}>
      <div className='activities' ref={ref}>
        {activities.map((activity, index) => (
          <Activity icon={activity.icon} key={index} title={activity.name} />
        ))}
      </div>
    </OrbitalSection>
  );
};

export default Servicos;
