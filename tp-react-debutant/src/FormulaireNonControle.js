import { useRef } from 'react';

const FormulaireNonControle = () => {
  const champNom = useRef();
  const champEmail = useRef();

  const gererValidation = (evt) => {
    evt.preventDefault();
    const valNom = champNom.current.value;
    const valEmail = champEmail.current.value;
    alert(`Nom : ${valNom}, Email : ${valEmail}`);
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
      <h2 style={{ color: '#2c3e50', marginTop: 0, marginBottom: '20px' }}>Formulaire Non-Contrôlé</h2>
      <form onSubmit={gererValidation} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <input type="text" ref={champNom} placeholder="Nom" style={styleInput} />
        <input type="email" ref={champEmail} placeholder="Email" style={styleInput} />
        <button type="submit" style={styleBouton}>Envoyer</button>
      </form>
    </div>
  );
};

export default FormulaireNonControle;