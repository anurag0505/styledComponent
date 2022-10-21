import React from "react";
import styled from "styled-components";

const TextBanner = ({ title, subtitle }) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
		</Container>
	);
};

export default TextBanner;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Title = styled.div`
	color: tomato;
`;

const Subtitle = styled.div`
	color: darkblue;
	font-weight: bold;
	font-size: 40px;
	margin: 5px;
`;
