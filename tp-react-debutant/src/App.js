import { useState } from 'react';
import { ContexteGlobal } from './UtilisateurContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';

const App = () => {
  const [infosClient, setInfosClient] = useState({
    pseudo: 'rayan', // <-- CHANGÉ ICI
    estEnLigne: true
  });

  return (
    <ContexteGlobal.Provider value={{ infosClient, setInfosClient }}>
      <div style={{
        padding: '30px',
        fontFamily: 'Segoe UI, Roboto, sans-serif',
        backgroundColor: '#f4f7f6',
        minHeight: '100vh',
        maxWidth: '700px',
        margin: '30px auto',
        borderRadius: '15px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.05)'
      }}>
        <h1 style={{
          color: '#2c3e50',
          textAlign: 'center',
          marginBottom: '40px',
          borderBottom: '3px solid #3498db',
          display: 'inline-block',
          paddingBottom: '10px',
          width: '100%'
        }}>
          🚀 TP 5 : Gestion de l'État & Context
        </h1>

        <FormulaireControle />
        <FormulaireNonControle />
        <TemperatureConvertor />
        <Profil />
      </div>
    </ContexteGlobal.Provider>
  );
};

export default App;