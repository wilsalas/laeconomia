import React, { createContext, useContext } from 'react';
import Store from './Store';

const NewContext = createContext();

// Create to context for render state 
const RootProvider = ({ children }) => (
    <NewContext.Provider value={Store()}>
        {children}
    </NewContext.Provider>
);

// Use State Global
const useGlobal = () => useContext(NewContext);

export {
    RootProvider,
    useGlobal
}