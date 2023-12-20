import React, { useState } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/Index';

import styles from './Cadastro.module.css';

export function Cadastro() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleNomeCompletoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNomeCompleto(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleConfirmarEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmarEmail(e.target.value);
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Lógica de cadastro aqui

    console.log('Nome Completo:', nomeCompleto);
    console.log('Email:', email);
    console.log('Confirmar Email:', confirmarEmail);
    console.log('Senha:', senha);
  };

  return (
    <>
      <Header />

      <div className={styles.cadastroContainer}>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nome Completo:
            <input type="text" placeholder='Informe seu nome completo' value={nomeCompleto} onChange={handleNomeCompletoChange} />
          </label>
          <label>
            Email:
            <input type="email" placeholder='Informe seu email' value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Confirmar Email:
            <input type="email" placeholder='Confirme seu email' value={confirmarEmail} onChange={handleConfirmarEmailChange} />
          </label>
          <label>
            Senha:
            <input type="password" placeholder='Digite uma senha' value={senha} onChange={handleSenhaChange} />
          </label>
          <button type="submit">Cadastrar</button>
        </form>
        <p className={styles.facalogin}>
          Já tem uma conta? <a href="/login">Faça login</a> 
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Cadastro;