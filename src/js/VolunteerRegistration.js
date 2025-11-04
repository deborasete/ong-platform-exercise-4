import React, { useState } from 'react';
import '../css/VolunteerRegistration.css';
import digitalFormImg from '../assets/images/digital-form.jpg';

function VolunteerRegistration() {
  const [formData, setFormData] = useState({
    fullName: '',
    cpf: '',
    birthDate: '',
    email: '',
    phone: '',
    zipCode: '',
    address: '',
    city: '',
    state: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const formatCPF = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatPhone = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4,5})(\d{4})/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const formatCEP = (value) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cpf') {
      formattedValue = formatCPF(value);
    } else if (name === 'phone') {
      formattedValue = formatPhone(value);
    } else if (name === 'zipCode') {
      formattedValue = formatCEP(value);
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: formattedValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setShowSuccess(true);
    
    e.target.reset();
    
    setFormData({
      fullName: '',
      cpf: '',
      birthDate: '',
      email: '',
      phone: '',
      zipCode: '',
      address: '',
      city: '',
      state: ''
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleReset = (e) => {
    e.preventDefault();
    document.getElementById('volunteer-form').reset();
    setFormData({
      fullName: '',
      cpf: '',
      birthDate: '',
      email: '',
      phone: '',
      zipCode: '',
      address: '',
      city: '',
      state: ''
    });
  };


  return (
    <div className="volunteer-registration">
      {showSuccess && (
        <div className="success-notification">
          <div className="success-content">
            <div className="success-icon">✓</div>
            <h3>Cadastro Realizado com Sucesso!</h3>
            <p>Obrigado por se cadastrar como voluntário. Entraremos em contato em breve!</p>
            <button 
              className="success-close" 
              onClick={() => setShowSuccess(false)}
              aria-label="Fechar notificação"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      
      <main className="container">
        <section id="registration-form" aria-labelledby="form-title">
          <h2 id="form-title">Formulário de Inscrição para Voluntariado</h2>
          <img 
            src={digitalFormImg} 
            alt="Pessoa preenchendo um formulário digital em um notebook, representando o processo de inscrição para voluntariado."
            width="600" 
            height="400"
          />

          <form id="volunteer-form" action="#" method="POST" aria-describedby="form-description" onSubmit={handleSubmit}>
            <p id="form-description">
              Preencha o formulário abaixo com suas informações pessoais, de contato e endereço
              para participar das ações voluntárias da ONG Mãos Unidas.
            </p>

            <fieldset>
              <legend>Dados Pessoais</legend>
              
              <div>
                <label htmlFor="full-name">Nome Completo:</label>
                <input 
                  type="text" 
                  id="full-name" 
                  name="fullName" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required 
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="cpf">CPF:</label>
                <input 
                  type="text" 
                  id="cpf" 
                  name="cpf" 
                  value={formData.cpf}
                  onChange={handleChange}
                  pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" 
                  title="Formato: 000.000.000-00" 
                  placeholder="000.000.000-00" 
                  maxLength="14"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="birth-date">Data de Nascimento:</label>
                <input 
                  type="date" 
                  id="birth-date" 
                  name="birthDate" 
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                  placeholder=" "
                />
              </div>
            </fieldset>

            <fieldset>
              <legend>Informações de Contato</legend>
              
              <div>
                <label htmlFor="email">E-mail:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="phone">Telefone:</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}" 
                  title="Formato: (99) 99999-9999 ou (99) 9999-9999"
                  placeholder="(99) 99999-9999" 
                  maxLength="15"
                  required
                />
              </div>
            </fieldset>

            <fieldset>
              <legend>Endereço Residencial</legend>
              
              <div>
                <label htmlFor="zip-code">CEP:</label>
                <input 
                  type="text" 
                  id="zip-code" 
                  name="zipCode" 
                  value={formData.zipCode}
                  onChange={handleChange}
                  pattern="\d{5}-\d{3}" 
                  title="Formato: 00000-000" 
                  placeholder="00000-000" 
                  maxLength="9"
                  required
                />
              </div>

              <div>
                <label htmlFor="address">Logradouro (Rua/Avenida):</label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  value={formData.address}
                  onChange={handleChange}
                  required 
                  placeholder="Nome da Rua/Avenida e Número"
                />
              </div>
              
              <div>
                <label htmlFor="city">Cidade:</label>
                <input 
                  type="text" 
                  id="city" 
                  name="city" 
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder=" "
                />
              </div>

              <div>
                <label htmlFor="state">Estado:</label>
                <select 
                  id="state" 
                  name="state" 
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione um Estado</option>
                  <option value="SP">São Paulo</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="MG">Minas Gerais</option>
                </select>
              </div>
            </fieldset>
            
            <div className="form-buttons">
              <button type="submit" className="button button-primary">Enviar Cadastro</button>
              <button type="button" className="button button-secondary" onClick={handleReset}>Limpar</button>
            </div>
          </form>
        </section>
      </main>

      <footer role="contentinfo">
        <div className="container">
          <div>
            <h3>Fale Conosco!</h3>
            <p><strong>Endereço:</strong> Rua da Cidadania, 123 - Bairro Esperança - Cidade: São Paulo/SP</p>
          </div>
          <div className="contact-info">
            <p><strong>Telefone:</strong> <a href="tel:+5511999999999">(11) 99999-9999</a></p>
            <p><strong>Email:</strong> <a href="mailto:contato@ongmaosunidas.org.br">contato@ongmaosunidas.org.br</a></p>
          </div>
          <p className="copyright">&copy; 2025 ONG Mãos Unidas. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default VolunteerRegistration;

