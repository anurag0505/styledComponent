import React from "react";
import styled from "styled-components";
import HeroImage from "../../Images/hero.png";

const Hero = () => {
	return (
		<Container>
			<Left>
				<Title>
					IT Management And IT Support & Services for Everone
				</Title>
				<Disc>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Aspernatur porro vel quidem, eveniet ratione repellat enim
					doloremque, laboriosam nesciunt, eos sequi hic quod ipsam
					magnam! Vel, illo voluptas. Debitis cumque itaque officia,
					labore et cum sed eos fugiat repudiandae sint assumenda
					quasi blanditiis quibusdam! Quod repudiandae libero placeat
					doloremque eveniet?
				</Disc>
				<ButtonContainer>
					<Button>About Us</Button>
					<Button>Contact Us</Button>
				</ButtonContainer>
			</Left>
			<Right>
				<Image src={HeroImage} />
			</Right>
		</Container>
	);
};

export default Hero;

const Container = styled.div`
	display: flex;
	height: 90vh;
`;
const Left = styled.div`
	width: 60%;
	background-color: ${(props) => props.theme.colors.bgDefault};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Right = styled.div`
	width: 40%;
	background-color: ${(props) => props.theme.colors.bgDefault};
	display: flex;
	align-items: center;
`;

const Title = styled.div`
	font-size: 40px;
	font-weight: Bold;
	color: ${(props) => props.theme.colors.primary};
	width: 60%;
`;

const Disc = styled.p`
	font-size: 20px;
	color: ${(props) => props.theme.colors.textDark};
	width: 70%;
`;

const Image = styled.img`
	width: 500px;
`;

const ButtonContainer = styled.div`
	display: flex;
	margin-right: 60px;
`;

const Button = styled.button`
	font-weight: bold;
	color: ${(props) => props.theme.colors.bgDefault};
	background-color: ${(props) => props.theme.colors.primary};
	padding: 10px 20px;
	margin-left: 5px;
	border-radius: 10px;
	border: 2px solid ${(props) => props.theme.colors.primary};
	:hover {
		background-color: ${(props) => props.theme.colors.bgDefault};
		border: 2psx solid ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.primary};
		cursor: pointer;
	}
`;
