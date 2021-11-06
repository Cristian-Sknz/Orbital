import classNames from 'classnames';
import React from 'react';
import "./skeleton.css";


type SkeletonTextProp = {
    as: string;
    className: string;
    children: string | undefined;
}

const SkeletonText : React.FC<SkeletonTextProp> = (props) => {
    let text = props.children;
    let isUndefined = text === undefined || text.length === 0;
    if (isUndefined) {
        text = '';
    }

    const className = classNames({
        'skeleton': isUndefined,
        'skeleton-text': isUndefined,
    }, [props.className]);


    return React.createElement(props.as, ({className: className}), text);
}

export default SkeletonText;