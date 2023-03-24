import { collection, addDoc } from "firebase/firestore";

const createProject = async ( project ) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => { //fiirstly we pause a dispatch and later call a dispatch 
        //make an asyc call from the database
        const getPromise = () =>{
            addDoc(collection(db, "projects"), {
                ...project,
                authorFirstName: 'Emmanuel',
                authorLastName: 'Damba',
                authorId: 12345,
                createdAt: new Date(),
            })
        }
        const db = getFirestore()
        try {
            const docRef =  getPromise();
            return dispatch({
                type: 'CREATE PROJECT',
                project,
            });
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        
    }
};

export default createProject;