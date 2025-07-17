import React from 'react';

const items = [
  {
    icon: 'fa-shield-alt',
    title: 'Segurança Jurídica',
    desc: 'Garantia total via contratos e auditoria jurídica.'
  },
  {
    icon: 'fa-clock',
    title: 'Agilidade',
    desc: 'Análise e liberação em menos de 48 horas úteis.'
  },
  {
    icon: 'fa-chart-line',
    title: 'Taxas Competitivas',
    desc: 'Ofertas personalizadas com as melhores condições.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="section">
      <h2>Benefícios</h2>
      <div className="cards">
        {items.map((i, idx) => (
          <div key={idx} className="card">
            <i className={`fas ${i.icon} fa-2x`} />
            <h3>{i.title}</h3>
            <p>{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
