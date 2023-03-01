import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CSS from 'csstype';
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
    <nav className={'nav-bar'} style={{ ...barStyle, width: open ? '10rem' : '0rem' }}>
      <ul>
        <li>
          <button className="nav-button" onClick={() => setOpen(!open)}>
            Navigation
          </button>
        </li>
        <li>
          <NavLink className={'nh'} to="/" onClick={() => setOpen(!open)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={'nh'} to="/arr" onClick={() => setOpen(!open)}>
            Array
          </NavLink>
        </li>
        <li>
          <NavLink className={'nh'} to="/hashmap" onClick={() => setOpen(!open)}>
            HashMap
          </NavLink>
        </li>
        <li>
          <NavLink className={'nh'} to="/binary-tree" onClick={() => setOpen(!open)}>
            Binary Tree
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
