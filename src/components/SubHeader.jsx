import React from 'react';
import { AppBar, Avatar, Box, Tab, Tabs, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SubHeader = ({userName}) => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    return (
        <AppBar position="sticky" sx={{ background: "#f8f8ff" }}>
            <Toolbar className="links">
            <Box display="flex" margin={"auto"}>
                <Tabs textColor="primary" sx={{ borderRadius: "10" }}>
                <Tab LinkComponent={Link} label="National" />
                <Tab LinkComponent={Link} label="Politics" />
                <Tab LinkComponent={Link} label="Economics" />
                <Tab LinkComponent={Link} label="International" />
                <Tab LinkComponent={Link} label="Sports" />
                <Tab LinkComponent={Link} label="Arts" />
                <Tab LinkComponent={Link} label="Health & Fitness" />
                <Tab LinkComponent={Link} label="High-Tech" />
                </Tabs>
            </Box>
            <Box display="flex" marginLeft="auto" alignItems="flex-end">
                {isLoggedIn &&
                <Avatar sx={{ bgcolor: "#fffafo" }} aria-label="recipe">
                    {/*{userName.charAt(0)}*/}
                </Avatar>
                }
            </Box>
            </Toolbar>
        </AppBar>
    );
}

export default SubHeader