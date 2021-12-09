import { api } from './baseUrl';
 
const sendEmail = async (data) => {
  return await api.post('/users/mail', data);
};
const contact = async (data) => {
  return await api.post('/users/contact', data);
};
 
export const repository = {
  sendEmail,
  contact
};
