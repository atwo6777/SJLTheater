import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Contact.css";
import Resume from "../Resume.pdf";

function Contact() {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="contactBody">
      <h2>Contact Me</h2>
      <div id="email">lightningdesign@sjltheater.com</div>
      <div className="flex">
        <div>
          <CopyToClipboard
            text="lightningdesign@sjltheater.com"
            onCopy={() => {
              setIsCopied(true);
            }}
          >
            <button className="contactButton">Copy email</button>
          </CopyToClipboard>
          {isCopied ? (
            <div className="tooltip">lightningdesign@sjltheater.com copied</div>
          ) : null}
        </div>
        <button className="contactButton">
          <a
            className="links"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:lightningdesign@sjltheater.com"
          >
            Email
          </a>
        </button>
        <button className="contactButton">
          <a className="links" href={Resume} download="Resume.pdf">
            Download Resume
          </a>
        </button>
      </div>
      <div className="resume">
        <a className="links" href={Resume} download="Resume.pdf">
          <img alt="resume" src={"images/Resume.png"} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
