import { StyledContactCTA } from "./styles";


export default function ContactCTAButton({ onClick, text }) {
    return <StyledContactCTA onClick={onClick}>{text}</StyledContactCTA>;
  }
  