import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left-side">
        <h4>Contact Us</h4>
        <p>123 Main Street</p>
        <p>Mohali, India</p>
        <p>Email: contact@example.com</p>
        <p>Phone: +91 6423914593</p>
      </div>
      <div className="footer-middle">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-right-side">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://facebook.com" className="facebook">Facebook</a>
          <a href="https://twitter.com" className="twitter">Twitter</a>
          <a href="https://instagram.com" className="instagram">Instagram</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
