import React from "react";
import styled from "styled-components";
import coverImage from "../../Images/laptopDark.jpg";

const InfoSectionTwo = () => {
	return (
		<Container>
			<Title>Anywhere Workspace!</Title>
			<Wrapper>
				<Discription>
					Indian Bank is a central public sector undertaking. It is
					under the ownership of the Ministry of Finance, Government
					of India.
				</Discription>
				<Discription>
					Beginners friendly React Website Using Styled Components
					complete Course - Fully Responsive Website
				</Discription>
			</Wrapper>
		</Container>
	);
};

export default InfoSectionTwo;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(${coverImage});
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	min-height: 40%;
	margin: 5% 0 5% 0%;
	flex-direction: column;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	flex-wrap: wrap;
	width: 40%;
`;
const Title = styled.div`
	color: white;
	font-weight: bold;
	font-size: x-large;
	margin-bottom: 1%;
`;

const Discription = styled.div`
	color: white;
	padding-bottom: 10px;
	font-weight: lighter;
`;
