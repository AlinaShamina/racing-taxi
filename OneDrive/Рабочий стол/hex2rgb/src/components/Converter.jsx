import { useState } from 'react';

export default function Converter() {
  const [hex, setHex] = useState('');
  const [rgb, setRgb] = useState('');
  const [bgColor, setBgColor] = useState('#ffffff');

  const hexToRgb = (value) => {
    const r = parseInt(value.slice(1, 3), 16);
    const g = parseInt(value.slice(3, 5), 16);
    const b = parseInt(value.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setHex(value);

    if (value.length === 7) {
      const isValid = /^#[0-9A-Fa-f]{6}$/.test(value);

      if (isValid) {
        const rgbValue = hexToRgb(value);
        setRgb(rgbValue);
        setBgColor(value);
      } else {
        setRgb('Ошибка!');
        setBgColor('#ff0000');
      }
    }
  };

  return (
    <div className="converter" style={{ backgroundColor: bgColor }}>
      <input
        type="text"
        maxLength="7"
        value={hex}
        onChange={handleChange}
        placeholder="#FFFFFF"
      />
      <div className="result">{rgb}</div>
    </div>
  );
}
