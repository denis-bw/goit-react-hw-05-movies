import Header from "../Header/Header";
import { Outlet } from "react-router-dom"
import { Suspense } from "react";
const Layout = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Outlet />  
    </Suspense>
  );
};

export default Layout