
import React, { useState } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/Index';

import styles from './Login.module.css';

export function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [lembrarDados, setLembrarDados] = useState(false);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  const handleLembrarDadosChange = () => {
    setLembrarDados(!lembrarDados);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Lógica de autenticação aqui

    console.log('Login:', login);
    console.log('Senha:', senha);
    console.log('Lembrar Dados:', lembrarDados);
  };

  return (
    <>
      <Header />

      <div className={styles.loginContainer}>
        <h1>Faça seu Login</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="text" value={login} onChange={handleLoginChange} />
          </label>
          <label>
            
            Senha:
            <input type="password" value={senha} onChange={handleSenhaChange} /> 
            <label className={styles.lembrarsenha} >Lembrar senha?<input className={styles.checkbox} type="checkbox" checked={lembrarDados} onChange={handleLembrarDadosChange} /></label>
            
            
            
          </label>

          
        
          <button type="submit">Entrar</button>
        </form>
        <p className={styles.recuperarsenha}>
          Esqueceu sua senha? <a href="#">Recuperar Senha</a>
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Login;