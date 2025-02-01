import React, { useState } from "react";
import "./index.css"; // Sørg for at have denne

const cocktailsData = [
  {
    name: "Espresso Martini",
    style: "Bold & Velvety",
    description:
      "A decadent cocktail combining the boldness of espresso with the smooth sweetness of coffee liqueur and vodka. Perfect for those who enjoy rich, layered flavors.",
    origin:
      "Invented in 1983 by bartender Dick Bradsell at the Soho Brasserie in London.",
    ingredients: ["4 cl Vodka", "3 cl Kahlua", "5 cl Fresh Espresso", "0.5 cl Licor 43"],
    instructions: "Shake all ingredients with ice and strain into a martini glass.",
  },
  {
    name: "Spicy Margarita",
    style: "Zesty & Spicy",
    description:
      "A bright and bold cocktail that blends the tartness of lime with the warmth of jalapeño heat and a savory Tajin rim. Refreshing and invigorating.",
    origin: "Inspired by the original Margarita, invented in the late 1930s in Mexico.",
    ingredients: ["6 cl Tequila", "1 cl Curaçao", "1 cl Lime Juice", "2-3 Jalapeño slices", "Tajin seasoning"],
    instructions: "Muddle jalapeño, shake with ice, strain into a Tajin-rimmed glass.",
  },
  {
    name: "Hey Mambo",
    style: "Tropical & Bittersweet",
    description:
      "A delightful riff on the Piña Colada, combining the tropical sweetness of pineapple and coconut with a bittersweet touch from Aperol.",
    origin: "Crafted by Mark Hibbard at Via Vecchia in Portland, Maine.",
    ingredients: ["1.5 cl Mezcal", "1.5 cl Blanco Tequila", "3 cl Aperol", "4.5 cl Pineapple Juice", "1.5 cl Lime Juice", "4.5 cl Cream of Coconut"],
    instructions: "Blend with ice, pour into a tiki glass, garnish with pineapple.",
  }
];

const App = () => {
  const [flipped, setFlipped] = useState(Array(cocktailsData.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipState = [...prev];
      newFlipState[index] = !newFlipState[index];
      return newFlipState;
    });
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
        {cocktailsData.map((cocktail, index) => (
          <div
            key={index}
            className={`cocktail ${flipped[index] ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
          >
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
