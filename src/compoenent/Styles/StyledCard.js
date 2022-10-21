import styled from "styled-components";

export const Card = styled.h3`
	width: 350px;
	margin: 10px 10px;
	box-shadow: 10px -17px 6px -6px rgba(151, 168, 181, 0.75);
	-webkit-box-shadow: 10px -17px 6px -6px rgba(151, 168, 181, 0.75);
	-moz-box-shadow: 10px -17px 6px -6px rgba(151, 168, 181, 0.75);
	background-color: ${(props) => props.theme.colors.bgLight};
	:hover {
		background-color: ${(props) => props.theme.colors.text};
		width: 365px;
	}
`;

export const CardContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	flex-direction: column;
`;

export const Discription = styled.p`
	color: ${(props) => props.theme.colors.textDark};
	font-size: 15px;
	margin-top: 2px;
	margin-left: 15px;
`;

export const Button = styled.a`
	font-weight: bold;
	color: ${(props) => props.theme.colors.bgDefault};
	cursor: pointer;
`;

export const CardTitle = styled.h3`
	color: ${(props) => props.theme.colors.third}; ;
`;
