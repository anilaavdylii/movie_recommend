import {createContext} from "react";

const MovieContext = createContext();

function MovieProvider({children, movie, updateRecord, insertRecord, deleteRecord}){
    return(
        <MovieContext.Provider value={{movie, updateRecord, insertRecord, deleteRecord}}>
            {children}
        </MovieContext.Provider>
    );
}

export { MovieContext, MovieProvider };