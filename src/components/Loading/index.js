import React from 'react';
import loading from '../../assets/images/loading.svg';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <img src={loading} alt="Loading" />
    </Container>
  );
}
