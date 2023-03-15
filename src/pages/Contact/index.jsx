import { StyledContactPage } from "./styles";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <StyledContactPage>
      <h1 align="center">Contact us</h1>
      <ContactForm />
    </StyledContactPage>
  );
}
