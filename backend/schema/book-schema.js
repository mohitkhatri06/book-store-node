import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userSchema = mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   author: {
      type: String,
      required: true,
   },
   summary: String,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'books');

const books = mongoose.model('books', userSchema);

export default books;
