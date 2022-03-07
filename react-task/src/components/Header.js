import React, { useRef } from 'react';
import headerMenu from '../data/headerMenu';
import '../styles/Header.css'
import logo from '../assets/images/logo.svg'
import xMark from '../assets/images/x-mark.svg'
import { useState } from 'react';



function Header(props) {
    const menuRef = useRef(null);
    const xMarkRef = useRef(null);


    
    function Logo(props) {
        return (
            <a href='#'>
                <img className='logo' src={logo} alt='logo'></img>
            </a>
        );
    }

    function MenuList() {



        console.log(menuRef.current)

        return (
            <ul className={`menu__list`} ref={menuRef}>
                {headerMenu.map(({title, dropdown, href}) =>{

                    return dropdown ? 
                        <li className='menu__items'>
                            <div className='dropdown'>
                                <span className='dropbtn'>{title}</span>
                                <NavArrow />
                            </div>
                            <DropdownContent content={dropdown}/>
                        </li>
                        :
                        <li className='menu__items'>
                            <a href={href}>{title}</a>
                        </li>;
                })}
            </ul>
        );
    }

    function NavArrow(){
        return(
            <div className='arrow'>
                <div className='nav-arrow' />
            </div>
        )
    }

    function DropdownContent({content}){
        return(
            <div className='dropdown-content'>
                {content.map(({href, text}) => {
                    return(
                        <a href={href}>{text}</a>
                    )
                })}
            </div>
        )
    }

    const changeDropDown = () =>{
        menuRef.current.classList.toggle('active');
        xMarkRef.current.classList.toggle('active');
    }

    function XMark() {
        return (
            <div className={`x-mark`} onClick={changeDropDown} ref={xMarkRef}>
                <img className='controller' src={xMark} alt='x-mark'></img>
            </div>
        );
    }



    function Burger() {
        return (
            <div className="burger controller"  onClick={changeDropDown} >
                <div className="burger__bar"></div>
                <div className="burger__bar"></div>
                <div className="burger__bar"></div>
            </div>
        );
    }

    return (
        <header>
            <div className='container'>
                <Logo />
                <MenuList   />
                <Burger   />
                <XMark     />
                {/* {console.log(window.screen.width)} */}
            </div>
        </header>
    );


}







export default Header;