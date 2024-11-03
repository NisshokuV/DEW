import React, {useState} from 'react';
import PropTypes from 'prop-types';

const WishInput = ({onNewWish}) => {
    const[newWishText, setNewWishText] = useState('');
    return(
        <fieldset className="wish-input">
            <legend className="wish-input__label">Nuevo Deseo</legend>
            <input 
                className="wish-input__field" 
                placeholder='Escribe tu deseo aquí...' 
                value={newWishText}
                type="text"
                onChange={e => setNewWishText(e.target.value)}
                onKeyUp={(e) => {
                    if(e.key === 'Enter' && newWishText.length)
                    {
                        onNewWish({text: newWishText, done: false});
                        setNewWishText('');
                    }
                }
                }
            />
        </fieldset>
    );
};

WishInput.propTypes =
{
    onNewWish: PropTypes.func,
};
WishInput.defaultProps =
{
    onNewWish: () => {},
};
export default WishInput;