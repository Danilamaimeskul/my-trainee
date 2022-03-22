import CardsBlock from "./CardsBlock";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


const ProjectsBlock = () =>{
    
    const [searchValue, setValue] = useState('');
    const [error, setError] = useState(null);
    const [filtredCards, setCards] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    

    useEffect(() =>{
       
    }, [searchValue])

    useEffect(() =>{

        let timer = setTimeout(() =>{
            fetch(`api?value=${searchValue}`,{
                method: 'GET',
            })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCards(result.filtred)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        }, 300)
        return () => clearTimeout(timer);
    }, [searchValue])
        
        
        
    // useEffect(()=>{
    //     fetch('api')
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             setIsLoaded(true);
    //             setCards(result.projects)
    //         },
    //         (error) => {
    //             setIsLoaded(true);
    //             setError(error);
    //         }
    //     )
    // }, [])

    if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
        return(
            <div className='block'>
                {console.log(filtredCards.length)}
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
}
export default ProjectsBlock;