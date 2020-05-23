import React, { useState } from 'react';
import Axios from 'axios';
import Recipes from './Recipes'
import Alert from './Alert'

const App = () => {

  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState('');

  const APP_ID = `ae09bd91`;
  const APP_KEY = `297140889822d0a211227695218e71d8`;
  const API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const getData = async () => {
    if (query) {
      const result = await Axios.get(API);
      if (!result.data.more) {
        setAlert('No food with such name...');
        setRecipes([]);
        setQuery('')
      } else {
        setRecipes(result.data.hits);
        setQuery('');
        setAlert('');
      }
    } else {
      setAlert('Fill the form...')
      setRecipes([])
    }
  }

  const onSubmit = e => {
    e.preventDefault();
    getData();
  }

  const clearRecipes = () => {
    setRecipes([]);
    setQuery('');
    setAlert('');
  }

  return (
    <div className="App">
      <header>
        <h1>Food Recipe App</h1>
        <form className="search-form" onSubmit={onSubmit}>
          {alert && <Alert alert={alert} />}
          <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search food..." />
          <button>GET</button>
          <button onClick={clearRecipes}>CLEAR</button>
        </form>
      </header>
      {recipes && <Recipes recipes={recipes} />}

    </div>
  );
}

export default App;
