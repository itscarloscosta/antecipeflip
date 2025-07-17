import React from 'react';

export default function WhatsAppButton() {
  const number = '5511999999999'; // seu número sem espaços
  const message = encodeURIComponent('Olá, quero saber mais sobre Antecipe Flip.');
  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <i className="fab fa-whatsapp fa-3x" style={{ color: '#25D366' }} />
    </a>
  );
}
