import React, {useState} from 'react';
import './App.css';
import WishInput from './WishInput';
import WishList from './WishList';

const initialWishes =
[
    {text: 'Viajar a china', done : false},
    {text: 'Comprar un coche', done : true},
    {text: 'Pagar el seguro del coche', done : false}
];

const App = () => {
    const [wishes, setWishes] = useState(initialWishes);
    return(
        <div className="App">
            <h1>Mi lista de deseos</h1>
            <WishInput onNewWish={wish => setWishes([wish,...wishes])}/>
            <WishList wishes={wishes} onWishesChange={setWishes}/>
            <button 
            className="wish-clear" 
            type='button' 
            onClick={() => setWishes(wishes.filter(wish => !wish.done))}>
                
                Archivar deseos completados</button>
        </div>
    );
};


export default App;
