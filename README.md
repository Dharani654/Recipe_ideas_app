# 🍽 Recipe Ideas — React + CSS (Animated Background)

A fun and visually engaging recipe search application that helps users find meal ideas based on ingredients using **TheMealDB API**.
This version features an **animated cool gradient background** with **floating food emojis** 🍕🍔🍩🍣🥗 for a lively, modern look.

---

## 🔗 Live Demo

👉 **[View Live Project](https://6zs7gp.csb.app/)**
*(Click the link above to view the app directly in execution mode.)*

or open it in editor mode:
👉 **[Open in CodeSandbox](https://codesandbox.io/p/sandbox/recipe-ideas-app-6zs7gp)**

---

## 🚀 Features

* 🍳 Search for recipes by entering any ingredient
* 🥗 Displays meal images and names in a responsive grid layout
* 💨 Fetches real-time data from **TheMealDB API**
* 🌈 Includes a smooth animated gradient background
* 🍕 Floating food emojis add a fun, dynamic feel
* 💻 Responsive and mobile-friendly design
* 💎 Built with **React functional components** and modern CSS (Glassmorphism style)

---

## 🛠️ Tech Stack

* **Frontend:** React (Create React App)
* **Styling:** Custom CSS with animations
* **API:** TheMealDB (Public Recipe Database)
* **Hosting/Development:** CodeSandbox / GitHub

---

## ⚙️ API Endpoint Used

**TheMealDB API** — Filter meals by main ingredient

```
https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}
```

Example:

```
https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken
```

---

## 📦 Installation & Setup

If you want to run the project locally:

```bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# Move into the project folder
cd <your-repo-name>

# Install dependencies
npm install

# Start the development server
npm start
```

Then open your browser at **[http://localhost:3000](http://localhost:3000)**

---

## 🧭 How It Works

1. User enters an ingredient (e.g., “chicken”).
2. The app calls TheMealDB API to fetch all meals using that ingredient.
3. Results are displayed in beautifully animated recipe cards with hover effects.
4. Floating food emojis animate across the background for an interactive feel.

---

## 🧑‍💻 Author

**Dharani**
Built with ❤️ using React and CSS animations.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
