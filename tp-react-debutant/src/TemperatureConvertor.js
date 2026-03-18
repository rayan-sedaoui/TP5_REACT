import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

const TemperatureConvertor = () => {
  const [degresC, setDegresC] = useState('');

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
      marginBottom: '20px'
    }}>
      <h2 style={{ color: '#2c3e50', marginTop: 0, marginBottom: '20px' }}>Lifting State Up</h2>
      <div style={{
        border: '2px solid #3498db',
        borderRadius: '8px',
        padding: '15px',
        display: 'inline-block'
      }}>
        <TemperatureInput
          valeurActuelle={degresC}
          modifierTemperature={setDegresC}
        />
      </div>
      <p style={{
        color: degresC ? '#27ae60' : '#7f8c8d',
        fontWeight: 'bold',
        marginTop: '15px'
      }}>
        {degresC ? `🌡️ Température saisie : ${degresC} °C` : '❄️ Aucune température saisie'}
      </p>
    </div>
  );
};

export default TemperatureConvertor;