import styled from "styled-components";
//import SectionOneImage from "../../Images/section1.png";

export const Container = styled.div`
	margin-top: 5%;
	padding: 10px 20px;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: ${({direction})=>direction};
	margin: 0% 8% 0% 5%;
`;
export const Header = styled.div`
	font-size: 40px;
	font-weight: bold;
	color: darkblue;
`;

export const Subtitle = styled.div`
	color: tomato;
	font-weight: bold;
`;

export const Text = styled.p`
	color: gray;
`;

export const Right = styled.div`
	width: 40%;
	justify-content: center;
	align-items: center;

	margin-top: 5%;
`;
export const Left = styled.div`
	width: 60%;
	margin: 0px 130px;
`;

export const Image = styled.img`
	width: 100%;
`;

export const List = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	list-style: none;
	flex-wrap: wrap;
`;

export const ListItems = styled.li`
	min-width: 200px;
	font-weight: bold;
	padding: 20px 20px;
	text-align: left;
	color: darkblue;
	margin: 5px;

	border-left: 2px solid darkblue;
	box-shadow: 10px -17px 6px -6px rgba(151, 168, 181, 0.75);
	-webkit-box-shadow: 10px -17px 6px -6px rgba(151, 168, 181, 0.75);
	-moz-box-shadow: 10px -17px 6px -6px rgba(151, 168, 181, 0.75);
	:hover {
		min-width: 205px;

		background-color: aliceblue;
	}
`;
