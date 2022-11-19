import { NavLink } from 'react-router-dom'
const Menu = () => {
    return (
        <nav>
            <NavLink
                className={({ isActive }) => (isActive ? '' : '')}
                style={({ isActive }) => (isActive ? { color: 'green' } : {})}
                to="."
                end
            >
                Home
            </NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contacts">Contacts</NavLink>
        </nav>
    )
}

export default Menu
