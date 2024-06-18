import { createContext, useState } from "react";

export const Context = createContext();
// To use the values (passed in Context.provider) in the different file, we do it by using Context

// UseContext(Context);

export const AppContext = (props) => {
    const [imageSearch, setImageSearch] = useState(false)

    return (
        <Context.Provider value={{
            imageSearch,
            setImageSearch
        }}>
            {props.children}
        </Context.Provider>
    );
};