import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/an-oops"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — an-oops
              </a>
            </p>
            <p>
              <a
                href="mailto:an.oops@hotmail.com"
                data-cursor="disable"
              >
                Email — an.oops@hotmail.com
              </a>
            </p>
            <h4>Focus Areas</h4>
            <p>
              AI Agent Workflows, n8n Automation Systems, RAG Pipelines, FastAPI Backends
            </p>
            <p>
              Gurugram, Haryana, India · Delhi NCR · Remote
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Anoopshukla-AI"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/an-oops"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Customized and Developed <br /> by <span>Anoop Shukla</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
