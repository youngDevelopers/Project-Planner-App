
export const createProject = ( project ) => {
    return (dispatch, getState) => { //fiirstly we pause a dispatch and later call a dispatch 
        //make an asyc call from the database
        dispatch({
            type: 'CREATE PROJECT',
            project,
        })
    }
};