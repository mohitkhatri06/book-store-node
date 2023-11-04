import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
   background: #111111;
`;

const Tab = styled(NavLink)`
   font-size: 20px;
   margin-right: 20px;
   text-decoration: none;
   color: inherit;
`;

const NavBar = () => {
   return (
      <Header position='static'>
         <Toolbar>
            <Tab to='/'>Home</Tab>
            <Tab to='/all'>All Book</Tab>
            <Tab to='/add'>Add Book</Tab>
         </Toolbar>
      </Header>
   );
};

export default NavBar;
