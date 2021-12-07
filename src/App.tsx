// USING GLOBAL STYLES
import { ThemeProvider } from 'styled-components';
import { COLORS } from 'constants/globalStyles';
import likedSongs from 'assets/icons/search.svg';

const App = () => {
  return (
    <ThemeProvider theme={COLORS}>
      <h1>Hello mate</h1>
      <img src={likedSongs} alt="songs" />
    </ThemeProvider>
  );
}

export default App;
