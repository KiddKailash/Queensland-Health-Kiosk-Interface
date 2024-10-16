// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#09549F", // Sapphire Blue
      dark: "#05325F", // Dark Blue
      light: "#0085B3", // Light Blue
    },
    secondary: {
      main: "#FFCC2C", // Golden Yellow
    },
    error: {
      main: "#E22339",
    },
    warning: {
      main: "#FFCC2C",
    },
    success: {
      main: "#339D37",
    },
    info: {
      main: "#0085B3",
    },
    background: {
      default: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: "'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.4,
    },
    caption: {
      fontSize: '0.75rem',
      color: '#595959', // Dark Neutral Color for captions
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Global button styles
          height: '48px', // Button height as per guidelines
          borderRadius: '8px', // Rounded corners
          textTransform: 'none', // Disable uppercase text
          fontWeight: 700, // Consistent button font weight
          fontSize: '1rem',
          padding: '0 16px', // Padding inside buttons for better touch target
          
          // Hover state with underline for accessibility
          '&:hover': {
            textDecoration: 'underline',
          },
          
          // Focus state (global focus outline as per WCAG)
          '&:focus': {
            outline: '2px solid #09549F', // Focus outline
          },
        },
        containedPrimary: {
          backgroundColor: '#09549F', // Primary button color
          '&:hover': {
            backgroundColor: '#05325F', // Darker on hover
          },
        },
        containedSecondary: {
          backgroundColor: '#FFCC2C', // Secondary button color
          borderColor: '#FFCC2C', // Secondary button border
          '&:hover': {
            backgroundColor: '#E6B800', // Darker secondary on hover
          },
        },
        outlined: {
          borderWidth: '2px', // Ensuring outlined buttons have a clear border
          borderColor: '#09549F', // Primary border color for outlined buttons
          '&:hover': {
            textDecoration: 'underline',
            borderColor: '#05325F', // Darker outline on hover
          },
        },
        outlinedSecondary: {
          borderWidth: '2px',
          borderColor: '#FFCC2C',
          '&:hover': {
            borderColor: '#E6B800',
            textDecoration: 'underline',
          },
        },
        iconLead: {
          // Leading icon styles (place icon before text)
          display: 'inline-flex',
          justifyContent: 'flex-start',
          '& i': {
            marginRight: '8px',
          },
        },
        iconTrail: {
          // Trailing icon styles (place icon after text)
          display: 'inline-flex',
          justifyContent: 'flex-start',
          '& i': {
            marginLeft: '8px',
          },
        },
        disabled: {
          color: '#C4C4C4', // Disabled text color
          backgroundColor: '#F0F0F0', // Disabled background color
        },
      },
    },
  },
});

export default theme;
