import React from "react";

import SectionOneImage from "../../Images/section1.png";
import {
	Container,
	Header,
	Image,
	Left,
	List,
	ListItems,
	Right,
	Subtitle,
	Text,
	Wrapper,
} from "../Styles/Section";

const InfoSectionOne = () => {
	return (
		<Container>
			<Wrapper direction={"row"}>
				<Right>
					<Image src={SectionOneImage} />
				</Right>

				<Left>
					<Subtitle>Subtititle</Subtitle>
					<Header>Header</Header>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aliquam eos iste harum explicabo natus laborum inventore
						veniam voluptate amet voluptatum, rerum quaerat suscipit
						quisquam architecto, est molestiae necessitatibus.
						Sequi, nemo!
					</Text>
					<List>
						<ListItems>work</ListItems>
						<ListItems>Gaming</ListItems>
						<ListItems>play</ListItems>
						<ListItems>design</ListItems>
						<ListItems>enjoyment</ListItems>
						<ListItems>Work Ethics</ListItems>
					</List>
				</Left>
			</Wrapper>
		</Container>
	);
};

export default InfoSectionOne;
