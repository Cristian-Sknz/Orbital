import React, { useCallback, useEffect, useState } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import EquipeCard, { CardDirection } from './EquipeCard';
import OrbitalSection from '../OrbitalSection';
import EquipeData from '~/assets/data/Equipe.json';
import './equipe.css';

export type EquipeDataType = typeof EquipeData[0];

type EquipeState = {
  iterator?: GalleryCarrousel;
  data: EquipeDataType[];
  order: number[];
};

const Equipe: React.FC = () => {
  const [carrousel, setCarrousel] = useState<EquipeState>({
    iterator: undefined,
    data: [],
    order: [0, 0, 0],
  });

  useEffect(() => {
    const iterator = new GalleryCarrousel(EquipeData.length);
    setCarrousel({
      iterator: iterator,
      data: EquipeData,
      order: iterator.getOrders(),
    });
  }, []);

  const handleClick = useCallback(
    (next: boolean) => {
      if (carrousel.iterator != null) {
        const action = next ? carrousel.iterator.next() : carrousel.iterator.prev();
        setCarrousel({ ...carrousel, order: action });
      }
    },
    [carrousel]
  );

  return (
    <OrbitalSection id='equipe' title='Equipe' showTitle>
      <div className='slider'>
        <EquipeCard
          direction={CardDirection.LEFT}
          data={carrousel.data[carrousel.order[0]]}
          onClick={() => handleClick(false)}
        />
        <EquipeCard
          direction={CardDirection.MIDDLE}
          data={carrousel.data[carrousel.order[1]]}
        />
        <EquipeCard
          direction={CardDirection.RIGHT}
          data={carrousel.data[carrousel.order[2]]}
          onClick={() => handleClick(true)}
        />
      </div>
      <div className='buttons'>
        <div className='slider-button nav-left' onClick={() => handleClick(false)}>
          <Icon icon={faArrowLeft} />
        </div>
        <div className='slider-button nav-right' onClick={() => handleClick(true)}>
          <Icon icon={faArrowRight} />
        </div>
      </div>
    </OrbitalSection>
  );
};

type isFirst = {
  value: number;
  isFirst: boolean;
};

class GalleryCarrousel {
  private orders: number[];
  private maxValue: number;

  constructor(length: number) {
    this.orders = [0, 0, 0];
    this.maxValue = length;

    let reference: isFirst = { value: length - 1, isFirst: true };
    this.orders = this.orders.map(() => {
      if (reference.isFirst) {
        reference.isFirst = false;
        return length - 1;
      }
      if (reference.value === this.maxValue - 1) {
        return (reference.value = 0);
      }
      return (reference.value += 1);
    });
  }

  public getOrders() {
    return this.orders;
  }

  public get(index: number) {
    return this.orders[index];
  }

  public next() {
    this.orders[0] = this.orders[1];
    this.orders[1] = this.orders[2];
    this.orders[2] = this.orders[2] === this.maxValue - 1 ? 0 : this.orders[2] + 1;
    return this.orders;
  }

  public prev() {
    this.orders[2] = this.orders[1];
    this.orders[1] = this.orders[0];
    this.orders[0] = this.orders[0] === 0 ? this.maxValue - 1 : this.orders[0] - 1;
    return this.orders;
  }
}

export default Equipe;
