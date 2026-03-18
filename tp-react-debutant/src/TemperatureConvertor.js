import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

const TemperatureConvertor = () => {
  const [valeurTemp, setValeurTemp] = useState('');

  return (
    <section style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', marginBottom: '25px' }}>
      <h2 style={{ color: '#495057', marginTop: 0, marginBottom: '15px' }}>Remontée d'État (Lifting State Up)</h2>
      <div style={{ border: '2px dashed #007bff', borderRadius: '6px', padding: '20px', display: 'inline-block' }}>
        <TemperatureInput temp={valeurTemp} changeTemp={setValeurTemp} />
      </div>
      <p style={{ color: valeurTemp ? '#28a745' : '#6c757d', fontWeight: '600', marginTop: '20px' }}>
        {valeurTemp ? `Résultat : ${valeurTemp} °C` : 'En attente de saisie...'}
      </p>
    </section>
  );
};

export default TemperatureConvertor;