import React from 'react';
import {withRouter} from 'react-router-dom';

import classes from './Burger.css';
import Burgerin from "./Burgerin/Burgerin";

function burger(props) {
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <Burgerin key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> You could add something here! </p>;
    }
    return (
        <div className={classes.Burger}>
            <Burgerin type="bread-top" />
            {transformedIngredients}
            <Burgerin type="bread-bottom" />
        </div>
    );
}

export default withRouter(burger);