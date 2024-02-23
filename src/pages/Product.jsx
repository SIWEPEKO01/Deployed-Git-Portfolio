import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import { FaDiscord, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import Font Awesome icons
import './Product.css';

const StyledContactForm = styled.div`
  /* Add your CSS styles for the contact form */
`;

const Contact = () => {
    const form = useRef();
    const recaptchaRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const recaptchaValue = recaptchaRef.current.getValue();
        if (!recaptchaValue) {
            console.log("Please complete the reCAPTCHA");
            return;
        }

        emailjs
        .sendForm(
            "service_c1gpu6e",
            "template_fwi34jl",
            form.current,
            "38NeyPb8wL8aNn-zO"
        )
        .then(
            (result) => {
                console.log(result.text);
                console.log("message sent");
                // Clear the form
                form.current.reset();
                // Show alert
                alert("Message sent successfully!");
            },
            (error) => {
                console.log(error.text);
                alert("Failed to send message. Please try again later.");
            }
        );
    };

    return (
        <div className='myContact'>
            <StyledContactForm>
                <div className="section_container">
                    <div className="Contact_section">
                        <div className="Contact_head">
                            <h2>Contact <span>me</span></h2>
                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <ReCAPTCHA
                        sitekey="6Ld7wnopAAAAALXHBqihS1Q9-zQD93PHHjCRkKUC"
                        ref={recaptchaRef}
                        onChange={(value) => console.log("reCAPTCHA value:", value)}
                    />
                    <button className="send-button" type="submit">
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        <span>Send</span>
                    </button>
                </form>
            </StyledContactForm>
           
        </div>
    );
};

export default Contact;
