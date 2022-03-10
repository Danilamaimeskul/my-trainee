import React from 'react';
import AtticProjects from './AtticProjects';
import '../styles/Main.css'
import { useState, useEffect } from 'react';
import projects from '../data/projects';
import image from "../assets/images/card-images/logo-session-8.png"

function Main(props) {
    return (
        <main>
            <DescriptionBlock />
            <ProjectsBlock />
            {/*<AtticProjects /> */}
        </main>
    );
}




const ProjectsBlock = () =>{

    const [searchValue, setValue] = useState('');

    let filtredCards = projects.filter(({title, description}) => {
        return searchValue === '' || (title.toLowerCase().includes(searchValue.toLowerCase()) || description.toLowerCase().includes(searchValue.toLowerCase()))
    })

    return(
        <div className='block'>
            <div className='container'>
                <div className='search__block'>
                    <h2 className='search__result'>Found: {filtredCards.length}</h2>
                    <form>
                        <input 
                            id='search' 
                            className='search' 
                            placeholder='Search'
                            onChange={(event) => setValue(event.target.value)}
                        />
                    </form>
                </div>
                <CardsBlock projects = {filtredCards} />
            </div>
        </div>
    )
}

const SearchBlock = ({onSearchSubmit}) => {
    return(
        <div className='search__block'>
            <form>
                <input id='search' className='search' placeholder='Search'/>
            </form>
        </div>
    )
}

const CardsBlock = ({projects}) =>{
    return(
        <div className='cards__block'>
            {projects.map((item) => {
                return(
                    <Card item={item}/>
                )
            })}
        </div>

    )
}

const Card = ({item}) =>{
    return(
        <a className='card__link'>
            <div className='card'>
                <img className='card__image' src={item.imageSrc} alt='svg image'/>    
                <div className='text'>
                    <h2 className='card__title'>{item.title}</h2>    
                    <p className='card__description'>{item.description}</p>
                </div>
            </div>    
        </a>
    )
}

const DescriptionBlock = () => {
    return(
        <div className='container'>
            <div className='description__block'>
                <h1 className='title'>Projects</h1>    
                <p className='description'>From configuration to security, web apps to big data—whatever the infrastructure needs of your application may be, there is a Spring Project to help you build it. Start small and use just what you need—Spring is modular by design.</p>
            </div>
        </div>
    )
}

export default Main;