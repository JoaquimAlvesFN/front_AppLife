import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

import { Container, Title, ButtonLogout } from './styles';

const Header: React.FC = ({children}) => {
  const { push } = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    push('/');
  }

  return (
      <Container>
        <Title>Todo List</Title>
        <div>
          {children}
          <ButtonLogout onClick={handleLogout}>
            <FaSignInAlt size={20} />
          </ButtonLogout>
        </div>
      </Container>
  );
}

export default Header;