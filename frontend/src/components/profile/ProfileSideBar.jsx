import React from "react";
import {
	Box,
	Button,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	InputAdornment,
	TextField,
	Typography,
 makeStyles
} from "@mui/material"
import { Link as RouterLink } from "react-router-dom"


const useStyles = makeStyles({

 Button: {
   backgroundColor: 'fff',
   color: '#fff',
   '&:hover': {
     backgroundColor: '#393C56',
     color: '#3c52b2',
 },
}})


const ProfileSideBar = () => {
 return ( 
  <Box>
   <Container sx={{
    backgroundColor: '#14172F',
    width: '700px',
    height: '1000px',
    ml: 0
   }}>
    <Box>
    <Typography sx={{
								mt: 90,
								color: "white",
        fontSize: "50px	",
								// width: "50%",
								fontWeight: "600",
							}}
							// variant="h6"
							component="span">
     Профиль
    </Typography>
    </Box>
    <Box>
     <Button variant="outlined" sx={{
								mt: 10,
								color: "white",
        fontSize: "30px	",
								// width: "50%",
								fontWeight: "400",
     }}
							component="span">
      Личный кабинет
     </Button>

    </Box>
    <Box>
    <RouterLink to="/profile/patients">
     <Button sx={{
								mt: 3,
								color: "white",
        fontSize: "30px	",
								// width: "50%",
								fontWeight: "400",
							}}
							// variant="h6"
							component="span">
      Пациенты
     </Button>
     </RouterLink>
    </Box>
   </Container>
  </Box>
 )
}

export default ProfileSideBar