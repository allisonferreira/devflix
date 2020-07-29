import styled from 'styled-components';


export const LogoImage = styled.img` 
    max-width: 168px;

    @media(max-width: 800px){
        max-width: 115px;
    }
`;

export const MenuWrapper = styled.nav`
    width: 100%;
    height: 94px;

    position: fixed;
    top: 0;
    left: 0;
    padding-left: 5%;
    padding-right: 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--black);
    border-bottom: 2px solid var(--primary);

    @media( max-width: 800px){
        height: 40px;
        justify-content: center;
        align-items: center;
    }
    
`;
