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
    discountBgColor: "#B10000",
    dividerColorRight: "linear-gradient(to right, rgba(226,227,228,1), rgba(172,182,200,1))",
    dividerColorLeft: "linear-gradient(to left, rgba(226,227,228,1), rgba(172,182,200,1))",
    //Button color and gradients
    contactCTA: "linear-gradient(to top, rgba(0,102,2,1), rgba(102,240,10,1))",
    primaryCTA: "green",
    secondButtonBG: "red",
    dropShadow: "#000",
    gradientActive2: "rgba(37,117,252,0.5)",
    gradientHover: "linear-gradient(to left, rgba(48,207,208,0.4), rgba(51,8,103,0.4))",
    //Body, Header and Footer background gradient
    bodyGradient: "linear-gradient(to left, rgba(106,133,182,1), rgba(186,200,224,1))",
    headerGradient: "linear-gradient(to right, rgba(106,133,182,0.5), rgba(186,200,224,0.7))"
    

  },
  break: {
    medium: "900px",
    small: "550px",
  },
  border: {
    thickness: "1px",
    thicknessDivider: "3px",
    type: "solid",
    borderRadius: 3,
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={smooth}>{children}</ThemeProvider>
);

export default Theme;
