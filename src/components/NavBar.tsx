import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as CSS from 'csstype';
const barStyle: CSS.Properties = {
  height: '100%',
  width: '0',
  position: 'fixed',
  zIndex: 1,
  top: '0',
  left: '0',
  backgroundColor: '#111',
  overflowX: 'hidden',
  paddingTop: '6px',
  transition: '0.5s',
};
const liStyle: CSS.Properties = {
  cursor: 'pointer',
  fontSize: '1.3rem',
  transition: '0.3s ease-in-out',
  display: 'inline-block',
  position: 'relative',
  zIndex: 1,
  padding: '2em 2em 1em 2em',
  margin: '-2em -1em -1em -1em',
};
export default function NavBar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <nav
      className={'nav-bar'}
      style={{ ...barStyle, width: open ? '9rem' : '0rem', display: open ? 'block' : 'none' }}
    >
      <ul className="nav-ul">
        <li className="nav-li-item">
          <button className="nav-button" onClick={() => setOpen(!open)}>
            Navigation
          </button>
        </li>
        <li className="nav-li-item">
          <NavLink className={'nh'} to="/" onClick={() => setOpen(!open)}>
            Home
          </NavLink>
        </li>
        <li className="nav-li-item">
          <NavLink className={'nh'} to="/arr" onClick={() => setOpen(!open)}>
            Array
          </NavLink>
        </li>
        <li className="nav-li-item">
          <NavLink className={'nh'} to="/hashmap" onClick={() => setOpen(!open)}>
            HashMap
          </NavLink>
        </li>
        <li className="nav-li-item">
          <NavLink className={'nh'} to="/binary-tree" onClick={() => setOpen(!open)}>
            Binary Tree
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
