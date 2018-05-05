import styled from 'styled-components'

export const TurnBanner = styled.div`
	color: #ccb6a2;
	font-size: 30px;
	font-weight: 300;
	margin-bottom: 20px;

	span {
		color: #ffffff;
		font-weight: 600;
	}

	@media (max-width: 425px) {
		font-size: 20px;
	}
`

export const WinnerBanner = styled.div`
	color: #ccb6a2;
	font-weight: 300;
	font-size: 30px;
	margin-top: 20px;

	span {
		color: #ffffff;
		font-weight: 600;
	}

	@media (max-width: 425px) {
		font-size: 20px;
	}
`

export const CustomButton = styled.button`
	margin-top: 30px;
	width: 150px;
	height: 40px;
	border: 1px solid #ccb6a2;
	background-color: #4e443e;
	border-radius: 3px;
	color: #ffffff;
	outline: none;
`

export const MainHeading = styled.div`
	color: #9e705e;
	font-size: 50px;
	font-weight: 600;
	margin-bottom: 40px;

	@media (max-width: 425px) {
		font-size: 40px;
	}
`
