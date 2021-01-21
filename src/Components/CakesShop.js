import React from 'react';
import { connect } from 'react-redux'
import { buyCake, addCake } from '../Redux'

const CakesShop = (props) => {
    return (
        <div>
            <h3>Shuvo Cake Shop - {props.numOfCakes} </h3>
            <button onClick = {props.buyCake} className='btn btn-success'>Buy Cake</button>
            <button onClick={props.addCake}>Add Cake</button>
        </div>
    );
};

const mapStoreToProps = state =>{
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake: () => dispatch(buyCake()),
        addCake: () => dispatch(addCake())
    }
}

export default connect(mapStoreToProps, mapDispatchToProps) (CakesShop);