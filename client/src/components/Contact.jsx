function Contact() {

return(

<section id="contact" className="contact">

<div className="container">

<h2 className="section-title">

Contact Me

</h2>

<form className="contact-form">

<input

type="text"

placeholder="Your Name"

/>

<input

type="email"

placeholder="Email Address"

/>

<textarea

rows="6"

placeholder="Message"

/>

<button>

Send Message

</button>

</form>

</div>

</section>

)

}

export default Contact;