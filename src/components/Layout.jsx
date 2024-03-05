import { Outlet } from "react-router-dom";
import { NavigationLink } from "./NavigationLink";

export function Layout() {
    return (
        <div>
            <nav className="flex gap-x-4">
                <NavigationLink path={"/product"}>Product</NavigationLink>
                <NavigationLink path={"/features"}>Features</NavigationLink>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    )
}