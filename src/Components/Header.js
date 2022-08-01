import React from "react";

import { SearchInputContext } from "../Context/SearchInputContext";

export default function Header() {
    const context = React.useContext(SearchInputContext)

    function handleChange(e) {
        context.setInput(e.target.value)
        console.log(context.input)
    }

    return (
        <header>
            <h1 className="title">
                Pokedex Made With React
            </h1>
            <input
                type="text"
                placeholder="Search by name"
                onChange={handleChange}
                name="firstName"
                value={context.input}
            />
        </header>
    )
}