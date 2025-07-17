import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contato</h2>
      <form action="https://formspree.io/f/SEU_ENDERECO" method="POST">
        <div className="form-group">
          <label>Nome</label>
          <input type="text" name="nome" required />
        </div>
        <div className="form-group">
          <label>E‑mail</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Empresa</label>
          <input type="text" name="empresa" required />
        </div>
        <div className="form-group">
          <label>Mensagem</label>
          <textarea name="mensagem" rows="4" required />
        </div>
        <button type="submit" className="btn">Enviar</button>
      </form>
    </section>
  );
}
