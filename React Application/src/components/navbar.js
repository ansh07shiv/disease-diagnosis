import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const NavBar = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color="error">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Disease Diagnosis
                        <LocalHospitalIcon />
                    </Typography>
                    <Button color="inherit">Profile</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
