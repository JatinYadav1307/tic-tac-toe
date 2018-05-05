import styled from 'styled-components'

export const Box = styled.div`
	width: 90px;
	height: 90px;
	border: 1px solid #ccb6a2;
	margin: -1px;
	position: relative;

	@media (max-width: 425px) {
		width: 70px;
		height: 70px;
	}
`

export const Center = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`

export const ResponsiveImage = styled.img`
	height: 40px;
	@media (max-width: 425px) {
		height: 30px;
	}
`
