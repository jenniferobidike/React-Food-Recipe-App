import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import { v4 as uuidv4 } from "uuid";

  
const App = () => {
  const APP_ID = "7b03d467";
  const APP_KEY = "97861c537243009076d018b07a6a991d";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('salad');

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    //console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <h1>Food Searching App</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button">
          Search Food
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
          key={uuidv4()}
          label={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
  
        ))}
      </div>
    </div>

  );
};



 
export default App;