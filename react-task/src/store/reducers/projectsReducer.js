import projects from "../../data/projects"





const projectsReducer = (state = defaultState, action) => {
    // console.log(2)
    switch(action.type){
        case "SET_PROJECTS": 
            // console.log(action)
            return {...state, projects: action.projects}
        default:
            return state
    }
}

// export default projectsReducer;