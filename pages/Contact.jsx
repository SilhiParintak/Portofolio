import { FaInstagram, FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact</h2>
      <p>Email: silhimaritaparintak@gmail.com</p>

      <div className="social-icons">
        <a href="https://instagram.com">
          <FaInstagram />
        </a>

        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Contact;