import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

const MainLayout = () => {
    return (
        <>
            <Menu />
            <Outlet />
            <h1>Footer</h1>
        </>
    )
}

export default MainLayout
