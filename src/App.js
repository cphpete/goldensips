import React, { useState } from "react";
import "./index.css";

const cocktails = [
  {
    name: "Espresso Martini",
    style: "Bold & Velvety",
    description: "A decadent cocktail combining the boldness of espresso with the smooth sweetness of coffee liqueur and vodka. Perfect for those who enjoy rich, layered flavors.",
    origin: "Invented in 1983 by bartender Dick Bradsell at the Soho Brasserie in London.",
    ingredients: ["4 cl Vodka", "3 cl Kahlua", "5 cl Freshly brewed espresso", "0.5 cl Licor 43", "0.5 cl Tequila Coffee Liqueur"],
    instructions: "Shake all ingredients with ice. Strain into a martini glass and garnish with 3 coffee beans."
  },
  {
    name: "Spicy Margarita",
    style: "Zesty & Spicy",
    description: "A bright and bold cocktail that blends the tartness of lime with the warmth of jalapeño heat and a savory Tajin rim. Refreshing and invigorating.",
    origin: "Inspired by the original Margarita, invented in the late 1930s in Mexico.",
    ingredients: ["6 cl Mezcal", "1 cl Curaçao", "1 cl Lime Juice", "0.75 cl Agave Nectar", "2-3 slices Jalapeño", "Tajin seasoning (for rim)"],
    instructions: "Muddle jalapeño, shake with ice, strain into a Tajin-rimmed glass."
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
        <div className="header-line"></div>
      </header>

      <div className="cocktail-grid">
        {cocktails.map((cocktail, index) => (
          <div key={index} className={`cocktail ${flipped[index] ? "flipped" : ""}`} onClick={() => handleFlip(index)}>
            <div className="cocktail-inner">
              <div className="cocktail-front">
                <h3>{cocktail.name}</h3>
                <p><em>{cocktail.style}</em></p>
                <p>{cocktail.description}</p>
                <p><em>{cocktail.origin}</em></p>
              </div>
              <div className="cocktail-back">
                <h3>Recipe</h3>
                <ul>
                  {cocktail.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
                <p>{cocktail.instructions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
