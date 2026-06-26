import api from './axiosInstance';

export async function signup(username, email, password) {
  const res = await api.post('/auth/signup', { username, email, password });
  return res.data;
}

export async function login(email, password) {
  const res = await api.post('/auth/login', { email, password });
  return res.data;
}
