const TemperatureInput = ({ temp, changeTemp }) => {
  return (
    <input
      type="number"
      value={temp}
      onChange={(e) => changeTemp(e.target.value)}
      placeholder="Indiquez les °C"
      style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ced4da', width: '210px', outline: 'none', fontSize: '15px' }}
    />
  );
};

export default TemperatureInput;