import React, { useState } from "react";
import "./index.css";

const cocktails = [
  {
    name: "Espresso Martini",
    style: "Bold & Velvety",
    description: "A decadent cocktail combining the boldness of espresso with the smooth sweetness of coffee liqueur and vodka.",
    origin: "Invented in 1983 by bartender Dick Bradsell in London.",
    ingredients: "Vodka, espresso, coffee liqueur, simple syrup."
  },
  {
    name: "Spicy Margarita",
    style: "Zesty & Spicy",
    description: "A bright and bold cocktail that blends the tartness of lime with the warmth of jalapeño heat and a savory Tajin rim.",
    origin: "Inspired by the original Margarita, with a modern spicy twist.",
    ingredients: "Tequila, fresh lime juice, orange liqueur, jalapeño slices, Tajin seasoning."
  }
];

const App = () => {
  const [flipped, setFlipped] = useState({});

  const handleFlip = (index) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="container">
      <header>
        <h1>Goldensips</h1>
        <h2>Signature Libations</h2>
        <h3>An Exclusive Selection for the Discerning Drinker</h3>
      </header>

      <div className="cocktails">
        {cocktails.map((cocktail, index) => (
          <div key={index} className={`cocktail ${flipped[index] ? "flipped" : ""}`} onClick={() => handleFlip(index)}>
            <div className="cocktail-front">
              <div className="cocktail-name">
                <span>{cocktail.name}</span>
                <span className="cocktail-style">{cocktail.style}</span>
              </div>
              <div className="description">{cocktail.description}</div>
              <div className="origin">{cocktail.origin}</div>
            </div>
            <div className="cocktail-back">
              <h3>Ingredients</h3>
              <p>{cocktail.ingredients}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
