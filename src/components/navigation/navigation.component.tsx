import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

interface NavigationProp {
  path?: string
}

const Navigation: React.FC<NavigationProp> = ({ path }): ReactElement  => (
  <header className="App-header">
    <nav className='container'>
      <ul>
        <li className={path === '/' ? 'active' : ''}>
          <Link to='/'>PPH-21</Link>
        </li>
        {/* <li className={path === '/another' ? 'active' : ''}>
          <Link to='/another'>Another</Link>
        </li> */}
      </ul>
    </nav>
  </header>
)

export default Navigation
