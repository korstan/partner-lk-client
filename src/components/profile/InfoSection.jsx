import React from 'react';
import './InfoSection.css';

export default function InfoSection({ title, children }) {
  return (
      <section className="info-section">
        <h3>{title}</h3>
        <div className="info-section_data-group">
          {children}
        </div>
      </section>
  );
}
