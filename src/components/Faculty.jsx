
const aboutData = [
  {
    name: "John Doe",
    description: "Principal",
    image:"C:/Users/s1770/OneDrive/Desktop/school-website-Task/src/assets/chairman.jpeg", // Use the imported image
    quote: "Welcome to our school community! We are dedicated to fostering a nurturing environment that promotes academic and personal growth. Join us in making a positive impact.",
  },
  {
    name: "Jane Smith",
    description: "Vice Principal",
    image: "C:/Users/s1770/OneDrive/Desktop/school-website-Task/src/assets/chairman.jpeg",
    quote: "Together, we can achieve greatness. Let’s work hand-in-hand to shape the future and build a thriving school environment.",
  },
  {
    name: "Alice Brown",
    description: "Director",
    image: "C:/Users/s1770/OneDrive/Desktop/school-website-Task/src/assets/chairman.jpeg", // Update with the correct path
    quote: "Leading with vision and dedication to ensure our school thrives and every student reaches their full potential.",
  },
  {
    name: "Robert White",
    description: "Chairman",
    image: "C:/Users/s1770/OneDrive/Desktop/school-website-Task/src/assets/chairman.jpeg", // Update with the correct path
    quote: "Guiding the institution with wisdom and foresight to achieve excellence in education.",
  },
];

function Faculty() {
  const director = aboutData.find(member => member.description === "Director");
  const chairman = aboutData.find(member => member.description === "Chairman");
  const principal = aboutData.find(member => member.description === "Principal");

  return (
    <div className='container mx-auto px-4 py-16 mt-[8%]'>
      <h1 className="text-4xl font-bold text-center mb-16 text-indigo-800">Our Faculty</h1>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {director && (
          <div className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="md:flex flex-col items-center text-center">
              <div className="md:flex-shrink-0 w-full">
                <img className="h-full w-full object-cover" src={director.image} alt={director.name} />
              </div>
              <div className="p-8 w-full">
                <div className="uppercase tracking-wide text-sm text-purple-600 font-semibold">{director.description}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{director.name}</h2>
                <p className="mt-2 text-gray-500">{director.quote}</p>
              </div>
            </div>
          </div>
        )}
        {chairman && (
          <div className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="md:flex flex-col items-center text-center">
              <div className="md:flex-shrink-0 w-full">
                <img className="h-full w-full object-cover" src={chairman.image} alt={chairman.name} />
              </div>
              <div className="p-8 w-full">
                <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">{chairman.description}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{chairman.name}</h2>
                <p className="mt-2 text-gray-500">{chairman.quote}</p>
              </div>
            </div>
          </div>
        )}
        {principal && (
          <div className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="md:flex flex-col items-center text-center">
              <div className="md:flex-shrink-0 w-full">
                <img className="h-full w-full object-cover" src={principal.image} alt={principal.name} />
              </div>
              <div className="p-8 w-full">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">{principal.description}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">{principal.name}</h2>
                <p className="mt-2 text-gray-500">{principal.quote}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Faculty;
