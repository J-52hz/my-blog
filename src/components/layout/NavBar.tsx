import { FiGithub, FiSun, FiMoon } from 'react-icons/fi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { toggleTheme } from '@/store/features/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { Theme } from '@/types';

const NavBarContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  a {
    opacity: 0.6;
  }
  a:hover {
    opacity: 1;
  }
`;

const NavBar = () => {
  const { theme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <NavBarContainer>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <a href="https://github.com/J-52hz">
        <FiGithub size="1.2em"></FiGithub>
      </a>
      <a>
        {theme === Theme.Light ? (
          <FiSun size="1.2em" onClick={changeTheme} />
        ) : (
          <FiMoon size="1.2em" onClick={changeTheme} />
        )}
      </a>
    </NavBarContainer>
  );
};

export default NavBar;
