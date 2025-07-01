import { NavLink } from "react-router-dom";

export function NavLinkRouter({path}){
    return (
        <>
            <NavLink className="navlink" to={`/${path}`}>
                Clique para { path == "" ? "Página inicial" : path }
            </NavLink>
        </>
    )
}