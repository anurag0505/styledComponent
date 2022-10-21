import React from "react";
import styled from "styled-components";
import sectionFourImg from "../../Images/bg2.jpg";

const InfoSectionFour = () => {
	return (
		<Container>
			<Cards>
				<CardContent>
					<Title>1000+</Title>
					<Subtitle>subscribers</Subtitle>
				</CardContent>
			</Cards>
			<Cards>
				<CardContent>
					<Title>1M+</Title>
					<Subtitle>Followers</Subtitle>
				</CardContent>
			</Cards>
			<Cards>
				<CardContent>
					<Title>88k+</Title>
					<Subtitle>Likes</Subtitle>
				</CardContent>
			</Cards>
			<Cards>
				<CardContent>
					<Title>8M+</Title>
					<Subtitle>Happy Customers</Subtitle>
				</CardContent>
			</Cards>
		</Container>
	);
};

export default InfoSectionFour;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40%;
	background-image: url(${sectionFourImg});
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	margin: 3% 0%;
`;

const Cards = styled.div`
	width: 250px;
`;

const Title = styled.div`
	font-weight: bold;
	font-size: 40px;
	color: white;
`;

const Subtitle = styled.div`
	font-weight: bold;
	font-size: 20px;
	color: white;
`;

const CardContent = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
    align-items: center;
`;
