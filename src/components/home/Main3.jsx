import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
import bg5 from '../../assets/bg5.jpeg';
import group from '../../assets/group.jpeg';
import '../../App.css'

function Main3() {
    return (
        <div className="parallax-container">
            <div
                className="parallax-bg mt-[40%] d-flex justify-content-center align-items-center bg-center bg-no-repeat zoom-on-hover"
                style={{
                    backgroundImage: `url(${bg5})`,
                }}
            ></div>
            <div className="container-fluid bg-dark position-absolute text-light d-flex justify-content-center align-items-center h-100 w-100 bg-opacity-25 ">
                <div className='container'>
                    <div className='w-100 h-100 grid grid-cols-1 lg:grid-cols-2'>
                        <div className="flex flex-col justify-center">
                            <h1 className='fw-bold text-2xl lg:text-4xl mb-4'>New DPS School</h1>
                            <p className='text-lg lg:text-2xl'>
                                New DPS School offers a rich and diverse educational experience that goes beyond the classroom. Our campus is designed to support a wide range of activities and interests, ensuring that every student has the opportunity to explore and excel.
                            </p>
                            <span>
                                <Link to="/college" className='btn shadow-lg mt-5 fw-bold rounded-l-full rounded-r-full btn-primary'>
                                    Go Explore <ArrowRightAltIcon />
                                </Link>
                            </span>
                        </div>
                        <div className="hidden lg:flex justify-center">
                            <img src={group} alt="" className='shadow-lg rounded-4 w-[700px] h-[400px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main3;