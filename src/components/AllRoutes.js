import React from "react";
import { Route, Routes } from "react-router-dom";
import SignupCard from "../pages/Sign-upPage";
import LoginPage from "../pages/LoginPage";
import ForumPage from "../pages/ForumPage";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignupCard />} />
      <Route path="/sign-in" element={<LoginPage />} />
      <Route
        path="/forum"
        element={
          <PrivateRoute>
            <ForumPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
