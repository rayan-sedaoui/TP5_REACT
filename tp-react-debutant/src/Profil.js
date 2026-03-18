import { useContext } from 'react';
import { ContexteGlobal } from './UtilisateurContext';

const Profil = () => {
  const { infosClient, setInfosClient } = useContext(ContexteGlobal);

  const actionDeconnexion = () => {
    setInfosClient({ pseudo: '', estEnLigne: false });
  };

  const actionConnexion = () => {
    setInfosClient({ pseudo: 'rayan', estEnLigne: true }); // <-- CHANGÉ ICI
  };

  const styleBoutonConnexion = {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  const styleBoutonDeconnexion = {
    ...styleBoutonConnexion,
    backgroundColor: '#e74c3c'
  };

  if (infosClient.estEnLigne) {
    return (
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        marginBottom: '20px',
        borderLeft: '5px solid #27ae60'
      }}>
        <h2 style={{ color: '#2c3e50', marginTop: 0, marginBottom: '20px' }}>Profil Utilisateur</h2>
        <p style={{ color: '#27ae60', fontSize: '18px', fontWeight: 'bold' }}>👤 Bienvenue, {infosClient.pseudo}</p>
        <button onClick={actionDeconnexion} style={styleBoutonDeconnexion}>Se déconnecter</button>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
      marginBottom: '20px',
      borderLeft: '5px solid #e74c3c'
    }}>
      <h2 style={{ color: '#2c3e50', marginTop: 0, marginBottom: '20px' }}>Profil Utilisateur</h2>
      <p style={{ color: '#e74c3c', fontSize: '18px', fontStyle: 'italic' }}>⚠️ Veuillez vous connecter.</p>
      <button onClick={actionConnexion} style={styleBoutonConnexion}>Se connecter</button>
    </div>
  );
};

export default Profil;