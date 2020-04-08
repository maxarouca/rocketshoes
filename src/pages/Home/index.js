import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import { ProductList } from './styles';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import Loading from '../../components/Loading';

export default function Home() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMembers() {
      const response = await api.get('orgs/react-brasil/members');

      setMembers(response.data);
      setLoading(false);
    }
    loadMembers();
  }, []);

  function handleAddProduct(member) {
    dispatch(CartActions.addToCartRequest(member));
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <ProductList>
      {members.map(member => (
        <li key={String(member.id)}>
          <img src={member.avatar_url} alt={member.login} />
          <strong>{member.login}</strong>

          <button type="button" onClick={() => handleAddProduct(member.login)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
              {amount[member.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
