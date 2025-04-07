// // import React, { useState } from 'react';
// // import { Eye, Loader2, XCircle } from 'lucide-react';

// // function App() {
// //   const [username, setUsername] = useState('');
// //   const [error, setError] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [showErrorPopup, setShowErrorPopup] = useState(false);

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     setError('');
// //     setShowErrorPopup(false);
    
// //     try {
// //       const response = await fetch('https://tesseract-backend-jabm.onrender.com', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ username }),
// //       });

// //       const data = await response.json();

// //       if (data.exists) {
// //         setIsLoading(false);
// //         window.location.href = data.link;
// //       } else {
// //         setError('User not found');
// //         setShowErrorPopup(true);
// //         setIsLoading(false);
// //       }
// //     } catch (err) {
// //       setError('An error occurred. Please try again.');
// //       setShowErrorPopup(true);
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center p-4 relative">
// //       <div className="w-full max-w-md bg-[#141b2d] rounded-lg shadow-xl p-8">
// //         <div className="flex justify-center mb-8">
// //           <div className="bg-[#2563eb] p-3 rounded-lg">
// //             <Eye className="w-8 h-8 text-white" />
// //           </div>
// //         </div>
        
// //         <h1 className="text-4xl font-bold text-center text-[#2563eb] mb-2">
// //           Tesseract-UK
// //         </h1>
        
// //         <p className="text-gray-400 text-center mb-8">
// //           Enter your credentials to access the system
// //         </p>

// //         <form onSubmit={handleSubmit}>
// //           <div className="space-y-4">
// //             <div>
// //               <input
// //                 type="text"
// //                 placeholder="Username"
// //                 value={username}
// //                 onChange={(e) => setUsername(e.target.value)}
// //                 className="w-full px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-lg focus:outline-none focus:border-[#2563eb] text-white"
// //                 required
// //               />
// //             </div>

// //             <button
// //               type="submit"
// //               disabled={isLoading}
// //               className="w-full bg-[#2563eb] text-white py-3 rounded-lg hover:bg-[#1d4ed8] transition duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
// //             >
// //               {isLoading ? (
// //                 <>
// //                   <Loader2 className="w-5 h-5 animate-spin mr-2" />
// //                   Fetching Details...
// //                 </>
// //               ) : (
// //                 'Access System'
// //               )}
// //             </button>
// //           </div>
// //         </form>
// //       </div>

// //       {/* Error Popup */}
// //       {showErrorPopup && (
// //         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
// //           <div className="bg-[#141b2d] rounded-lg p-6 max-w-sm w-full relative animate-fade-in">
// //             <button
// //               onClick={() => setShowErrorPopup(false)}
// //               className="absolute top-2 right-2 text-gray-400 hover:text-white"
// //             >
// //               <XCircle className="w-6 h-6" />
// //             </button>
// //             <div className="flex flex-col items-center">
// //               <XCircle className="w-16 h-16 text-red-500 mb-4" />
// //               <h3 className="text-xl font-semibold text-white mb-2">Error</h3>
// //               <p className="text-gray-400 text-center">{error}</p>
// //               <button
// //                 onClick={() => setShowErrorPopup(false)}
// //                 className="mt-6 px-6 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition duration-200"
// //               >
// //                 Try Again
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import { Eye, Loader2, XCircle } from 'lucide-react';

// interface ApiResponse {
//   exists: boolean;
//   link: string;
//   message?: string;
// }

// function App() {
//   const [username, setUsername] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [showErrorPopup, setShowErrorPopup] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
//     setShowErrorPopup(false);

//     if (!username.trim()) {
//       setError('Username is required');
//       setShowErrorPopup(true);
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username }),
//       });

//       const data: ApiResponse = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Something went wrong');
//       }

//       if (data.exists) {
//         window.location.href = data.link;
//       } else {
//         setError('User not found');
//         setShowErrorPopup(true);
//       }
//     } catch (err: any) {
//       setError(err.message || 'An error occurred. Please try again.');
//       setShowErrorPopup(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center p-4 relative">
//       <div className="w-full max-w-md bg-[#141b2d] rounded-lg shadow-xl p-8">
//         <div className="flex justify-center mb-8">
//           <div className="bg-[#2563eb] p-3 rounded-lg">
//             <Eye className="w-8 h-8 text-white" />
//           </div>
//         </div>

//         <h1 className="text-4xl font-bold text-center text-[#2563eb] mb-2">
//           Tesseract-UK
//         </h1>

//         <p className="text-gray-400 text-center mb-8">
//           Enter your credentials to access the system
//         </p>

//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <input
//               aria-label="Username input"
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-lg focus:outline-none focus:border-[#2563eb] text-white"
//               required
//             />

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-[#2563eb] text-white py-3 rounded-lg hover:bg-[#1d4ed8] transition duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="w-5 h-5 animate-spin mr-2" />
//                   Fetching Details...
//                 </>
//               ) : (
//                 'Access System'
//               )}
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Error Popup */}
//       {showErrorPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-[#141b2d] rounded-lg p-6 max-w-sm w-full relative animate-fade-in">
//             <button
//               onClick={() => setShowErrorPopup(false)}
//               className="absolute top-2 right-2 text-gray-400 hover:text-white"
//               aria-label="Close error popup"
//             >
//               <XCircle className="w-6 h-6" />
//             </button>
//             <div className="flex flex-col items-center">
//               <XCircle className="w-16 h-16 text-red-500 mb-4" />
//               <h3 className="text-xl font-semibold text-white mb-2">Error</h3>
//               <p className="text-gray-400 text-center">{error}</p>
//               <button
//                 onClick={() => setShowErrorPopup(false)}
//                 className="mt-6 px-6 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition duration-200"
//               >
//                 Try Again
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;






import React, { useState } from 'react';
import { Eye, Loader2, XCircle } from 'lucide-react';

interface ApiResponse {
  exists: boolean;
  link: string;
  message?: string;
}

function App() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setShowErrorPopup(false);

    // Quick empty check
    if (!username.trim()) {
      setError('Username is required');
      setShowErrorPopup(true);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://login-back-api-1.onrender.com/check_user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      if (data.exists) {
        // Optional: Show success message before redirect
        alert("✅ User verified! Redirecting...");
        window.location.href = data.link;
      } else {
        setError('User not found');
        setShowErrorPopup(true);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
      setShowErrorPopup(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] flex items-center justify-center p-4 relative">
      <div className="w-full max-w-md bg-[#141b2d] rounded-lg shadow-xl p-8">
        <div className="flex justify-center mb-8">
          <div className="bg-[#2563eb] p-3 rounded-lg">
            <Eye className="w-8 h-8 text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-[#2563eb] mb-2">
          Tesseract-UK
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Enter your credentials to access the system
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              aria-label="Username input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-[#1f2937] border border-gray-700 rounded-lg focus:outline-none focus:border-[#2563eb] text-white"
              required
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#2563eb] text-white py-3 rounded-lg hover:bg-[#1d4ed8] transition duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Fetching Details...
                </>
              ) : (
                'Access System'
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Error Popup */}
      {showErrorPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#141b2d] rounded-lg p-6 max-w-sm w-full relative animate-fade-in">
            <button
              onClick={() => setShowErrorPopup(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              aria-label="Close error popup"
            >
              <XCircle className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center">
              <XCircle className="w-16 h-16 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Error</h3>
              <p className="text-gray-400 text-center">{error}</p>
              <button
                onClick={() => setShowErrorPopup(false)}
                className="mt-6 px-6 py-2 bg-[#2563eb] text-white rounded-lg hover:bg-[#1d4ed8] transition duration-200"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
