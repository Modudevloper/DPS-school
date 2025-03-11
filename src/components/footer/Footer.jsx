
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          
        </div>
        <div className=''>
          
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">New DPS School</h6>
              <p>
                Address: <br />
                Village Deeghot, <br />
                Selothi Road, <br />
                121105.
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
              <p>
                Email: ndpsdeeghotpalwal@gmail.com
              </p>
              <h6 className="text-uppercase fw-bold mb-3 mt-3">Follow Us</h6>
              <a href="https://www.instagram.com/newdpsdeeghot?igsh=dm1zZjFvbXdoeTk5&utm_source=qr" target='_blank' className='text-3xl text-pink-700'>
                <InstagramIcon />
              </a>
              <a href="" target='_blank' className='text-3xl text-blue-500 ml-3'>
                <TwitterIcon />
              </a>
              <a href="https://www.facebook.com/share/15TCnz55jc/?mibextid=wwXIfr" target='_blank' className='text-3xl text-blue-700 ml-3'>
                <FacebookIcon />
              </a>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Support</h6>
              <div className='flex flex-col gap-3'>
                <p>
                <p className='text-font fw-bold'>Director</p>
                  Name: Mr. Inderjeet Tanwar<br />
                  Phone: +91 8708188737 <br />
                  <p className='text-font fw-bold'>Chairman</p>
                  Name: Mr. Sunil Adhana<br />
                  Phone: +91 9350843379
                  <p className='text-font fw-bold'>Principal</p>
                  Name: Mrs. Sheela Bainsla  <br />
                  Phone: +91 8708517363

                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2025 New DPS School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
