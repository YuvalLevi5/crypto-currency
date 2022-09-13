import React, { useEffect, useState } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { NavLink } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'
import MenuItem from 'antd/lib/menu/MenuItem'

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className='nav-container'>
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <NavLink to='/'>Cryptoverse</NavLink>
                </Typography.Title>
                <MenuOutlined className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)} />
                {/* <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button> */}
            </div>
            {activeMenu && (
                <Menu theme='dark'>
                    <MenuItem key={'bla'} icon={<HomeOutlined />}>
                        <NavLink to='/'>Home</NavLink>
                    </MenuItem>
                    <MenuItem key={'bla1'} icon={<FundOutlined />}>
                        <NavLink to='/cryptocurrencies'>Cryptocurrencies</NavLink>
                    </MenuItem>
                    {/* <MenuItem key={'bla2'} icon={<MoneyCollectOutlined />}>
                        <NavLink to='/exchanges'>Exchanges</NavLink>
                    </MenuItem> */}
                    <MenuItem key={'bla3'} icon={<BulbOutlined />}>
                        <NavLink to='/news'>News</NavLink>
                    </MenuItem>

                </Menu>)}
        </div>
    )
}

export default Navbar