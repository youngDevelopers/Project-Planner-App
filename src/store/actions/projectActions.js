
export const createProject = ( project ) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => { //fiirstly we pause a dispatch and later call a dispatch 
        //make an asyc call from the database
        const firestoreDB = getFirestore();
        firestoreDB.collection('projects').add({
            ..project,
            authorFirstName: 'Emmanuel',
            authorLastName: 'Damba',
            authorId: 12345,
            createdAt: new Date(),
        }).then( () => {
            dispatch({
                type: 'CREATE PROJECT',
                project,
            });
        } ).catch(
            (err) =>{
                dispatch(
                    {
                        type: 'Create Project Error',
                        err,
                    }
                )
            }
        )
    }
};