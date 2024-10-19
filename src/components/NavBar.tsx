import React from 'react';
import { Link, useLocation, useNavigate, matchPath } from 'react-router-dom';

import styles from '../styles/NavBar.module.scss';
import LeftArrow from '../assets/left_arrow.svg';

interface NavBarProps {
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isDetail = matchPath(`/feed/:uuid`, location.pathname);

  return (
    <div>
      <nav>
        <ul className={styles.nav_bar}>
          {isDetail ? (
            <li>
              <button
                onClick={() => navigate(-1)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <img src={LeftArrow} alt="" />
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/feed">Feed</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default NavBar;
