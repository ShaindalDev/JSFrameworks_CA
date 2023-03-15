import { ThemeProvider } from "styled-components";

const smooth = {
  color: {
    bgColorPrimary: '#222f3e',
    bgColorBody: '#425782',
    darkBgBody: "#323030e0",
    highlight: "#c8d6e5",
    support: "#8395a7",
    neutral: "#fff",
    buttonText: "#030404",
    buttonBackground: "#d8d8d8",
    productCardBg: "#43474c",


  },
  break: {
    medium: "900px",
    small: "550px",
  },
  border: {
    thickness: "1px",
    type: "solid",
    borderRadius: 3,
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={smooth}>{children}</ThemeProvider>
);

export default Theme;
