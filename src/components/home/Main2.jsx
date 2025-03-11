import about from '../../assets/about.jpeg';



function Main2() {

  return (
    <div className=' pb-5 bg-gradient-to-br from-indigo-800 to-gray-800'>
      <div className='container'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:text-light mt-5 flex flex-col justify-center">
            <span className='text-info'>You need to know..</span>
            <h1 className='font-bold text-3xl lg:text-5xl mb-4 text-white'>About DPS</h1>
            <p className='text-white text-lg lg:text-xl'>
              
            New DPS School in Palwal was founded with the vision to ensure that every student will get a quality education all New DPS School have 25-year experience in the education field, and the school reputation is well known in the city of Palwal.
            At DPS, we focus on the development of a person who is multi-faceted, loaded with wide interests adorned with physical and spiritual fitness.<br/><br/>

           We believe &ldquo;Quality Education for all&rdquo; as we know that institutes progress when they strive for excellence and people progress. when they strive for best.<br/>
          DPS School at Palwal the pioneer is brain childed by visionary Mr. Inderjeet Tanwar ji in the year 1993 with clear vision &quot;Quality Education for all&quot; DPS School Considered a disciplined hone of schooling. The Institution in the Southeast part of Haryana.
            </p>
          </div>
          <div className="lg:mt-0 mt-5 flex justify-center items-center">
            <a href="https://www.wolverhampton.gov.uk/sites/default/files/2023-01/Job%20ref%203-2023%20SDP%20-%20Recruitment%20brochure.pdf" download="broucher.pdf">
              <img src={about} className='lg:w-full rounded-lg' alt="Brochure" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
