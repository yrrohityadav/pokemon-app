// // components/Portfolio.jsx
// import { Link } from 'react-router-dom';
// import pic from '../assets/profile.jpg';

// const Portfolio = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
//         <div className="flex flex-col md:flex-row items-start gap-8">
//           {/* Profile Image Section */}
//           <div className="w-full md:w-1/3">
//             <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4">
//               <img
//                 src={pic}
//                 alt="Profile"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>
//             <div className="text-center">
//               <h1 className="text-2xl font-bold mb-2">Rohit Yadav</h1>
//               <p className="text-gray-600 mb-1">rohityadav22348@aitpune.edu.in</p>
//               <a
//                 href="https://github.com/yrrohityadav"
//                 className="text-blue-600 hover:underline mb-1 block"
//               >
//                 GitHub
//               </a>
//               <p className="text-gray-600">+91 7903697273</p>
//             </div>
//           </div>

//           {/* Main Content Section */}
//           <div className="w-full md:w-2/3">
//             {/* Education */}
//             <section className="mb-6">
//               <h2 className="text-xl font-bold mb-3 text-gray-800 border-b pb-2">
//                 Education
//               </h2>
//               <div className="mb-3">
//                 <p className="font-semibold">Army Institute of Technology, Pune</p>
//                 <p className="text-gray-600">Bachelor of Engineering | 2022-2026</p>
//               </div>
//               <div>
//                 <p className="font-semibold">Army Public School, Chandimandir</p>
//                 <p className="text-gray-600">CBSE | 8.9 CGPA | 2019-2021</p>
//               </div>
//             </section>

//             {/* Experience */}
//             <section className="mb-6">
//               <h2 className="text-xl font-bold mb-3 text-gray-800 border-b pb-2">
//                 Experience
//               </h2>
//               <div className="space-y-4">
//                 <div>
//                   <p className="font-semibold">Website Contributor, AITMUN</p>
//                   <ul className="list-disc ml-5 text-gray-600">
//                     <li>Developed responsive website using React.js and Tailwind CSS</li>
//                     <li>Integrated MongoDB and Express for backend operations</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <p className="font-semibold">Joint Secretary, DDQ Club</p>
//                   <ul className="list-disc ml-5 text-gray-600">
//                     <li>Organized first MUN event at college</li>
//                     <li>Led volunteer team for debate and quiz events</li>
//                   </ul>
//                 </div>
//               </div>
//             </section>

//             {/* Projects */}
//             <section className="mb-6">
//               <h2 className="text-xl font-bold mb-3 text-gray-800 border-b pb-2">
//                 Notable Projects
//               </h2>
//               <div className="space-y-3">
//                 <div>
//                   <p className="font-semibold">AI Chatbot with Gemini API</p>
//                   <p className="text-gray-600">
//                     React.js, Tailwind CSS, Gemini API integration
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-semibold">Spotify Clone (MERN Stack)</p>
//                   <p className="text-gray-600">
//                     Full-stack application with music streaming capabilities
//                   </p>
//                 </div>
//                 <div>
//                   <p className="font-semibold">Prescripto - Doctor Appointment System</p>
//                   <p className="text-gray-600">
//                     MERN stack with authentication and appointment management
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Skills */}
//             <section>
//               <h2 className="text-xl font-bold mb-3 text-gray-800 border-b pb-2">
//                 Skills
//               </h2>
//               <div className="flex flex-wrap gap-2">
//                 {[
//                   'Scala',
//                   'Python',
//                   'JavaScript',
//                   'C++',
//                   'MERN Stack',
//                   'Tailwind CSS',
//                   'Firebase',
//                   'Machine Learning',
//                 ].map((skill) => (
//                   <span
//                     key={skill}
//                     className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


// components/Portfolio.jsx
import { Link } from 'react-router-dom';
import pic from '../assets/profile.jpg';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Profile Image Section */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-200 w-48 h-48 rounded-full mx-auto mb-4">
              <img
                src={pic}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2">Rohit Yadav</h1>
              <p className="text-gray-600 mb-1">rohityadav22348@aitpune.edu.in</p>
              <a
                href="https://github.com/yrrohityadav"
                className="text-blue-600 hover:underline mb-1 block"
              >
                GitHub
              </a>
              <p className="text-gray-600">+91 7903697273</p>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="w-full md:w-2/3">
            {/* Education */}
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-3 text-gray-800 border-b pb-2">
                Education
              </h2>
              <div className="mb-3">
                <p className="font-semibold">Army Institute of Technology, Pune</p>
                <p className="text-gray-600">Bachelor of Engineering | 2022-2026</p>
              </div>
              <div>
                <p className="font-semibold">Army Public School, Chandimandir</p>
                <p className="text-gray-600">CBSE | 8.9 CGPA | 2019-2021</p>
              </div>
            </section>

            {/* Experience */}
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-3 text-gray-800 border-b pb-2">
                Experience
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">Website Contributor, AITMUN</p>
                  <ul className="list-disc ml-5 text-gray-600">
                    <li>Developed responsive website using React.js and Tailwind CSS</li>
                    <li>Integrated MongoDB and Express for backend operations</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Joint Secretary, DDQ Club</p>
                  <ul className="list-disc ml-5 text-gray-600">
                    <li>Organized first MUN event at college</li>
                    <li>Led volunteer team for debate and quiz events</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section className="mb-6">
              <h2 className="text-xl font-bold mb-3 text-gray-800 border-b pb-2">
                Notable Projects
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">AI Chatbot with Gemini API</p>
                  <p className="text-gray-600">
                    React.js, Tailwind CSS, Gemini API integration
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Spotify Clone (MERN Stack)</p>
                  <p className="text-gray-600">
                    Full-stack application with music streaming capabilities
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Prescripto - Doctor Appointment System</p>
                  <p className="text-gray-600">
                    MERN stack with authentication and appointment management
                  </p>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-xl font-bold mb-3 text-gray-800 border-b pb-2">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'Scala',
                  'Python',
                  'JavaScript',
                  'C++',
                  'MERN Stack',
                  'Tailwind CSS',
                  'Firebase',
                  'Machine Learning',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
  
