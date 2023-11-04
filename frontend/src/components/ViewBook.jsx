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

const ViewBook = () => {
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

   const backBookDetails = async () => {
      navigate('/all');
   };

   return (
      <Container>
         <Typography variant='h4'>{book.title}</Typography>
         <FormControl>
            <InputLabel>Title</InputLabel>
            <Input disabled name='title' value={book.title} />
         </FormControl>
         <FormControl>
            <InputLabel>Author</InputLabel>
            <Input disabled name='author' value={book.author} />
         </FormControl>
         <FormControl>
            <TextareaAutosize
               placeholder='Book summary'
               minRows={8}
               name='summary'
               disabled
               value={book.summary}
            />
         </FormControl>

         <FormControl>
            <Button variant='contained' onClick={() => backBookDetails()}>
               Back
            </Button>
         </FormControl>
      </Container>
   );
};

export default ViewBook;
