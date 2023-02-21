import React from 'react';
import Button from '../buttons/index';
import Auth_Buttons from '../buttons/reg_button'

import './navbar.scss'

function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='navbar'>
                    <ul>
                      <li> <a href="">О проекте</a> </li>
                      <li> <a href="">Главная</a> </li>
                      <li> <a href="">API</a> </li>
                      <li> <a href="">Статья</a> </li>
                     </ul>
     
                </div>
                
                <div className='auth'>
                   <Auth_Buttons />
                </div>
            </div>
        </div>
        
    );
}

export default Header;




// import React from 'react';
// import { AppBar } from '@mui/material';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
// import { makeStyles } from '@mui/material/styles';


// const useStyles = makeStyles((theme) => ({
// 	appBar: {
// 		borderBottom: `1px solid ${theme.palette.divider}`,
// 	},
// }));

// function Header() {
// 	const classes = useStyles();
// 	return (
// 		<React.Fragment>
// 			<CssBaseline />
// 			<AppBar
// 				position="static"
// 				color="white"
// 				elevation={0}
// 				className={classes.appBar}
// 			>
// 				<Toolbar>
// 					<Typography variant="h6" color="inherit" noWrap>
// 						BlogmeUp
// 					</Typography>
// 				</Toolbar>
// 			</AppBar>
// 		</React.Fragment>
// 	);
// }

// export default Header;