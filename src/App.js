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
  },
  {
    name: "Hey Mambo",
    style: "Tropical & Bittersweet",
    description: "A tropical blend of pineapple, coconut, tequila, and Aperol.",
    origin: "Crafted by Mark Hibbard at Via Vecchia in Portland, Maine.",
    ingredients: ["1.5 cl Mezcal", "1.5 cl Blanco Tequila", "3 cl Aperol", "4.5 cl Pineapple Juice", "1.5 cl Lime Juice", "4.5 cl Cream of Coconut"],
    instructions: "Blend with ice, pour into a tiki glass, garnish with pineapple."
  },
  {
    name: "Amaretto Sour",
    style: "Nutty & Tart",
    description: "A smooth amaretto cocktail with bourbon and lemon.",
    origin: "Popularized in the 1970s, the modern version with bourbon has become a beloved variation worldwide.",
    ingredients: ["4.5 cl Amaretto", "1.5 cl Bourbon", "2.5 cl Lemon Juice", "1 cl Simple Syrup", "1.5 cl Egg White"],
    instructions: "Dry shake, add ice, shake again, strain into a rocks glass, garnish with cherries."
  },
  {
    name: "Whiskey Sour / Rum Sour",
    style: "Rich & Balanced",
    description: "A smooth whiskey or rum cocktail with citrus and bitters.",
    origin: "With roots in the 1860s, this cocktail has stood the test of time, offering endless variations.",
    ingredients: ["6 cl Bourbon or Dark Rum", "2.25 cl Rich Simple Syrup", "2.25 cl Lemon Juice", "2 cl Egg White", "2-3 dashes Angostura Bitters"],
    instructions: "Dry shake, add ice, shake again, strain into a rocks glass, garnish with bitters."
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

      <div className="cocktail-grid">
        {cocktails.map((cocktail, index) => (
          <div key={index} className={`cocktail ${flipped[index] ? "flipped" : ""}`} onClick={() => handleFlip(index)}>
            <div className="cocktail-inner">
              <div className="cocktail-front">
                <h3>{cocktail.name}</h3>
                <p><em>{cocktail.style}</em></p>
                <p>{cocktail.description}</p>
                <small><em>{cocktail.origin}</em></small>
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
