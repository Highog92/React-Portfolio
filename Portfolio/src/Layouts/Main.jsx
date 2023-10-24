import { Outlet } from 'react-router-dom';
import { Navigation } from '../Components/Navigation/Navigation';
import { Welcome } from '../Components/Welcome/Welcome';
// import GradientButton from './Components/GlowingButton/Special'

export function MainLayout() {

    return (
        <>
            <Navigation />
            <Outlet />
            {/* <GradientButton /> */}

        </>

    )
}