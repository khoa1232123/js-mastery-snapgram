import { useState } from "react";
import "./globals.css";
import { Route, Routes } from "react-router-dom";
import { SignInForm, SignUpForm } from "./_auth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Routes>
    </main>
  );
}

export default App;
