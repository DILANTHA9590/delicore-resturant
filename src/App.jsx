import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // ✅ IMPORT ROUTER
import { Toaster } from "react-hot-toast"; // (only if you've installed it)
import "./App.css";
import HomeLayout from "./homeLayout/HomeLayOut";
import AdminLayout from "./AdminLayout/AdminLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Toaster />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home/*" element={<HomeLayout />} />
          <Route path="/admin/*" element={<AdminLayout />} />
          {/* <Route path="/doctor/*" element={<DoctorMain />} /> */}
          {/* <Route path="/login" element={<LoginForm />} />
          <Route path="/createaccount" element={<CreateAccountForm />} />
          <Route path="/verifyemail" element={<VerifyEmailForm />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
