import express from 'express';
import {
   addBook,
   getBooks,
   getBook,
   editBook,
   deleteBook,
} from '../controller/book-controller.js';

const router = express.Router();

router.post('/add', addBook);
router.get('/all', getBooks);
router.get('/:id', getBook);
router.put('/:id', editBook);
router.delete('/:id', deleteBook);

export default router;
