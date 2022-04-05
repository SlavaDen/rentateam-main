import instance from 'api/';

const getProducts = async () =>{ 
  const response = await instance.get(`/mock/products`);

  return response;
}

export {getProducts};