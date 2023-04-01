import { ContactPageStyled } from "./styles";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <ContactPageStyled>
      <h1 align="center">Contact us</h1>
      <ContactForm />
    </ContactPageStyled>
  );
}
