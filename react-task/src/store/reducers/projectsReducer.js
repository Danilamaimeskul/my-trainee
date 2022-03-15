import projects from "../../data/projects"


const defaultState = {
    projects: projects,
}

const projectsReducer = (state = defaultState, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default projectsReducer;