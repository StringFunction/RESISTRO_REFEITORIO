import { useContext } from "react"
import { Contextapp } from "../context/ContextAuth"


const useAppContext = () =>{
    const context = useContext(Contextapp)
    return context
}
export default useAppContext