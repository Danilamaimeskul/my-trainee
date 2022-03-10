import React from 'react';
import '../../styles/Footer.css'
import footer from '../../data/footer';

const FooterList = () => {
    return (
        <ul className='footer__list'>
            {footer.map(item => {
                return(
                    <FooterSublist data = {item} />
                )
            })}
            <InputSubList />
        </ul>
    );
};

const FooterSublist = ({data}) =>{
    return(
        <li className='footer__sublist'>
            {data.map(({text, isBold, href}) =>{
                return(
                    <a href={href} className={isBold ? 'first' : ''}>{text}</a>
                )
            })}    
        </li>
    )
}

const InputSubList = () => {
    return(
        <li className='footer__sublist inputs'>
            <p className='title'>Get the Spring newsletter</p>
            <form className='inputs'>
                <input type="text" className="email" placeholder="Email Address" />
                    <button className="sendbtn">SUBSCRIBE</button>
                    <div className="check">
                        <input type="checkbox" className="chekbox" />
                        <p className="text">Yes, I would like to be contacted by The Spring Team and VMware for newsletters, promotions and events</p>
                    </div>
            </form>
        </li>
    )
}

export default FooterList;