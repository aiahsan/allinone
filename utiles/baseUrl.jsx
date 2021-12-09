import { create } from 'apisauce';
export const api = create({
  baseURL: 'https://allinonecity.herokuapp.com/api/v1/',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
});
