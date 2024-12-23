
 
//   

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }


// import React from 'react';
// import { useState } from 'react';
// function Test() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   const buttonStyle = {
//     backgroundColor: count % 2 === 0 ? 'green' : 'red' ,
//     color: 'white',
//     padding: '10px 20px',
    
//     border: 'none',
//     borderRadius: '9px',
  
//   };
//   return (
//     <button style={buttonStyle} onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }

// export default Test; // Export matches the corrected name


// import { useState } from 'react';

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//       <thisis_functi />
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Clicked {count} times
//     </button>
//   );
// }



function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      
    </section>
  );
}


