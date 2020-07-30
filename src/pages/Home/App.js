import React from 'react';
import Menu from '../../components/Menu'
import styled from 'styled-components';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';

const AppWrapper = styled.div`
  background: var(--grayDark);
  
  padding-top: 94px;

  @media(max-width: 800px){
    padding-top: 40px;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Menu/>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O centro de cabeleleiro, beauty center da cabeleleila Leila"}   
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
      
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Footer />
      
    </AppWrapper>
  );
}

export default App;
