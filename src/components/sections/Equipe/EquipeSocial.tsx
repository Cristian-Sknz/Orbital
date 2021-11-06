import { IconName } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import React from 'react';
import SkeletonText from '~/components/models/Skeleton/SkeletonText';

type EquipeSocialProps = {
  name: string;
  data?: {
    type: string;
    name: string;
    url: string;
  };
};

const EquipeSocial: React.FC<EquipeSocialProps> = (props) => {
  return (
    <li className={`social ${props.name}`}>
      <a href={props.data?.url} target='_blank' rel='noreferrer'>
        <Icon icon={['fab', props.name as IconName]} />
        <SkeletonText className='text' as={'span'}>
          {formatNumber(props.data ? props.data?.name : '')}
        </SkeletonText>
      </a>
    </li>
  );
};

function formatNumber(number: string) {
  var match = number.substring(2).match('^(\\d{2})(\\d{5})(\\d{4})$');
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return number;
}

export default EquipeSocial;
