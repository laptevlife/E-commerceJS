import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/PbYIaLx0yjE.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    // console.log('totalItems', totalItems);
    const location = useLocation()
    const classes = useStyles()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to='/'  variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Commerce.js
                </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                 )} 
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar
