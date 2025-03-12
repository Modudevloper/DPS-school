import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { YouTube } from "@mui/icons-material";

function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Address Section */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">New DPS School</h6>
              <p>
                Address: <br />
                Village Deeghot, <br />
                Selothi Road, <br />
                121105.
              </p>
            </div>

            {/* Contact & Social Media Section */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
              <p>Email: ndpsdeeghotpalwal@gmail.com</p>
              <h6 className="text-uppercase fw-bold mb-3 mt-3">Follow Us</h6>

              {/* Responsive Social Icons */}
              <div className="flex justify-center md:justify-start gap-4">
                <motion.a
                  href="https://www.instagram.com/newdpsdeeghot?igsh=dm1zZjFvbXdoeTk5&utm_source=qr"
                  target="_blank"
                  className="text-pink-700 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <InstagramIcon fontSize="inherit" />
                </motion.a>
                <motion.a
                  href="https://youtube.com/@newdpsschooldeeghot5347?si=_6rwtGxjNt2ThvYL"
                  target="_blank"
                  className="text-red-500 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <YouTube fontSize="inherit" />
                </motion.a>
                <motion.a
                  href="https://www.facebook.com/share/15TCnz55jc/?mibextid=wwXIfr"
                  target="_blank"
                  className="text-blue-700 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                  whileHover={{ scale: 1.2 }}
                >
                  <FacebookIcon fontSize="inherit" />
                </motion.a>
              </div>
            </div>

            {/* Support Section */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Support</h6>
              <div className="flex flex-col gap-3">
                <p>
                  <span className="text-font fw-bold">Director</span>
                  <br />
                  Name: Mr. Inderjeet Tanwar
                  <br />
                  Phone: +91 8708188737
                  <br />
                  <span className="text-font fw-bold">Chairman</span>
                  <br />
                  Name: Mr. Sunil Adhana
                  <br />
                  Phone: +91 9350843379
                  <br />
                  <span className="text-font fw-bold">Principal</span>
                  <br />
                  Name: Mrs. Sheela Bainsla
                  <br />
                  Phone: +91 8708517363
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2025 New DPS School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
