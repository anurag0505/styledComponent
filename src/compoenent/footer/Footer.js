import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<>
			<Container>
				<Left>
					<Title>About Us</Title>
					<Discription>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Deserunt ut error, impedit illum at nesciunt
						dolores neque quisquam, facere officia ipsa eos
						consequatur, harum sed libero accusamus officiis
						laboriosam minus.
					</Discription>
				</Left>
				<Center>
					<Title>Our Services</Title>
					<ListItems>Our Services</ListItems>
					<ListItems>Service Desk</ListItems>
					<ListItems>Proactive Support</ListItems>
					<ListItems>24/7 Support </ListItems>
					<ListItems>Training Courses</ListItems>
				</Center>
				<Right>
					<Title>Our Policies</Title>
					<ListItems>Privacy Policies</ListItems>
					<ListItems>Data Policies</ListItems>
				</Right>
			</Container>
			<CopyRight>&copy; 2022 Tagvams - All Rights Reserved</CopyRight>
		</>
	);
};

export default Footer;

const Container = styled.div`
	height: 40%;
	width: 100%;
	background-color: black;
	margin-top: 3%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: black;
	flex-wrap: wrap;
`;

const Left = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: white;
	margin-left: 200px;
	max-width: 25%;
`;

const Title = styled.div`
	font-size: large;
	font-weight: bold;
	margin-bottom: 10px;
`;

const Discription = styled.div`
	font-size: medium;
	font-weight: bold;
	color: gray;
`;

const Center = styled.div`
	color: white;
`;

const ListItems = styled.li`
	list-style: none;
	font-size: medium;
	font-weight: bold;
	color: gray;
	:hover {
		color: white;
	}
`;

const Right = styled.div`
	color: white;
	margin-right: 200px;
`;

const CopyRight = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10%;
	background-color: gray;
	color: white;
	font-size: 15px;
`;
