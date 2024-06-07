import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ChatBot } from '@pages/ChatBot';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Change this to your preferred font family
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChatBot />
    </ThemeProvider>
  );
}

export default App;
