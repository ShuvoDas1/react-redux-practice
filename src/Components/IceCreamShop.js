import React from 'react';
import {connect} from 'react-redux'
import {buyIcecream, addIcecream} from '../Redux'

const IceCreamShop = (props) => {
    return (
        <div>
            <h1>Total IceCream - {props.numOfIceCream} </h1>
            <button onClick={props.buyIcecream}>Buy IceCream</button>
            <button onClick={props.addIcecream}>Add IceCream</button>
        </div>
    );
};

const mapStoreToProps = state =>{
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyIcecream: () => dispatch(buyIcecream()),
        addIcecream: () => dispatch(addIcecream())
    }
}

export default connect(mapStoreToProps, mapDispatchToProps) (IceCreamShop);