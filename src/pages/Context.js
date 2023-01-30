import React, { useContext, useState } from "react";
import ThemeContext from "../context/theme.context";

// Composant en fin de chaine
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
function ThemeChoice() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (event) => {
    const value = event.currentTarget.value;
    setTheme(value);
  };

  return (
    <select name="theme" defaultValue={theme} onChange={handleChange}>
      <option value="dark">Sombre</option>
      <option value="light">Clair</option>
    </select>
  );
}

// Composant en deuxième ligne
// Il reçoit dans ses props le thème et la fonction qui permet de le changer
// Notons qu'en vrai il en a rien à foutre il s'en sert pas lui même
// C'est uniquement pour pouvoir le passer au composant ThemeChoice ...
function ToolBar(props) {
  return (
    <div>
      <button>Zoomer</button>
      <button>Dezoomer</button>
      <ThemeChoice />
    </div>
  );
}

export default function Context(){

  const [theme, setTheme] = useState("light");

  const contextValue = {
    theme,
    setTheme
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      <div className={theme}>
        <ToolBar />
        <p>Theme utilisé : {theme}</p>
      </div>
    </ThemeContext.Provider>
  );
}

