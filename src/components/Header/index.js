import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, LogoContainer, Cart } from './styles';
import logo from '../../assets/images/cargo_logo.png';

export default function Header() {
  const cartItens = useSelector(state => state.cart);
  return (
    <Container>
      <LogoContainer to="/">
        <img src={logo} alt="Rocket Shoes" />
        <h1>Store</h1>
      </LogoContainer>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartItens.length} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
