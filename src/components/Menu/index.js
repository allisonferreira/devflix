import React from 'react';
import Logo from '../../assets/img/nowmusic1.png'
import {LogoImage, MenuWrapper} from './style';
import Button from '../Button';

function Menu(){
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="DEVFLIX LOGO"/>
            </a>

            <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </MenuWrapper>
    );
}

export default Menu;