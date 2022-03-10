import CardsBlock from "./CardsBlock";
import projects from "../../data/projects";
import { useState } from "react";


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
export default ProjectsBlock;