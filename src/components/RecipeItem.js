import React from 'react';
//import Recipes from '../sample_data/recipes.json';
//import { Module } from 'module';

//<h5 className="card-title">TITLE HERE</h5>
/*
    src="https://via.placeholder.com/350x300"
                <p className="card-text">
                    <strong>Ingredients: </strong>INGREDIENTS HERE
                </p>
*/

const RecipeItem = (props) => (
    <div className="col-sm-3 mt-4">
        <div className="card">
            <a href={props.link}>
                <img className="card-img-top img-fluid" src={props.src} alt="" />
            </a>
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">
                    <strong>Ingredients: </strong>{props.ingredientes}
                </p>
            </div>
        </div>
    </div>
)

export default RecipeItem;