

// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { onAuthStateChanged } from "firebase/auth";
// import { setUser } from "./Store/Slices/AuthSlice";
// import Routing from './Routing/Routing'
// import { auth } from "./Config/firebase";
// import { Navbar } from "./Components/Navbar/Navbar";
// import { BottomBar } from './Components/BottomBar/BottomBar'


// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // Firebase listener
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // If logged in, store user in Redux
//         dispatch(setUser({
//           uid: user.uid,
//           email: user.email,
//           displayName: user.displayName,
//           photoURL: user.photoURL,
//         }));
//       } else {
//         // If logged out, clear user
//         dispatch(setUser(null));
//       }
//     });

//     // Cleanup when unmounts
//     return () => unsubscribe();
//   }, [dispatch]);

//   return (
//     <div>
//       <Navbar/>
//       <Routing />
//       <BottomBar/>
//     </div>
//   );
// }

// export default App;





import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./Store/Slices/AuthSlice";
import Routing from './Routing/Routing';
import { auth } from "./Config/firebase";
import { Navbar } from "./Components/Navbar/Navbar";
import { BottomBar } from './Components/BottomBar/BottomBar';

// ✅ Import Dialogs
import LoginDialog from "./Components/LoginDialog/LoginDialog";
import SignupDialog from "./Components/SignUpDialog/SignUpDialog";  

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Firebase listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If logged in, store user in Redux
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }));
      } else {
        // If logged out, clear user
        dispatch(setUser(null));
      }
    });

    // Cleanup when unmounts
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routing />
      <BottomBar />

      {/* ✅ Floating dialogs */}
      <LoginDialog />
      <SignupDialog />
    </div>
  );
}

export default App;
