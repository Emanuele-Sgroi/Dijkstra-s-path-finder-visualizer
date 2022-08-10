import React, {Component, useState} from 'react';

import './Navbar.css';

export default class Navbar extends Component {
    render() {
        
        const CustomLink = ({href, children}) =>{
            const path = window.location.pathname;
            return (
                <li >
                    <a className={path === href  ? "active" : ""} href={href} >{children}</a>
                    <div className={path === href ? "divActive" : "divUnactive"}/>
                </li>
            )
        }

        const FirstLink = ({href, children}) =>{
            const path = window.location.pathname;
            return (
                <li >
                    <a className={path === "/" || path === href ? "active" : ""} href={href} >{children}</a>
                    <div className={path === "/" || path === href ? "divActive" : "divUnactive"}/>
                </li>
            )
        }
      return (
        <nav className='navbarContainer'>
            <div className='navbarSubContainer'>
                <ul className='navbarList'>
                   <FirstLink href="/visualizer">
                    Visualizer
                   </FirstLink>
                   <CustomLink  href="/tutorial">
                    tutorial
                   </CustomLink>
                   <CustomLink  href="/about">
                    about
                   </CustomLink>
                </ul>
            </div>
        </nav>
      );
    }
  }