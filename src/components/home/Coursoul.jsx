import bg1 from '../../assets/bg1.jpeg';
import bg2 from '../../assets/bg2.jpeg';
import bg4 from '../../assets/bg4.jpeg';
import '../../App.css'; // Import the custom CSS file for the animation

function Coursoul() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-inner relative w-full overflow-hidden mt-[5%]">
        <div className="carousel-item active relative float-left w-full" style={{ backgroundImage: `url(${bg4})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-xl lg:text-5xl text-center font-bold flex flex-col lg:flex-row text-white slide-in-top'>
                  <span>New DPS School</span>
                </h1>
                <h4 className='lg:text-xl text-xl text-white mt-3 font-bold'>Palwal</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full" style={{ backgroundImage: `url(${bg2})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-xl lg:text-5xl text-center font-bold flex flex-col lg:flex-row text-white slide-in-top'>
                  <span>New DPS School</span>
                </h1>
                <h4 className='lg:text-xl text-xl text-white mt-3 font-bold'>Palwal</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full" style={{ backgroundImage: `url(${bg1})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='h-[25rem] lg:h-[40rem]'>
            <div className='bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center'>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-xl lg:text-5xl text-center font-bold flex flex-col lg:flex-row text-white slide-in-top'>
                  <span>New DPS School</span>
                </h1>
                <h4 className='lg:text-xl text-xl text-white mt-3 font-bold'>Palwal</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 hidden lg:block" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 hidden lg:block" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Coursoul;
