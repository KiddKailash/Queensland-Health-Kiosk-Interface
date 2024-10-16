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
          height: '48px', // Button height as per guidelines
          borderRadius: '8px', // Rounded corners
          textTransform: 'none', // Disable uppercase text
          fontWeight: 700, // Consistent button font weight
          fontSize: '1rem',
          padding: '0 16px', // Padding inside buttons for better touch target
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
          '&:hover': {
            backgroundColor: '#E6B800', // Darker on hover
          },
        },
      },
    },
    // Add the MuiSelect overrides to fix the dropdown issue
    MuiSelect: {
      styleOverrides: {
        root: {
          '&:focus': {
            backgroundColor: 'transparent', // Removes the highlight/focus color
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#09549F', // Ensure the border color is consistent with the primary theme
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#09549F',
          },
        },
        notchedOutline: {
          borderColor: '#09549F', // Primary color for dropdown border
        },
      },
    },
  },
});

export default theme;
