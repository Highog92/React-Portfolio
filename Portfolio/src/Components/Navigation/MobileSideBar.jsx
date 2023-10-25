import navStyle from './Navigation.module.scss'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export function MobileSideBar() {

    return (
        <section className={navStyle.navigation}>
            <Sidebar rootStyles={{
                [`.${navigation.container}`]: {
                    backgroundColor: 'red',
                },
            }}>
                <Menu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>;
        </section>
    )
}
