import axios from 'axios';

const URL = 'http://localhost:8000';

export const addBook = async (data) => {
   try {
      console.log(data);
      return await axios.post(`${URL}/add`, data);
   } catch (error) {
      console.log('error while calling the add book api', error);
   }
};

export const getBooks = async () => {
   try {
      return await axios.get(`${URL}/all`);
   } catch (error) {
      console.log('Error while calling the getBooks', error);
   }
};

export const getBook = async (id) => {
   try {
      return await axios.get(`${URL}/${id}`);
   } catch (error) {
      console.log('Error while calling getBook api ', error);
   }
};

export const editBook = async (book, id) => {
   try {
      return await axios.put(`${URL}/${id}`, book);
   } catch (error) {
      console.log('Error while calling editBook api', error);
   }
};

export const deleteBook = async (id) => {
   try {
      return await axios.delete(`${URL}/${id}`);
   } catch (error) {
      console.log('Error while calling deleteBook api', error);
   }
};
