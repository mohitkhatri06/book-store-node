import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AllBook from './components/AllBook';
import AddBook from './components/AddBook';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditBook from './components/EditBook';
import ViewBook from './components/ViewBook';

function App() {
   return (
      <BrowserRouter>
         <NavBar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<ViewBook />} />
            <Route path='/all' element={<AllBook />} />
            <Route path='/add' element={<AddBook />} />
            <Route path='/edit/:id' element={<EditBook />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
