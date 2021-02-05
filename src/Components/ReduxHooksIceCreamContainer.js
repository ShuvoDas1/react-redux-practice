import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {buyIcecream, addIcecream} from '../Redux'

const ReduxHooksIceCreamContainer = () => {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch =  useDispatch();
    return (
        <div>
            <h2>Number Of IceCream - {numOfIceCream}</h2>
            <button onClick={() => dispatch(buyIcecream())}>Buy IceCream</button>
            <button onClick={()=> dispatch(addIcecream())}>Add IceCream</button>
        </div>
    );
};

export default ReduxHooksIceCreamContainer;