import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//just make a cosmetic version
export default function NavBar() {
  return (
    <div className={'nav-bar'}>
      <ul>
        <li>
          <NavLink
            className={'nh'}
            to="/"
            style={({ isActive }) => (isActive ? { backgroundColor: 'white' } : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={'nh'} to="/arr">
            Array
          </NavLink>
        </li>
        <li>
          <NavLink className={'nh'} to="/">
            HashMap
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
