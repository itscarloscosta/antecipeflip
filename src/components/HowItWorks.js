import React from 'react';

const steps = [
  { num: '1', title: 'Cadastro', text: 'Preencha nossos dados básicos.' },
  { num: '2', title: 'Análise', text: 'Nossa equipe avalia seu perfil.' },
  { num: '3', title: 'Liberação', text: 'Receba o valor na conta indicada.' }
];

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <h2>Como Funciona</h2>
      <div className="cards">
        {steps.map(s => (
          <div key={s.num} className="card">
            <div style={{fontSize:'2rem', fontWeight:'700', color:'var(--primary)'}}>{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
