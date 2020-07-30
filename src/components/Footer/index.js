import React from 'react';
import { FooterBase, LogoFooter } from './styles';
import Logo from '../../assets/img/memeflix.png';


function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <LogoFooter src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
