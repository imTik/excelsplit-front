import HTTP from './http';

export function loginApi(params) {
  return HTTP.post('/login', params);
}
