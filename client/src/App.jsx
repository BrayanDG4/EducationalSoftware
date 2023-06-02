import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import { DashBoardPage } from "./pages/DashBoardPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { WorkArea } from "./pages/WorkArea";
import { ProtectedRoute } from "./components/routes/ProtectedRoute";
import { RecoverPassword } from "./pages/RecoverPassword";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/dashboard"
        element={
          //<ProtectedRoute>
            <DashBoardPage />
          //</ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/workarea"
        element={
          // <ProtectedRoute>
            <WorkArea />
          // {/* </ProtectedRoute> */}
        }
      />      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recover" element={<RecoverPassword />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
