import * as React from 'react';
import OrbitalSection from '../OrbitalSection';
import './servicos.css';

import Activity from './Activity';
import { useReveal } from '~/lib/hooks';

const Servicos = () => {
  const ref = useReveal<HTMLDivElement>('bottom');
  const activities = [
    { name: 'Desenvolvimento Web', icon: ['fas', 'code'] },
    { name: 'Design Web', icon: ['fas', 'pencil-ruler'] },
    { name: 'Marketing Digital', icon: ['fas', 'poll'] },
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
