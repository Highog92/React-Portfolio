import { Outlet } from 'react-router-dom';
import { Navigation } from '../Components/Navigation/Navigation';
// import GradientButton from './Components/GlowingButton/Special'

export function MainLayout() {

    // Her skal der ligge det som skal vises alle pages
    // Navigationen skal vises på alle sider

    return (
        <>
            <Navigation />
            <Outlet />
            {/* <GradientButton /> */}
        </>

    )
}