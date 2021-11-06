import React from 'react';
import EquipeSocial from './EquipeSocial';

import './equipe.css';
import { EquipeDataType } from './Equipe';
import classNames from 'classnames';
import SkeletonImage from '~/components/models/Skeleton/SkeletonImage';
import SkeletonText from '~/components/models/Skeleton/SkeletonText';

export enum CardDirection {
  LEFT = 'left',
  MIDDLE = 'middle',
  RIGHT = 'right',
}

type EquipeCardProps = {
  data?: EquipeDataType;
  direction: CardDirection;
  onClick?: () => void;
};

const SocialMedias = ['linkedin', 'instagram', 'github', 'whatsapp'];

const EquipeCard: React.FC<EquipeCardProps> = ({ data, direction, onClick }) => {
  return (
    <div className={classNames(['card', `card-${direction}`])} onClick={onClick}>
      <div className='card-content'>
        <SkeletonImage className='card-img' src={data?.image} />
        <div className='card-container'>
          <SkeletonText as='h3' className='card-title'>
            {formatName(data?.name)}
          </SkeletonText>
          <ul className={'card-contacts'}
            aria-current={direction !== 'middle' ? 'page' : false}>
            {SocialMedias.map((value, index) => (
              <EquipeSocial key={index} name={value} data={data?.social[index]} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

function formatName(userName: string | undefined) {
  if (userName == null) {
    return userName;
  }
  let split = userName.split(' ');
  return `${split[0]} ${split[1]}`;
}

export default EquipeCard;
