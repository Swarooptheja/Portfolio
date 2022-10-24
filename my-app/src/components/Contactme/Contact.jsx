import React from 'react';
import "./Contact.css"
import { useRef } from 'react';
// import emailjs from "emailjs"
import emailjs from "emailjs-com"
import  {AiOutlineMail,AiFillLinkedin,AiOutlineWhatsApp} from "react-icons/ai"
// function Contact(props) {
const Contact = () => {
        const form = useRef();
        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_vcvwqhr', 'template_8ce9x8f', form.current, 'WcfXvZ8DA3_-bAzWO')
              e.target.reset()
          };
      
        // const sendEmail = (e) => {
        //   e.preventDefault();
      
        //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
           
        // };
    return (
        <section id='Contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me!</h2>
            <div className='container contact_container'>
                <div className="contact_options">
                    <article className='contact_option'>
                        <AiOutlineMail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>swarooptheja809@gmail.com</h5>
                        <a  style={{textDecoration:"none"}} href="mailto:swarooptheja809@gmail.com" target="_blank"> Send Message</a>
                        

                    </article>
                    <article className='contact_option'>
                        <AiFillLinkedin className='contact_option-icon'/>
                        <h4>Linkdin</h4>
                        <h5>Theja Swaroop</h5>
                        <a  style={{textDecoration:"none"}} target="_blank" href="https://www.linkedin.com/in/theja-swaroop-10a1a9197/"> Send Message</a>
                        

                    </article>
                    <article className='contact_option'>
                        <AiOutlineWhatsApp className='contact_option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>7095453630</h5>
                        <a  style={{textDecoration:"none"}} target="_blank" href="https://api.whatapp.com/send?phone=+917095453630"> Send Message</a>
                        

                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text"  name="name" placeholder='Your full name' required/>
                    <input type="email" name='email' placeholder='Your Email here' required />
                    <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;