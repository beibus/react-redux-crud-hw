import axios from 'axios';
export const BASE_API_URL = 'http://178.62.221.120/api';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const HIDE_MODAL = 'HIDE_MODAL';


export const hideModal = () => ({
  type: HIDE_MODAL
})

export const getProducts = () => ({
  type: FETCH_PRODUCTS
})

export const setProducts = (data) => ({
  type: RECEIVE_PRODUCTS,
  payload: data
})

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(getProducts());
    try {
      const response = await axios.get(`${BASE_API_URL}/products`);
      dispatch(setProducts(response.data))
    } catch (error) {
      console.error(error);
    }
  }
}

export const createProduct = (payload) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_API_URL}/products/create`, payload);
      console.log('response', response)
      if (response.status === 201) {
        dispatch(fetchProducts())
      }
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  }
}