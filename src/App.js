import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecipes = async () => {
    if (!ingredient.trim()) return;

    setLoading(true);
    setError("");
    setRecipes([]);

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();

      if (!data.meals) {
        setError("No recipes found for that ingredient.");
      } else {
        setRecipes(data.meals);
      }
    } catch (err) {
      setError("Error fetching data. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div className="app-container">
      {/* Floating Emoji Background */}
      <div className="emoji-bg">
        <span>🍕</span>
        <span>🍔</span>
        <span>🍩</span>
        <span>🍎</span>
        <span>🍣</span>
        <span>🍪</span>
        <span>🥗</span>
        <span>🍟</span>
      </div>

      <div className="card">
        <h1 className="title">🍽 Recipe Ideas</h1>

        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Enter an ingredient (e.g. chicken, tomato)..."
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {loading && <p className="message">Loading recipes...</p>}
        {error && <p className="message error">{error}</p>}

        <div className="grid">
          {recipes.map((meal) => (
            <div key={meal.idMeal} className="meal-card">
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h2>{meal.strMeal}</h2>
            </div>
          ))}
        </div>

        <footer>Built with ❤️ by Dharani | Powered by TheMealDB</footer>
      </div>
    </div>
  );
}
