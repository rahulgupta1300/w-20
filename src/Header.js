import React from "react";
import { Paper, Box } from "@mui/material";
import { Avatar } from "@mui/material";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import{ useStyles } from './HeaderStyle';


function Header() {

    const classes =useStyles();
    return(
        <Box>
            <Paper>
                <div className={classes.headerMain}>
                    <ul className={classes.leftSide}>
                        <li className={classes.li}>
                            <img className={classes.img} src="logo.png"  alt="LogoImage"></img>
                        </li>

                        <li className={(classes.li, classes.sli)}>PATIENTS </li>
                        <li className={classes.li}>CALENDER</li>
                        <li className={classes.li}>USERS</li>
                        <li className={classes.li}>BILLING</li>
                    </ul>

                    <div className={classes.rightSide}>
                        <NotificationsSharpIcon fontSize="large"/>
                        <Avatar>R</Avatar>
                    </div>
                </div>
            </Paper>
        </Box>
    );
   
    
}
export default Header;