import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { Link as RouterLink, useNavigate } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import { authContext } from "../../contexts/AuthContext"

const theme = createTheme()


export default function Login() {
 const { login } = React.useContext(authContext)

 const [email, setEmail] = React.useState('')

 const [password, setPassword] = React.useState('')

 const navigate = useNavigate()


 function handleSubmit() {
		if (!email.trim() || !password.trim()) {
			alert("Заполните поля!")
			return
		}

		let formData = new FormData()
		formData.append("email", email)
		formData.append("password", password)
		login(formData, email)
	}

 return (

    <Container component="main"
					maxWidth="xs"
					sx={{
						position: "relative",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						// mr: 10,
						my: -5,
						height: "680px",
						borderRadius: "20px",
					}}>

     <Box sx={{
							pt: 4,
							display: "flex",
							justifyContent: "center",
							flexDirection: "column",
							alignItems: "center",
       borderColor: "white",
						}}>
      <Typography component='h1' variant='h5' color='white'>
       Авторизация
      </Typography>
      <Box
							component="form"
							// onSubmit={handleSubmit}
							noValidate
							sx={{ mt: 1 }}
						>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								autoFocus
								value={email}
								onChange={(e) => setEmail(e.target.value)}
        inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
        sx = {{backgroundColor: '#594067', "& .MuiInputLabel-root": {color: 'white'},//styles the label
         "& .MuiOutlinedInput-root": {
         "& > fieldset": { borderColor: "#594067" },
         }}}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
        inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
        sx = {{backgroundColor: '#594067', "& .MuiInputLabel-root": {color: 'white'},//styles the label
         "& .MuiOutlinedInput-root": {
         "& > fieldset": { borderColor: "#594067" },
         }}}
							/>

							<Button
								type="submit"
								fullWidth
								variant="contained"
        onClick={handleSubmit}
								sx={{ backgroundColor: "#3B455C", mt: 3, mb: 2 }}
							>
								Войти в аккаунт
							</Button>
							<Grid container>
								<Grid item>
									<RouterLink to="/register">
										<Typography 
											sx={{
												color: "white", marginLeft: 15
											}}
										>
											{"Зарегистрироваться"}
										</Typography>
									</RouterLink>
								</Grid>
							</Grid>
						</Box>
     </Box>
    </Container>

 )
}
