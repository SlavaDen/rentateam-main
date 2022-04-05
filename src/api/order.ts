import instance from 'api/';

const sendOrder = async () =>{ 
  const response = await instance.get(`/mock/order`);

  return response;
}

export {sendOrder};