const Footer =  () => {
    return  <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Kasthuri Metals<span>.</span></h1>
        <p className="footer__description">
          Your Trusted Partner in Steel Construction.
        </p>

        <div className="footer__content grid">
          <div className="footer__data">
            <h2 className="footer__subtitle">Address</h2>
            <p className="footer__information">
              No 33/7A Main Road,  Matara <br />
              Sri Lanka
            </p>
          
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Contact</h2>
            <p className="footer__information">
              +94 740990879   |  +94 711834328 <br />
              KasthuriMetals99@gmail.com
            </p>
          </div>
          <div className="footer__data">
            <h2 className="footer__subtitle">Office</h2>
            <p className="footer__information">
              Weekdays:  <br />
              9 AM - 5:30 PM
             
            </p> 
            </div> 

             {/* <a href="https://www.google.com/maps/dir/6.9302924,79.8632827/357+Kandy+Rd,+Peliyagoda+11300/@6.9499247,79.8471677,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ae2581bc2d37227:0x22699eef6942b574!2m2!1d79.9121432!2d6.9690497?entry=ttu" target="_blank"  className ="footer__information">
                View on Map  <br/>
              </a> */}
              <br/>
              <div  className= "footer__information">
                <iframe
                  title=" Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://https://www.google.com/maps/place/Paravi+Duwa+Bridge+%7C+%E0%B6%B4%E0%B6%BB%E0%B7%99%E0%B7%80%E0%B7%92+%E0%B6%AF%E0%B7%96%E0%B7%80+%E0%B6%B4%E0%B7%8F%E0%B6%BD%E0%B6%B8+%7C+%E0%AE%AE%E0%AE%BE%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%B1%E0%AF%88+%E0%AE%AA%E0%AF%81%E0%AE%B1%E0%AE%BE%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AF%80%E0%AE%B5%E0%AF%81+%E0%AE%AA%E0%AE%BE%E0%AE%B2%E0%AE%AE%E0%AF%8D/@5.9425057,80.5467874,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae139636b0bd5e1:0x1460b8728318681a!8m2!3d5.9425057!4d80.5493623!16s%2Fg%2F11rtnbn94s?entry=ttu"
                  allowFullScreen
                ></iframe>
              </div>

            <div className="footer__data">
            <p className="footer__newsletter-description">
              Send us a messsage
            </p>

            <div className="footer__newsletter">
              <input
                type="email"
                placeholder="Your email address"
                className="footer__input"
              />
              <button className="footer__button">
                <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
        </div>
         

        <div className="footer__group">
          <ul className="footer__social">
            <a href="https://www.linkedin.com/in/jayesh-jeewantha-kasthuri-arachchi-b43308280/"  target="_blank" rel="noreferrer"className="footer__social-link">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href=""  target="_blank" rel="noreferrer" className="footer__social-link">
              <i className="bx bxl-instagram"></i>
            </a>
           
          </ul>

          <span className="footer__copy"> &#169; Kasthuri Metals. All rights reserved   Devloper  By JJDK</span>
        </div>
      </div>
    </footer>
} 

export default Footer;
