import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/formatPrice';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* getMoreInfoToMember({ login }) {
  const { data } = yield call(api.get, `/users/${login}`);

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora de estoque');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));

    history.push('/cart');
  }
}

// qual action ouvir e qual método disparar
export default all([takeLatest('@cart/ADD_REQUEST', getMoreInfoToMember)]);
