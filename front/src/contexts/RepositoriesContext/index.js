import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useRepositories } from "../../../hooks/useRepositories";

export const RepositoriesContext = React.createContext({})

const RepositoriesProvider = ({ children }) => {
    const [filter, setFilter] = useState("latest");
    const [textFilter, setTextFilter] = useState("");
    const { loading, data, fetchMore } = useRepositories(textFilter)

    const filterByText = useDebouncedCallback((value) => {
        setTextFilter(value)
    }, 500)

    const repositoryNodes = !loading ? data.repositories.edges.map((edge) => edge.node).sort((a, b) => {
        switch (filter) {
          case "latest":
            return b.createdAt - a.createdAt;
          case "highest":
            return b.ratingAverage - a.ratingAverage;
          case "lowest":
            return a.ratingAverage - b.ratingAverage;
          default:
            return b.createdAt - a.createdAt;
        }
      }) : []

    return (
        <RepositoriesContext.Provider value={{ loading, repositories: repositoryNodes, setFilter, filterByText, filter, fetchMore }}>
            {children}
        </RepositoriesContext.Provider>
    )
}

export default RepositoriesProvider