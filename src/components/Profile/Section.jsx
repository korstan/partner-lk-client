import React from 'react';
import './Info.css';

export default function ProfileSection({ title, children }) {
  return (
      <section className="info-section">
        <h3>{title}</h3>
        <div className="info-section_data-group">
          {children}
        </div>
      </section>
  );
}
