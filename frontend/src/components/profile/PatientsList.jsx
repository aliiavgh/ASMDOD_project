import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { patientContext } from "../../contexts/PatientsContext";
import {
	Box,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	InputAdornment,
	TextField,
	Typography,
} from "@mui/material"

const PatientList = () => {
 const [FirstName, setFirstName] = React.useState([])
 const [LastName, setLastName] = React.useState([])
 const [Email, setEmail] = React.useState([])

 const { getPatients, patients } = useContext(patientContext)

 const pages = Math.ceil(patients.length / 6)

 function currentData() {
  let begin = (currentPage - 1) * 6
  let end = begin + 6
  return patients.slice(begin, end)
 }

 useEffect(() => {
		getPatients()
	}, [])

	useEffect(() => {
		setSearchParams({
			q: search,
		})
		console.log(searchParams.toString())
	}, [search])

	useEffect(() => {
		getPatients()
	}, [searchParams])
 }

 const handleChange = (event) => {
		const {
			target: { value },
		} = event
		setFirstName(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		)

  return (
   <Box
			sx={{
				// height: "100vh",
				width: "100%",
				display: "flex",
				// alignItems: "center",
				justifyContent: "right",
			}}
		>
			<Box
				sx={{
					pl: 5,
					pr: 5,
					width: "100%",
					height: "180px",
					background: "#fff",
					zIndex: 6,
					position: "fixed",
					flexWrap: "wrap",
				}}
			>
				<Box>
					<Box
						sx={{
							mt: 5,
						}}
					>
						<Typography
							sx={{
								mt: 50,
								color: "#3447F6",
								// width: "50%",
								fontWeight: "700",
							}}
							// variant="h6"
							component="span"
						>
							Главная{" "}
						</Typography>
						<Typography
							sx={{
								fontSize: "13px",
							}}
							component="span"
							color="grey"
						>
							/ Залы и студии
						</Typography>
					</Box>
					<Box>
						<Typography
							sx={{
								mt: 0,
								// width: "50%",
								fontWeight: "700",
								fontSize: "40px	",
							}}
							component="div"
						>
							Залы и студии{" "}
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						width: "100%",
						mb: 500,
					}}
				>
					<Toolbar component="div" sx={{ flexWrap: "wrap" }}>
						<Box
							sx={{
								width: "20%",
							}}
						>
							<TextField
								id="input-with-icon-textfield"
								label="Search..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<SearchIcon />
										</InputAdornment>
									),
								}}
								variant="standard"
							/>
						</Box>
						<FormControl sx={{ m: 1, width: 250 }}>
							<InputLabel sx={{ mt: -1 }} id="demo-multiple-name-label">
								Категории
							</InputLabel>
							<Select
								sx={{
									borderRadius: "25px",
									height: "40px",
								}}
								labelId="demo-multiple-name-label"
								id="demo-multiple-name"
								multiple
								value={FirstName}
								onChange={handleChange}
								input={<OutlinedInput label="Name" />}
								MenuProps={MenuProps}
							>
								{names.map((name) => (
									<MenuItem
										key={name}
										value={name}
										style={getStyles(name, FirstName, theme)}
									>
										{name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Toolbar>
				</Box>
			</Box>
  </Box>
	
  )
	}
