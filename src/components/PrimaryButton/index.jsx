import { StyledPrimaryButton } from "./styles";

export default function PrimaryButton({ onClick, text }) {
  return <StyledPrimaryButton onClick={onClick}>{text}</StyledPrimaryButton>;
}
