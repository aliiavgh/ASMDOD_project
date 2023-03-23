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
import { Link as RouterLink } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import { authContext } from "../../contexts/AuthContext"

const theme = createTheme()


export default function Register() {
 const { register } = React.useContext(authContext)

 const [email, setEmail] = React.useState('')

 const [firstName, setFirstName] = React.useState('')

 const [lastName, setLastName] = React.useState('')

 const [password, setPassword] = React.useState('')

 const [confirmPassword, setConfirmPassword] = React.useState('')

 const [is_doctor, setTrue] = React.useState('')

 function handleSubmit() {
  if (
   !email.trim() ||
			!firstName.trim() ||
			!lastName.trim() ||
			!password.trim() ||
			!confirmPassword.trim()
  ) {
   alert('Заполните все поля!')
   return
  }

  let formData = new FormData()
  formData.append('email', email)
		formData.append('first_name', firstName)
		formData.append('last_name', lastName)
		formData.append('password', password)
		formData.append('password_confirm', confirmPassword)
  formData.append('is_doctor', is_doctor)
		register(formData)
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
						my: 4,
						height: "680px",
						borderRadius: "20px",
					}}>

     <Box sx={{
							pt: 4,
							display: "flex",
							justifyContent: "center",
							flexDirection: "column",
							alignItems: "center",
						}}>
      <Typography component='h1' variant='h5' color='white'>
       Регистрация
      </Typography>
      <Box
							component="form"
							onSubmit={handleSubmit}
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
								id="first_name"
								label="First Name"
								name="first_name"
								autoComplete="first_name"
								autoFocus
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
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
								id="last_name"
								label="Last Name"
								name="last_name"
								autoComplete="last_name"
								autoFocus
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
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
							<TextField 
								margin="normal"
								required
								fullWidth
								name="password"
								label="Confirm password"
								type="password"
								id="password-confirm"
								autoComplete="current-password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
        inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
        sx = {{backgroundColor: '#594067', "& .MuiInputLabel-root": {color: 'white'},//styles the label
         "& .MuiOutlinedInput-root": {
         "& > fieldset": { borderColor: "#594067" },
         },}}
							/>

							<Button
								type="submit"
								fullWidth
								variant="contained"
        onClick={(e) => setTrue(false)}
								sx={{ backgroundColor: "#3B455C", mt: 3, mb: 2 }}
							>
								Зарегистрироваться
							</Button>
       <Button
								type="submit"
								fullWidth
								variant="contained"
        onClick={(e) => setTrue(true)}
								sx={{ backgroundColor: "#4F628F", mt: 1, mb: 2 }}
							>
								Зарегистрироваться как врач
							</Button>
							<Grid container>
								<Grid item>
									<RouterLink to="/login">
										<Typography 
											sx={{
												color: "white", marginLeft: 12
											}}
										>
											{"Уже есть аккаунт? Войти"}
										</Typography>
									</RouterLink>
								</Grid>
							</Grid>
						</Box>
     </Box>
    </Container>

 )
}
