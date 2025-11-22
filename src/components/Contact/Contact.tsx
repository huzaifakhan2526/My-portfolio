import { Container } from "./styles";
import { MdEmail, MdPhone } from "react-icons/md";
// import { Form } from "../Form/Form";


export function Contact() {

  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:huzaifaattari9272@gmail.com"><MdEmail size={40} /></a>
          <a href="mailto:huzaifaattari9272@gmail.com">huzaifaattari9272@gmail.com</a>
        </div>
        <div>
          <a href="tel:+917007174034"><MdPhone size={40} /></a>
          <a href="tel:+917007174034">(+91) 7007174034</a>
        </div>
      </div>
      {/* <Form></Form> */}
    </Container>
  )
}