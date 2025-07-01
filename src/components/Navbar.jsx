import { NavLinkRouter } from "./NavLinkRouter";
import "./NavBar.css"

export function NavBar(){
    return (

        <>
            <div class="nav_bar">
                
                <NavLinkRouter path=""/>
                <NavLinkRouter path="about"/>
                <NavLinkRouter path="mauricio"/>
            </div>
        </>
    )
}