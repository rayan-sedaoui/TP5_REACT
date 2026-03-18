import { useState } from 'react';

const FormulaireControle = () => {
  const [saisieNom, setSaisieNom] = useState('');
  const [saisieMail, setSaisieMail] = useState('');

  const declencherEnvoi = (evt) => {
    evt.preventDefault();
    alert(`Nom : ${saisieNom}, Email : ${saisieMail}`);
  };

  const styleInput = {
    padding: '10px',
    borderRadius: '5px',
    border: '2px solid #bdc3c7',
    marginRight: '10px',
    width: '200px',
    outline: 'none'
  };

  const styleBouton = {
    padding: '10px 15px',
    borderRadius: '5px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
      marginBottom: '20px'
    }}>
      <h2 style={{ color: '#2c3e50', marginTop: 0, marginBottom: '20px' }}>Formulaire Contrôlé</h2>
      <form onSubmit={declencherEnvoi} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <input
          type="text"
          value={saisieNom}
          onChange={(evt) => setSaisieNom(evt.target.value)}
          placeholder="Nom"
          style={styleInput}
        />
        <input
          type="email"
          value={saisieMail}
          onChange={(evt) => setSaisieMail(evt.target.value)}
          placeholder="Email"
          style={styleInput}
        />
        <button type="submit" style={styleBouton}>Envoyer</button>
      </form>
    </div>
  );
};

export default FormulaireControle;