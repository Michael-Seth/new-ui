import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import AppLayout from "./Layout"

function Pages() {
  return (
    <Routes>
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/app/*" element={<AppLayout />} />

      <Route path="/" element={<Navigate to="/auth" />} />
      <Route path="*" element={<Navigate to="/app" />} />
    </Routes>
  );
}

export default Pages;
