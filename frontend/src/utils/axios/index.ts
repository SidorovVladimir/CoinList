import axios from 'axios';

const token = sessionStorage.getItem('token');
export const instance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
  },
});

export const instanceNews = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data/v2',
  timeout: 1000,
});

export const instanceAuth = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    Authorization: `Bearer ${token}`,
  },
});

// api.interceptors.request.use(
// 	(config) => {
// 		const userId = JSON.parse(localStorage.getItem('userId'));
// 		if (config.headers && userId) {
// 			config.headers.Authorization = `Bearer ${userId.token}`;
// 		}
// 		return config;
// 	},
// 	(error) => Promise.reject(error)
// );

// export default api;
export const coinGeckoApi = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  timeout: 1000,
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': 'CG-XCGSjf19wD7cZQyZMoyCYHCu',
    'X-Custom-Header': 'foobar',
  },
});
