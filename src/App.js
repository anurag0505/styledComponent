import styled, { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import Navbar from "./compoenent/Navbar/Navbar";
import Hero from "./compoenent/Hero/Hero";
import Infobox from "./compoenent/InfoBoxes/Infobox";
import InfoSectionOne from "./compoenent/infoSectionOne/InfoSectionOne";
import InfoSectionTwo from "./compoenent/infoSectionTwo.js/InfoSectionTwo";
import InfoSectionThree from "./compoenent/InfoSectionThree/InfoSectionThree";
import Team from "./compoenent/Team/Team";
import InfoSectionFour from "./compoenent/InfoSectionFour.js/InfoSectionFour";
import Blogs from "./compoenent/blogs/Blogs";
import Footer from "./compoenent/footer/Footer";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Container>
				<Navbar />
				<Hero />
				<Infobox />
				<InfoSectionOne />
				<InfoSectionTwo />
				<InfoSectionThree />
				<InfoSectionFour />
				<Team />
				<Blogs />
				<Footer />
			</Container>
		</ThemeProvider>
	);
}

export default App;

const GlobalStyles = createGlobalStyle`
body{
 
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,500&display=swap');
  font-family: 'Open Sans', sans-serif;

}
*{
	margin: 0;
	padding: 0;
}

`;

const Container = styled.div`
	background-color: white;
	height: 100vh;
`;

const theme = {
	colors: {
		primary: "darkblue",
		secondary: "tomato",
		third: "red",
		text: "snow",
		light: "black",
		textDark: "gray",
		bgDefault: "white",
		bgPrimary: "darkblue",
		bgLight: "aliceblue",
	},
};
