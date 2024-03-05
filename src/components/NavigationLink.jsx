import { NavLink } from "react-router-dom"

export function NavigationLink({children, path}) {
   return (
        <NavLink to={path} className={({isActive}) => `font-semibold ${isActive ? "lg:underline" : null}`}>
            {children}
        </NavLink>
   ) 
}