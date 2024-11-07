import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
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
