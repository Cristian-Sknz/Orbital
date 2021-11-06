import classNames from 'classnames';
import React from 'react';
import './skeleton.css';

type SkeletonImageProps = {
  className?: string;
  src?: string;
};

const SkeletonImage: React.FC<SkeletonImageProps> = (props) => {
  const isUndefined = props.src === undefined || props.src.length === 0;
  let image = (isUndefined) ? '' : props.src;

  const className = classNames(
    {skeleton: isUndefined },
    [props.className]
    );

  return (
    <div
      className={className}
      style={{
        background: `url(${image}) center center / cover`,
      }}
    />
  );
};

export default SkeletonImage;
