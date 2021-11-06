import * as React from 'react';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const Activity = ({ ...props }) => {
  return (
    <div className='activity'>
      <div className='activity-container'>
        <h3 className='activity-title'>{props.title}</h3>
        <Icon className='activity-icon' icon={props.icon}></Icon>
      </div>
    </div>
  );
};

export default Activity;
