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
import { createTheme, ThemeProvider } from "@mui/material/styles"

import { Link as RouterLink } from "react-router-dom"
import { authContext } from "../../contexts/AuthContext"




const Register = () => {
 const {register} = React.useContext(authContext)
 const [email, setEmail] = React.useState("")

	const [firstName, setFirstName] = React.useState("")

	const [lastName, setLastName] = React.useState("")

	const [password, setPassword] = React.useState("")

	const [confirmPassword, setConfirmPassword] = React.useState("")

	function handleSubmit() {
		if (
			!email.trim() ||
			!firstName.trim() ||
			!lastName.trim() ||
			!password.trim() ||
			!confirmPassword.trim()
		) {
			alert("Заполните поля!")
			return
		}

		let formData = new FormData()
		formData.append("email", email)
		formData.append("first_name", firstName)
		formData.append("last_name", lastName)
		formData.append("password", password)
		formData.append("password_confirm", confirmPassword)
		register(formData)
	}

 return(
   <div>
    <h1>H</h1>
   </div>
 );
}

export default Register;