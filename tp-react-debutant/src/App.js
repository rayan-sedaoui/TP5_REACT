import { useState } from 'react';
import { SessionContext } from './SessionContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';

const App = () => {
  const [session, setSession] = useState({
    nomUtilisateur: 'rayan',
    connecte: true
  });

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      <main style={{ padding: '25px', fontFamily: 'Arial, sans-serif', backgroundColor: '#e9ecef', minHeight: '100vh', maxWidth: '750px', margin: '20px auto', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#343a40', textAlign: 'center', marginBottom: '35px', borderBottom: '4px solid #007bff', display: 'block', paddingBottom: '15px' }}>
          TP 5 : État et Contexte React
        </h1>

        <FormulaireControle />
        <FormulaireNonControle />
        <TemperatureConvertor />
        <Profil />
      </main>
    </SessionContext.Provider>
  );
};

export default App;