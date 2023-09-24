"use client";

import Wrapper from "@/components/Wrapper";
import "./style.scss";
import { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstagramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e: any) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Format the input and generate a mail template
    const mailTemplate = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    // Open email app (You can implement this part according to your platform)
    window.location.href = `mailto:rejibasilp@gmail.com?subject=All Caps Enquiry&body=${encodeURIComponent(
      mailTemplate
    )}`;
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
  };
  return (
    <Wrapper>
      <section className="contact">
        <div className="follow">
          <div className="vertical-text">Connect</div>
          <div className="social-media">
            <FacebookShareButton url={"http://localhost:3000"}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <InstapaperShareButton url={"http://localhost:3000"}>
              <InstagramIcon size={32} round />
            </InstapaperShareButton>
            <WhatsappShareButton url={"http://localhost:3000"}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={"http://localhost:3000"}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
          </div>
        </div>
        <div className="container">
          <div className="image">
            <div className="form-box">
              <div className="form">
                <h2>Get in Touch</h2>
                <div className="input-box">
                  <input type="text" required onChange={handleNameChange} />
                  <label htmlFor="">Name</label>
                </div>
                <div className="input-box">
                  <input type="text" required onChange={handleEmailChange} />
                  <label htmlFor="">Email</label>
                </div>
                <div className="input-box">
                  <input type="tel" required onChange={handlePhoneChange} />
                  <label htmlFor="">Phone Number</label>
                </div>
                <div className="input-box">
                  <textarea required onChange={handleMessageChange} />
                  <label htmlFor="">Message</label>
                </div>
                <div className="submit-container">
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Contact;
