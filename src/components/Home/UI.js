import styled from 'styled-components'

export const TurnBanner = styled.div`
  color: #CCB6A2;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 20px;

  span {
    color: #FFFFFF;
    font-weight: 600;
  }

  @media (max-width: 425px) {
    font-size: 20px;
  }
`

export const WinnerBanner = styled.div`
  color: #CCB6A2;
  font-weight: 300;
  font-size: 30px;
  margin-top: 20px;

  span {
    color: #FFFFFF;
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
  border: 1px solid #CCB6A2;
  background-color: #4E443E;
  border-radius: 3px;
  color: #FFFFFF;
  outline: none;
`

export const MainHeading = styled.div`
  color: #9E705E;
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 40px;

  @media (max-width: 425px) {
    font-size: 40px;
  }
`