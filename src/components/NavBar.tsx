import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//just make a cosmetic version
export default function NavBar() {
  return (
    <nav className={'nav-bar'}>
      <ul>
        <li>
          <NavLink
            className={'nh'}
            to="/"
            style={({ isActive }) =>
              isActive ? { backgroundColor: 'white', height: '85px' } : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={'nh'}
            to="/arr"
            style={({ isActive }) =>
              isActive ? { backgroundColor: 'white', height: '85px' } : undefined
            }
          >
            Array
          </NavLink>
        </li>
        <li>
          <NavLink
            className={'nh'}
            to="/hashmap"
            style={({ isActive }) =>
              isActive ? { backgroundColor: 'white', height: '85px' } : undefined
            }
          >
            HashMap
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
