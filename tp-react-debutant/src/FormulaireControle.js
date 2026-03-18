import { useState } from 'react';

const FormulaireControle = () => {
  const [nomUser, setNomUser] = useState('');
  const [emailUser, setEmailUser] = useState('');

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    alert(`Saisie -> Nom : ${nomUser} | Courriel : ${emailUser}`);
  };

  const inputDesign = { padding: '12px', borderRadius: '6px', border: '1px solid #ced4da', marginRight: '12px', width: '210px', outline: 'none' };
  const btnDesign = { padding: '12px 18px', borderRadius: '6px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: '600' };

  return (
    <section style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', marginBottom: '25px' }}>
      <h2 style={{ color: '#495057', marginTop: 0, marginBottom: '15px' }}>Saisie Contrôlée</h2>
      <form onSubmit={soumettreFormulaire} style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        <input type="text" value={nomUser} onChange={(e) => setNomUser(e.target.value)} placeholder="Votre nom" style={inputDesign} />
        <input type="email" value={emailUser} onChange={(e) => setEmailUser(e.target.value)} placeholder="Votre courriel" style={inputDesign} />
        <button type="submit" style={btnDesign}>Valider</button>
      </form>
    </section>
  );
};

export default FormulaireControle;