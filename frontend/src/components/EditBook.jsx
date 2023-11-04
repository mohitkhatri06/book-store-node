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
import { useState, useEffect } from 'react';
import { editBook, getBook } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';
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

const EditBook = () => {
   const [book, setBook] = useState(defaultBook);

   const navigate = useNavigate();
   const { id } = useParams();

   useEffect(() => {
      loadBookDetails();
   }, []);

   const loadBookDetails = async () => {
      const response = await getBook(id);
      setBook(response.data);
   };

   const onValueChange = (e) => {
      setBook({ ...book, [e.target.name]: e.target.value });
   };

   const editBookDetails = async () => {
      if (book?.title && book?.author) {
         await editBook(book, id);
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
         <Typography variant='h4'>Edit Book</Typography>
         <FormControl>
            <InputLabel>Title</InputLabel>
            <Input
               onChange={(e) => onValueChange(e)}
               name='title'
               value={book.title}
            />
         </FormControl>
         <FormControl>
            <InputLabel>Author</InputLabel>
            <Input
               onChange={(e) => onValueChange(e)}
               name='author'
               value={book.author}
            />
         </FormControl>
         <FormControl>
            <TextareaAutosize
               placeholder='Book summary'
               minRows={8}
               name='summary'
               onChange={(e) => onValueChange(e)}
               value={book.summary}
            />
         </FormControl>

         <FormControl>
            <Button variant='contained' onClick={() => editBookDetails()}>
               Edit Book
            </Button>
         </FormControl>
      </Container>
   );
};

export default EditBook;
