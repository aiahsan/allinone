import { api } from './baseUrl';
 
const sendEmail = async (data) => {
  return await api.post('/users/mail', data);
};
 
export const repository = {
  sendEmail
};
