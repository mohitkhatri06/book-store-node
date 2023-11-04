import { response } from 'express';
import Book from '../schema/book-schema.js';

export const addBook = async (request, response) => {
   const book = request.body;
   const newBook = new Book(book);

   try {
      await newBook.save();
      response.status(201).json(newBook);
   } catch (error) {
      response.status(409).json({ message: error.message });
   }
};

export const getBooks = async (request, response) => {
   try {
      const book = await Book.find({});
      response.status(200).json(book);
   } catch (error) {
      response.status(404).json({ message: error.message });
   }
};

export const getBook = async (request, response) => {
   try {
      const book = await Book.findById(request.params.id);
      response.status(200).json(book);
   } catch (error) {
      response.status(404).json({ message: error.message });
   }
};

export const editBook = async (request, response) => {
   let book = request.body;
   const editBook = new Book(book);

   try {
      await Book.updateOne({ _id: request.params.id }, editBook);
      response.status(200).json(editBook);
   } catch (error) {
      response.status(404).json({ message: error.message });
   }
};

export const deleteBook = async (request, response) => {
   try {
      await Book.deleteOne({ _id: request.params.id });
      response.status(200).json({ message: 'Book deleted successfully' });
   } catch (error) {
      response.status(404).json({ message: error.message });
   }
};
