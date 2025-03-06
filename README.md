# 🏎️ F1 Platform - E-commerce & Streaming 🏁

## 📌 Description
Bienvenue sur **F1 Platform**, une expérience immersive dédiée aux passionnés de Formule 1 ! 🚀

Cette plateforme propose :
- 🛍️ Un marché de produits dérivés exclusifs
- 🎟️ Une billetterie pour les événements de F1
- 📺 Un service de streaming
- 🏆 Des classements et informations en temps réel sur les pilotes et les équipes

Plongez dans l’univers palpitant de la F1 ! 🔥

---

## 👥 Équipe & Responsabilités

| 🏅 Membre    | 🏗️ Responsabilités |
|-------------|----------------|
| **Ghazi Saoudi**  | 🎟️ Tickets market page, 🛍️ Marketplace page |
| **Basem Hasni**  | 📺 Streaming page, 🏆 Driver standing page, 🎉 Event page |
| **Iheb Zeddini**  | 🛒 Marketplace checkout page, 🏎️ F1 Teams page |
| **Israa Boulaares**  | 🏠 Home page, 🌍 Circuits page, 📆 Calendrier page |
| **Zied Tabib**  | 🏁 Driver details page, 🎫 Ticket checkout page |

---

## 🚀 Installation & Exécution du Projet

Ce projet utilise **Tailwind CSS** pour un design moderne et responsive.

### 🔧 1️⃣ Installation de Tailwind CSS
Si Tailwind n'est pas encore installé, exécutez :
```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Ajoutez la configuration suivante dans `tailwind.config.js` :
```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Ajoutez Tailwind dans `src/index.css` :
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 🖥️ 2️⃣ Lancer Tailwind en mode watch
```sh
npx tailwindcss -i ./src/input.css -o ./public/output.css --watch
```

---

## 📄 Licence
📜 Ce projet est sous licence **MIT**.

💡 **Bon développement et vive la F1 !** 🏎️🔥
