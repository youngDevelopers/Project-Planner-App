import { collection, addDoc } from "firebase/firestore";
import {app, db} from '../../config/firebaseConf';

const createProject =  ( project) => {

       return (dispatch, getState, {getFirebase, getFirestore} ) =>{
            //const db = getFirestore()
            addDoc(collection(db, "projects"), {
                ...project,
                authorFirstName: 'Emmanuel',
                authorLastName: 'Damba',
                authorId: 12345,
                createdAt: new Date(),
            }).then( () =>{//callback function after a promise is returned since it is an asychronous function
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