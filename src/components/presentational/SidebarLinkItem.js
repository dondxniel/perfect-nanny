import { useState } from 'react';
import { Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SidebarLinkItem({path, string}){
    const [ elevation, setElevation ] = useState(1);
    
    return (
        <Link to = {path} className = "sidebar-link-tag" onMouseEnter = {() => setElevation(4)} onMouseLeave = {() => setElevation(1)}>
            <Paper
                variant = "elevation"
                elevation = {elevation}
                className = "sidebar-link"
            >
                <span >{string}</span>
            </Paper>
        </Link>
    )
}