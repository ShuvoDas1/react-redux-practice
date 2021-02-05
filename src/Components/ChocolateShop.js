import React, { useState } from 'react';
import {connect} from 'react-redux'
import {buyChocolate, addChocolate} from '../Redux'

const ChocolateShop = (props) => {
    const [number, setNumber] = useState(1)
    const [addNumber, setAddNumber] = useState(1)
    
    
    return (
        <div>
            <h1>Chocolate Shop</h1>
            <h3>num of chocolate: {props.numOfChocolate}</h3>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={ () =>props.buyChocolate(number)}>Buy {number} Chocolate</button>
            <br/><br/>
            <input type="number" value={addNumber} onChange = { e => setAddNumber(parseInt(e.target.value))} />
            <button onClick={() => props.addChocolate(addNumber)}>Add {addNumber} Chocolate</button>
        </div>
    );
};

const mapStoreToProps = state =>{
    return {
        numOfChocolate: state.chocolate.numOfChocolate
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyChocolate: number => dispatch(buyChocolate(number)),
        addChocolate: addNumber => dispatch(addChocolate(addNumber))
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(ChocolateShop);