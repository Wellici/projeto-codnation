import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

/*
<RecipeItem 
                  titulo={this.recipes[0].title}
                  ingredientes={this.recipes[0].ingredients}
                  src={this.recipes[0].thumbnail}
                  link={this.recipes[0].href}
                  />
            {this._renderizaRecipeItem()}
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
*/

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    };
  }

  render() { 
    return (
      <div className="App">
        <Navbar />
        <div className="container mt-10">
          <div className="row">
          
          {this.recipes.map(item => (
            
             <RecipeItem titulo={item.title}
                  ingredientes={item.ingredients}
                  src={item.thumbnail}
                  link={item.href}
          />
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
