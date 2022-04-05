import instance from 'api/';

const getCategories = async () =>{ 
  const response = await instance.get(`/mock/categories`);

  return response;
}

export {getCategories};