// import { useState, useEffect, useRef } from 'react';
// import './App.css';
// import { uploadFile } from './service/api';

// function App() {
//   const [file, setFile] = useState('');
//   const [resultavailable, setresultavailable] = useState(false);
//   const [result, setResult] = useState('');

//   const fileInputRef = useRef();

//   const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

//   useEffect(() => {
//     const getImage = async () => {
//       if (file) {
//         const data = new FormData();
//         data.append("name", file.name);
//         data.append("file", file);

//         const response = await uploadFile(data);
        
//         setResult(response.path.replace('undefined', 'file-sharing-app-backend-9kme.onrender.com'));
//         setresultavailable(true);
//       }
//     }
//     getImage();
//   }, [file])

//   const onUploadClick = () => {
//     fileInputRef.current.click();
//   }

//   return (
//     <div className='container'>
//       <img src={url} className='img' alt='av' />
//       <div className='wrapper'>
//         <h1>Simple file sharing!</h1>
//         <p>Upload and share the download link.</p>
        
//         <button onClick={() => onUploadClick()}>Upload</button>
//         <input
//           type="file"
//           ref={fileInputRef}
//           style={{ display: "none" }}
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//         {resultavailable && ( <a href={result} target="_blank" rel="noreferrer">{result}</a>)}
       
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState, useEffect, useRef } from 'react';
import './App.css';
import { uploadFile } from './service/api';

function App() {
  const [file, setFile] = useState('');
  const [resultavailable, setresultavailable] = useState(false);
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        try {
          const response = await uploadFile(data);
          console.log(response); // Log the response to see its structure

          if (response && response.path) {
            const filePath = response.path.replace('undefined', 'file-sharing-app-backend-9kme.onrender.com');
            setResult(filePath);
            setresultavailable(true);
          }
        } catch (error) {
          console.error('Error uploading file:', error);
        }
      }
    }
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      <img src={url} className='img' alt='av' />
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>
        
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        {resultavailable && ( <a href={result} target="_blank" rel="noreferrer">{result}</a>)}
      </div>
    </div>
  );
}

export default App;
