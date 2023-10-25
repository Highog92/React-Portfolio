import { Outlet } from 'react-router-dom';
import { Navigation } from '../Components/Navigation/Navigation';
import { MobileSideBar } from '../Components/Navigation/MobileSideBar';
// import GradientButton from './Components/GlowingButton/Special'

export function MainLayout() {

    return (
        <>
            <Navigation />
            <MobileSideBar />
            <Outlet />
            {/* <GradientButton /> */}

        </>

    )
}