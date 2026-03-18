import { useContext } from 'react';
import { SessionContext } from './SessionContext';

const Profil = () => {
  const { session, setSession } = useContext(SessionContext);

  const fermerSession = () => {
    setSession({ nomUtilisateur: '', connecte: false });
  };

  const ouvrirSession = () => {
    setSession({ nomUtilisateur: 'rayan', connecte: true });
  };

  const btnStyleIn = { padding: '12px 24px', borderRadius: '6px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: '600' };
  const btnStyleOut = { ...btnStyleIn, backgroundColor: '#dc3545' };

  if (session.connecte) {
    return (
      <section style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', borderLeft: '6px solid #28a745' }}>
        <h2 style={{ color: '#495057', marginTop: 0, marginBottom: '15px' }}>Espace Utilisateur</h2>
        <p style={{ color: '#28a745', fontSize: '19px', fontWeight: 'bold' }}>Bonjour, {session.nomUtilisateur}</p>
        <button onClick={fermerSession} style={btnStyleOut}>Se déconnecter</button>
      </section>
    );
  }

  return (
    <section style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', borderLeft: '6px solid #dc3545' }}>
      <h2 style={{ color: '#495057', marginTop: 0, marginBottom: '15px' }}>Espace Utilisateur</h2>
      <p style={{ color: '#dc3545', fontSize: '19px', fontStyle: 'italic' }}>Vous êtes déconnecté.</p>
      <button onClick={ouvrirSession} style={btnStyleIn}>Se connecter</button>
    </section>
  );
};

export default Profil;