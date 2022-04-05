import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.API_BASE_URL}`,
  timeout: 10000
})

export default instance;
export {getCategories} from './category';
export {getProducts} from './product';
export {sendOrder} from './order';