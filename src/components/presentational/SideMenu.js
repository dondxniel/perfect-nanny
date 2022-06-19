import { MdClose } from 'react-icons/md';
import { IconButton, Box } from '@mui/material';
import SidebarLinkItem from './SidebarLinkItem'; 

export default function SideMenu({toggleDrawer}){
    
    return (
        <Box
            sx={{width: 250}}
        >
            <div className = "navbar-custom">
                <IconButton color="info" onClick = {toggleDrawer}><MdClose className = "side-menu-buttons" /></IconButton>
            </div>
            <div className = "page" onClick = {toggleDrawer}>
                <SidebarLinkItem path = "/" string = "Home" />
                <SidebarLinkItem path = "/nanny" string = "Are you a Nanny?" />
                <SidebarLinkItem path = "/about" string = "About us" />
                <SidebarLinkItem path = "/auth" string = "Login / Sign up" />
                <SidebarLinkItem path = "/profile" string = "Profile" />
                <SidebarLinkItem path = "/suggestions" string = "Suggestions" />
                <SidebarLinkItem path = "/your-nanny" string = "Your Nanny" />
            </div>
        </Box>
    )
}