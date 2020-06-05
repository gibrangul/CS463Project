import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#fd5f00'},
    secondary: {main: '#252646'},
    text: { primary: '#505050', secondary: '#252646'}
  },
  status: {
    danger: '#ff5f5f',
  },
  typography: {
    fontFamily: 'Segoe UI',
    button: {
      textTransform: "none"
    }

  }
});

export default theme;