import { useContext } from "react";
import { RepositoriesContext } from "../src/contexts/RepositoriesContext";

const useRepoContext = () => useContext(RepositoriesContext)

export default useRepoContext