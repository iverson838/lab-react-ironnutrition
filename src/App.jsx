import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './component/FoodBox';
import AddFood from './component/AddFood';

function App() {
  return (
    <div>
      <div>
        <AddFood />
      </div>

      <div className="App">
        {foods.map((food) => {
          return (
            <FoodBox
              name={food.name}
              image={food.image}
              calories={food.calories}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
