import React from 'react';
import './InfoSection.css';

export default function InfoSection({ title, children }) {
  return (
      <section className="info-section">
        <h3>{title}</h3>
        <label>Данные<input type="text"/></label>
        <label>Данные<input type="text"/></label>
        <label>Данные<input type="text"/></label>
        <label>Данные<input type="text"/></label>
        <label>Данные<input type="text"/></label>
        <label>Данные<input type="text"/></label>
      </section>
  );
}
