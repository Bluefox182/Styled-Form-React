import { GlobalStyles } from "./GlobalStyles.style";
import { AppContainer } from "./Components/AppContainer";
import Navbar from "./Components/Navbar";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Navbar />
      <ContactUs />
    </AppContainer>
  );
}

export default App;
