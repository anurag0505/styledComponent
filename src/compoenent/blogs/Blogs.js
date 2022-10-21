import React from "react";
import styled from "styled-components";
import Card1 from "../../Images/card1.jpg";
import Card2 from "../../Images/card2.jpg";
import Card3 from "../../Images/card3.png";
const Blogs = () => {
	return (
		<Container>
			<Wrapper>
				<Card>
					<Image src={Card1} />
					<Title>Title</Title>
					<Discription>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Debitis rerum harum saepe dolores velit sed dolorum ab
						repellendus temporibus omnis, quos, nostrum
						exercitationem suscipit vitae commodi animi molestiae
						voluptatem quae!
					</Discription>
				</Card>
				<Card>
					<Image src={Card2} />
					<Title>Title</Title>
					<Discription>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Debitis rerum harum saepe dolores velit sed dolorum ab
						repellendus temporibus omnis, quos, nostrum
						exercitationem suscipit vitae commodi animi molestiae
						voluptatem quae!
					</Discription>
				</Card>
				<Card>
					<Image src={Card3} />
					<Title>Title</Title>
					<Discription>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Debitis rerum harum saepe dolores velit sed dolorum ab
						repellendus temporibus omnis, quos, nostrum
						exercitationem suscipit vitae commodi animi molestiae
						voluptatem quae!
					</Discription>
				</Card>
			</Wrapper>
		</Container>
	);
};

export default Blogs;

const Container = styled.div`
	display: flex;
	margin: 5%;
`;

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
`;

const Card = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 350px;
	width: 250px;
	background-color: white;
	margin-left: 25px;
	-webkit-box-shadow: 0px -1px 15px -5px #dad0d0;
	box-shadow: 0px -1px 15px -5px #a8a4a4;
	margin:10px;
`;

const Image = styled.img`
	height: 60%;
	width: 100%;
	object-fit: cover;
`;
const Title = styled.div`
	font-size: 20px;
	font-weight: bold;
	color: darkblue;
`;

const Discription = styled.div`
	font-size: 15px;
	font-weight: small;
	color: gray;
	padding: 2px;
`;
