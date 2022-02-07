import HTTP from './http';

export function loginApi(params) {
  return HTTP.post('/api/login', params);
}
