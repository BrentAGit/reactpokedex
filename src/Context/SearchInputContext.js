import React from "react";

const SearchInputContext = React.createContext()

function SearchInputContextProvider(props) {
    const [searchInput, setSearchInput] = React.useState('')

    return (
        <SearchInputContext.Provider value={{input: searchInput, setInput: setSearchInput}}>
            {props.children}
        </SearchInputContext.Provider>
    )
}

export {SearchInputContextProvider, SearchInputContext}