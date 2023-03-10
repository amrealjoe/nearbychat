import React from 'react'
import Box from "@mui/material/Box"
import { styled } from '@mui/material/styles';
import Typography from "@components/Typography"
import Tooltip from '@mui/material/Tooltip';
import IconButton from "@components/IconButtons"
import SettingsRounded from "@mui/icons-material/SettingsRounded";
import RoomRounded from "@mui/icons-material/RoomRounded";
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from "react-router-dom"

const Wrapper = styled(Box)(({ theme }) => ({
	borderBottom: "thin solid #D9D9D9",
	display: "flex",
	padding: 4,
	justifyContent: "space-between",
	"& > *": { flex: 2 },
}))

const LeftContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	paddingLeft: 8,
}))

const RightContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	gap: 4,
	paddingRight: 4,
}))

const CustomAvatar = styled(Avatar)(({ theme }) => ({
	width: 37,
	height: 37
}))


function Header() {
	const navigate = useNavigate()

	const handleCall = () => {
		alert("Calling...")
	}
	return (
		<Wrapper >
			<LeftContainer >
				<Typography>Nearby People</Typography>
			</LeftContainer>
			<RightContainer >
				<Tooltip title="Map View" arrow>
					<IconButton sx={{ color: "black" }} onClick={handleCall}>
						<RoomRounded />
					</IconButton>
				</Tooltip>
				<Link to="/settings">
					<CustomAvatar src='' alt='Calvin Glee' />
				</Link>
			</RightContainer>
		</Wrapper>
	)
}

export default Header