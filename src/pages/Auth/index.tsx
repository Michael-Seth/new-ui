import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import Login from "./elements/Login";



function Auth() {

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      {/* <Route
        path="forgot-password"
        element={
          <SuspensedWithFallback>
            <ForgotPassword />
          </SuspensedWithFallback>
        }
      />

      <Route
        path="reset-password"
        element={
          <SuspensedWithFallback>
            <ResetPassword />
          </SuspensedWithFallback>
        }
      /> */}

      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
}

export default Auth;
