import React from "react";
import avatarImage1 from "../../Images/staff1.jpg";
import avatarImage2 from "../../Images/staff2.jpg";
import avatarImage3 from "../../Images/staff3.jpg";
import avatarImage4 from "../../Images/staff4.jpg";
import styled from "styled-components";
import TextBanner from "../TextBanner/TextBanner";

const Team = () => {
	return (
		<>
			<TextBanner title={"Wir union"} subtitle={"Our Team"} />

			<Container>
				<Wrapper>
					<Card>
						<CardImage src={avatarImage1} />
						<TextWrapper>
							<TeamMember>member</TeamMember>
							<TeamPosition>Position</TeamPosition>
						</TextWrapper>
					</Card>
					<Card>
						<CardImage src={avatarImage2} />
						<TextWrapper>
							<TeamMember>member</TeamMember>
							<TeamPosition>Position</TeamPosition>
						</TextWrapper>
					</Card>
					<Card>
						<CardImage src={avatarImage3} />
						<TextWrapper>
							<TeamMember>member</TeamMember>
							<TeamPosition>Position</TeamPosition>
						</TextWrapper>
					</Card>
					<Card>
						<CardImage src={avatarImage4} />
						<TextWrapper>
							<TeamMember>member</TeamMember>
							<TeamPosition>Position</TeamPosition>
						</TextWrapper>
					</Card>
				</Wrapper>
			</Container>
		</>
	);
};

export default Team;

const Container = styled.div`
	margin:  0.5%;
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
    padding-top: 3%;
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const Card = styled.div`
	height: 295px;
	width: 250px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	margin: 1%;
	-webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
	box-shadow: 0px -1px 15px -5px #a8a4a4;
`;
const TeamMember = styled.div`
	color: darkblue;
	text-align: center;
	padding: 2% 2%;
`;
const TeamPosition = styled.div`
	color: gray;
`;

const CardImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	:hover{
		cursor: pointer;
		opacity:0.9 ;
	}
`;
