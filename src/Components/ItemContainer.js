import React from 'react';
import { connect } from 'react-redux'
import { addChocolate, addIcecream, buyChocolate, buyIcecream } from '../Redux';
const ItemContainer = (props) => {
    return (
        <div>
            <h2>Item- {props.item} </h2>
            <button className='btn' onClick={props.buyItem}>Buy</button>
            <button className='btn' onClick={props.addItem}>Add</button>
        </div>
    );
};

const mapStoreToProps = (state, ownProps) =>{
    const itemState = ownProps.iceCream 
    ? state.iceCream.numOfIceCream
    : state.chocolate.numOfChocolate

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const dispatchFunction = ownProps.iceCream
    ? () => dispatch(buyIcecream())
    : () => dispatch(buyChocolate())

    const dispatchFuntion1 = ownProps.iceCream
    ? () => dispatch(addIcecream())
    : () => dispatch(addChocolate()) 

    return{
        buyItem: dispatchFunction,
        addItem: dispatchFuntion1
    }
}



export default connect(
    mapStoreToProps,
    mapDispatchToProps
    )( ItemContainer );