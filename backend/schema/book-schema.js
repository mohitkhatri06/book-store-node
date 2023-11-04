import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
      },
      author: {
         type: String,
         required: true,
      },
      summary: String,
   },
   { timestamps: true }
);

const books = mongoose.model('books', bookSchema);

export default books;
