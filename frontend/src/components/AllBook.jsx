import {
   Table,
   TableHead,
   TableBody,
   TableCell,
   TableRow,
   styled,
   Button,
} from '@mui/material';
import { getBooks, deleteBook } from '../service/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const StyledTable = styled(Table)`
   width: 90%;
   margin: 50px auto 0 auto;
`;

const StyledButton = styled(Button)`
   margin: 10px auto 0 auto;
`;

const THead = styled(TableRow)`
   background: #000000;
   & > th {
      color: #fff;
      font-size: 20px;
   }
`;

const TBody = styled(TableRow)`
   & > td {
      font-size: 20px;
   }
`;

const AllBook = () => {
   const [books, setBooks] = useState([]);

   useEffect(() => {
      getAllBooks();
   }, []);

   const getAllBooks = async () => {
      let response = await getBooks();
      setBooks(response.data);
   };

   const deleteBookDetails = async (id) => {
      swal({
         title: 'Are you sure?',
         text: 'Once deleted, you will not be able to recover this record!',
         icon: 'warning',
         buttons: true,
         dangerMode: true,
      }).then((willDelete) => {
         if (willDelete) {
            swal('Your record has been deleted!', {
               icon: 'success',
            });
            deleteBook(id).then(() => {
               getAllBooks();
            });
         }
      });
   };

   return (
      <StyledTable>
         <TableHead>
            <THead>
               <TableCell>Title</TableCell>
               <TableCell>Author</TableCell>
               <TableCell>Summary</TableCell>
               <TableCell></TableCell>
            </THead>
         </TableHead>
         <TableBody>
            {books?.map((book) => (
               <TBody key={book._id}>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.summary}</TableCell>
                  <TableCell>
                     <StyledButton
                        variant='contained'
                        style={{ marginRight: 10 }}
                        component={Link}
                        to={`/${book._id}`}
                     >
                        View
                     </StyledButton>
                     <StyledButton
                        variant='contained'
                        style={{ marginRight: 10 }}
                        component={Link}
                        to={`/edit/${book._id}`}
                     >
                        Edit
                     </StyledButton>
                     <StyledButton
                        variant='contained'
                        color='error'
                        onClick={() => deleteBookDetails(book._id)}
                     >
                        Delete
                     </StyledButton>
                  </TableCell>
               </TBody>
            ))}
         </TableBody>
      </StyledTable>
   );
};

export default AllBook;
