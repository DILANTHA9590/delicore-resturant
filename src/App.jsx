import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // ✅ IMPORT ROUTER
import { Toaster } from "react-hot-toast"; // (only if you've installed it)
import "./App.css";
import HomePage from "./homeLayout/homePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Toaster />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/*" element={<h1>Admin</h1>} />
          {/* <Route path="/doctor/*" element={<DoctorMain />} /> */}
          {/* <Route path="/login" element={<LoginForm />} />
          <Route path="/createaccount" element={<CreateAccountForm />} />
          <Route path="/verifyemail" element={<VerifyEmailForm />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
y;

export default App;
