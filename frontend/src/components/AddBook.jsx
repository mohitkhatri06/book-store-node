import {
   FormControl,
   FormGroup,
   InputLabel,
   Input,
   Typography,
   styled,
   Button,
   TextareaAutosize,
} from '@mui/material';
import { useState } from 'react';
import { addBook } from '../service/api';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Container = styled(FormGroup)`
   width: 50%;
   margin: 5% auto 0 auto;
   & > div {
      margin-top: 20px;
   }
`;

const defaultBook = {
   title: '',
   author: '',
   summary: '',
};

const AddBook = () => {
   const [book, setBook] = useState(defaultBook);

   const navigate = useNavigate();

   const onValueChange = (e) => {
      setBook({ ...book, [e.target.name]: e.target.value });
   };

   const addBookDetails = async () => {
      if (book?.title && book?.author) {
         await addBook(book);
         swal({
            title: 'Added!',
            text: 'Your book added successfully',
            icon: 'success',
            button: 'Okay',
         });
         navigate('/all');
      } else {
         swal({
            title: 'Required',
            text: 'Title and author name are required!',
            timer: 2000,
         });
      }
   };

   return (
      <Container>
         <Typography variant='h4'>Add Book</Typography>
         <FormControl>
            <InputLabel>Title</InputLabel>
            <Input
               required='true'
               onChange={(e) => onValueChange(e)}
               name='title'
            />
         </FormControl>
         <FormControl>
            <InputLabel>Author</InputLabel>
            <Input
               required='true'
               onChange={(e) => onValueChange(e)}
               name='author'
            />
         </FormControl>
         <FormControl>
            <TextareaAutosize
               onChange={(e) => onValueChange(e)}
               placeholder='Book summary'
               minRows={8}
               name='summary'
            />
         </FormControl>
         <FormControl>
            <Button variant='contained' onClick={() => addBookDetails()}>
               Add Book
            </Button>
         </FormControl>
      </Container>
   );
};

export default AddBook;
