import React from "react";
import styled from "styled-components";

const Navbar = () => {
	return (
		<Container>
			<Left>
				<Logo>IT Support</Logo>
			</Left>
			<Centre>
				<Menu>
					<MenuItem>Home</MenuItem>
					<MenuItem>Contact</MenuItem>
					<MenuItem>Services</MenuItem>
					<MenuItem>Blog</MenuItem>
					<MenuItem>About Us</MenuItem>
				</Menu>
			</Centre>
			<Right>
				<Button>Call Us Now!</Button>
			</Right>
		</Container>
	);
};

export default Navbar;

const Container = styled.div`
	position: fixed;
	width: 100vw;
	height: 10vh;
	background-color: ${(props) => props.theme.colors.bgDefault};
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Left = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-around;
	align-items: center;
`;

const Centre = styled.div`
	display: flex;
	flex: 2;
	align-items: center;
`;

const Right = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-around;
`;

const Logo = styled.h1`
	cursor: pointer;
	font-size: 20px;
	text-decoration: underline;
	color: ${(props) => props.theme.colors.primary}; ;
`;

const Menu = styled.ul`
	display: flex;
	justify-content: space-around;
	list-style: none;
`;

const MenuItem = styled.li`
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
	color: ${(props) => props.theme.colors.primary};
	display: flex;
	align-items: space-between;
	padding: 12px;
	color: gray;
	:hover {
		color: ${(props) => props.theme.colors.primary};
		display: flex;
	}
`;

const Button = styled.button`
	border: 2px solid ${(props) => props.theme.colors.bgDefault};
	color: ${(props) => props.theme.colors.bgDefault};
	background-color: ${(props) => props.theme.colors.primary};
	display: flex;
	border-radius: 10px;
	font-weight: bold;
	padding: 8px 20px;
	cursor: pointer;
	:hover {
		background-color: ${(props) => props.theme.colors.bgDefault};
		display: flex;
		color: ${(props) => props.theme.colors.primary};
		display: flex;
		border: 2px solid ${(props) => props.theme.colors.primary};
		display: flex;
	}
`;
