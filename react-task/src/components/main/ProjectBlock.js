import CardsBlock from "./CardsBlock";
import projects from "../../data/projects";
import { useState,useEffect } from "react";


const ProjectsBlock = () =>{
    

    const [filtredCards, setCards] = useState(projects)

    const [searchValue, setValue] = useState('');

    useEffect(() =>{
        const filterCards = () =>{

             setCards(projects.filter(({title, description}) => {
                
                return searchValue === '' || (title.toLowerCase().includes(searchValue.toLowerCase()) || description.toLowerCase().includes(searchValue.toLowerCase()))
            }))
        }

        let timer = setTimeout(() =>{
            filterCards()
        }, 300)

        return () => clearTimeout(timer);

    }, [searchValue])

    

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
export default ProjectsBlock;