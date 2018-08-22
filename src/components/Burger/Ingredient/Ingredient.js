import React, {Component} from 'react';
import PropTypes from 'prop-types'

import ingredientStyling from './Ingredient.css'

class Ingredient extends Component {
    render() {
        let ingredient = null;

        switch(this.props.type) {
            case('bacon'):
                ingredient = <div className={ingredientStyling.Bacon}></div>;
                break;
            case('bread-bottom'):
                ingredient = <div className={ingredientStyling.BreadBottom}></div>;
                break;
            case('bread-top'):
                ingredient = (
                    <div className={ingredientStyling.BreadTop}>
                        <div className={ingredientStyling.Seeds1}></div>
                        <div className={ingredientStyling.Seeds2}></div>
                    </div>
                );
                break;
            case('cheese'):
                ingredient = <div className={ingredientStyling.Cheese}></div>;
                break;
            case('meat'):
                ingredient = <div className={ingredientStyling.Meat}></div>;
                break;
            case('salad'):
                ingredient = <div className={ingredientStyling.Salad}></div>;
                break;
            default:
            ingredient = null;

        }

        return ingredient;
    }
};


Ingredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default Ingredient;