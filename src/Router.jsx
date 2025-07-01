import { Routes, Route } from "react-router-dom";
import  { Home }    from "./pages/Home"
import  { About }   from "./pages/About"
import { Mauricio } from "./pages/Mauricio"


export function Router(){
    return(
        <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mauricio" element={<Mauricio />}/>
        </Routes>
    )
}