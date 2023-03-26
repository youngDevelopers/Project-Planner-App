import { collection, addDoc } from "firebase/firestore";
import {app} from '../../config/firebaseConf';

const createProject =  ( project) => {

       return (dispatch, getState, {getFirebase, getFirestore} ) =>{
            const db = getFirestore(app)
            addDoc(collection(db, "projects"), {
                ...project,
                authorFirstName: 'Emmanuel',
                authorLastName: 'Damba',
                authorId: 12345,
                createdAt: new Date(),
            }).then( () =>{
                dispatch({
                    type: 'CREATE PROJECT',
                    project,
                })
            }).catch((error) =>{
                dispatch({
                    type: 'Create Project Error',
                    error,
                })
            } )
        
           
       }
};

export default createProject;