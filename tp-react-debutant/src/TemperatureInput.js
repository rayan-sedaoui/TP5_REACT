const TemperatureInput = ({ valeurActuelle, modifierTemperature }) => {
  return (
    <input
      type="number"
      value={valeurActuelle}
      onChange={(evt) => modifierTemperature(evt.target.value)}
      placeholder="Température °C"
      style={{
        padding: '10px',
        borderRadius: '5px',
        border: '2px solid #bdc3c7',
        width: '200px',
        outline: 'none',
        fontSize: '16px'
      }}
    />
  );
};

export default TemperatureInput;