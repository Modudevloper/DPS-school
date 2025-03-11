import bg1 from '../assets/bg1.jpeg';
import { AccessTime, LocationOn, GetApp } from '@mui/icons-material';

function Contact() {
 

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen mt-[9%]">
            
            <div className='relative h-[90vh] bg-cover bg-center' style={{ backgroundImage: `url(${bg1})`}}>
                
            </div>

          
            <div className="container mx-auto py-20 px-6">
                <h2 className="text-5xl font-extrabold mb-16 text-center text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Get In Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
                        <AccessTime className="text-5xl text-blue-500 mb-6 mx-auto " style={{fontSize:"3rem"}} />
                        <h3 className="text-2xl font-semibold mb-4 text-center text-blue-800">Office Hours</h3>
                        <p className="text-gray-600 text-center">Monday - Friday: 8:00 AM - 3:00 PM</p>
                        <p className="text-gray-600 text-center">Saturday: 8:00 AM - 1:00 PM</p>
                        <p className="text-gray-600 text-center">Sunday: Closed</p>
                    </div>
                    <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
                        <LocationOn className="text-5xl text-blue-500 mb-6 mx-auto" style={{fontSize:"3rem"}}/>
                        <h3 className="text-2xl font-semibold mb-4 text-center text-blue-800">Visit Us</h3>
                        <p className="text-gray-600 text-center"> Address: <br />
                Village Deeghot, 
                Selothi Road,
                121105.</p>
                    </div>
                </div>
            </div>


            <div className="bg-blue-50 py-20 px-6">
                <div className="container mx-auto">
                    <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Admission Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Admission Process</h3>
                            <p className="text-gray-600 mb-6">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
                            <a href="https://i.pinimg.com/474x/88/6c/72/886c729c5e6310e29e269031d73a5625.jpg" target="_blank" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full hover:from-blue-600 hover:to-teal-500 transition duration-300 transform hover:scale-105">
                                <GetApp className="mr-2" />
                                Download Admission Form
                            </a>
                        </div>
                        <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Criteria</h3>
                            <p className="text-gray-600">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
                        </div>
                        <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-4 text-blue-800">Important Dates</h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>Admission Form Availability: March 1st</li>
                                <li>Last Date for Submission: March 31st</li>
                                <li>Entrance Test: April 15th</li>
                                <li>Announcement of Results: April 30th</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="container mx-auto py-20 px-6">
            <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Find Us On The Map</h2>
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.707023258996!2d77.37340291500232!3d28.04564288259679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef0b83e908b7%3A0x8176f5bc38729841!2sNew%20dps%20school%20deeghot%20palwal!5e0!3m2!1sen!2sin!4v1699670234253!5m2!1sen!2sin"
                    frameBorder="0"
                    className="w-full h-[500px] border-0"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
        </div>
    );
}

export default Contact;