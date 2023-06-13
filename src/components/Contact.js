import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13462.096449635505!2d75.16228157562212!3d32
            .48541819912317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39
            1c173fd3a1eccd%3A0xe5751e86398b6858!2sRajpura%20184145!5e0!3m2!1sen!2sin!4v1686667426243!5m2!1sen!2sin" 
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
