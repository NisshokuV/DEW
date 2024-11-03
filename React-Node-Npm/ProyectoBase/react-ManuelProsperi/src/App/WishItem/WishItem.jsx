import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WishItem = ({text, done, id, onDoneChange}) => 
(
    <li
        className={classNames('wish-list__item', 
            {
                'wish-list__item--done' : done,
            }
        )}
    >
        <input
        id={id} 
        checked={done} 
        onChange={e => onDoneChange(e.target.checked)} 
        type="checkbox" readOnly/>
        <label htmlFor={id}>{text}</label>
    </li>
)

WishItem.propTypes =
{
    text: PropTypes.string,
    done: PropTypes.bool,
    id: PropTypes.string,
    onDoneChange: PropTypes.func,
};

WishItem.defaultProps =
{
    text: '',
    done: false,
    id: '',
    onDoneChange: () => {},
};

export default WishItem;