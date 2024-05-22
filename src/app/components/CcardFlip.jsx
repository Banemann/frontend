import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styles from './CcardFlip.module.css';

const CcardFlip = ({ formData, handleChange }) => {
  const handleInputFocus = (e) => {
    const { name } = e.target;
    handleChange({ target: { name: 'focus', value: name } });
  };

  return (
    <div id="CcardFlip">
      <Cards
        cvc={formData.cvc}
        expiry={formData.expiry}
        focused={formData.focus}
        name={formData.name}
        number={formData.number}
      />
      <div className={styles.inputBox}>
        <input
          type="text"
          name="name"
          placeholder="Navn"
          value={formData.name}
          onChange={handleChange}
          onFocus={handleInputFocus}
        /> 
        <input
          type="tel"
          name="number"
          placeholder="Kortnummer"
          value={formData.number}
          onChange={handleChange}
          onFocus={handleInputFocus}
        />
       
       <div className={styles.nextTo}>
        <input
          type="text"
          name="expiry"
          placeholder="Udløbsdato"
          value={formData.expiry}
          onChange={handleChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="Kontrolcifre"
          value={formData.cvc}
          onChange={handleChange}
          onFocus={handleInputFocus}
        />
        </div>
      </div>
    </div>
  );
};

export default CcardFlip;
