
const initState = {
    projects : [
        {id: '1', title: 'help me find peach', content: 'The project specific description', date:"26 March 2023", author:"Emmanuel Damba" },
        {id: '2', title: 'School Visit on Friday', content: 'The project specific description', date:"26 March 2023", author:"Emmanuel Damba" },
        {id: '3', title: 'Dentisty Visit', content: 'The project specific description', date:"26 March 2023", author:"Emmanuel Damba" },
    ]
}

const projectReducer = ( state=initState, action ) => {
    switch(action.type){
        case 'CREATE PROJECT':
            console.log('created project', action.project);
            return state;
        case 'Create Project Error':
            console.log('create project error', action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer ;