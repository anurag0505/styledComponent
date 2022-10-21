import React from "react";
import TextBanner from "../TextBanner/TextBanner";
import styled from "styled-components";
import {
	Button,
	Card,
	CardContent,
	CardTitle,
	Discription,
} from "../Styles/StyledCard";

const Infobox = () => {
	return (
		<div>
			<TextBanner title=" What we Provide" subtitle="Our Services" />
			<Container>
				<Card>
					<CardContent>
						<CardTitle>Training Course</CardTitle>
						<Discription>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quae, itaque id error dolor, culpa saepe
							facilis tenetur voluptate nemo natus incidunt
							exercitationem neque voluptatum doloremque. Odit
							nisi modi eveniet. Quia!
						</Discription>
						<Button>Read More...</Button>
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						<CardTitle>Service Desk</CardTitle>
						<Discription>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quae, itaque id error dolor, culpa saepe
							facilis tenetur voluptate nemo natus incidunt
							exercitationem neque voluptatum doloremque. Odit
							nisi modi eveniet. Quia!
						</Discription>
						<Button>Read More...</Button>
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						<CardTitle>Medthodology</CardTitle>
						<Discription>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quae, itaque id error dolor, culpa saepe
							facilis tenetur voluptate nemo natus incidunt
							exercitationem neque voluptatum doloremque. Odit
							nisi modi eveniet. Quia!
						</Discription>
						<Button>Read More...</Button>
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						<CardTitle>User Support</CardTitle>
						<Discription>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quae, itaque id error dolor, culpa saepe
							facilis tenetur voluptate nemo natus incidunt
							exercitationem neque voluptatum doloremque. Odit
							nisi modi eveniet. Quia!
						</Discription>
						<Button>Read More...</Button>
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						<CardTitle>Data Recovery</CardTitle>
						<Discription>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quae, itaque id error dolor, culpa saepe
							facilis tenetur voluptate nemo natus incidunt
							exercitationem neque voluptatum doloremque. Odit
							nisi modi eveniet. Quia!
						</Discription>
						<Button>Read More...</Button>
					</CardContent>
				</Card>
				<Card>
					<CardContent>
						<CardTitle>24/7 Support</CardTitle>
						<Discription>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quae, itaque id error dolor, culpa saepe
							facilis tenetur voluptate nemo natus incidunt
							exercitationem neque voluptatum doloremque. Odit
							nisi modi eveniet. Quia!
						</Discription>
						<Button>Read More...</Button>
					</CardContent>
				</Card>
			</Container>
		</div>
	);
};

export default Infobox;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;
