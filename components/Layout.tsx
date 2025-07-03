import React from "react";
import Navbar from "./Navbar";
import FooterLayout from "./FooterLayout";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Navbar>
      <div className="content">{children}</div>
      <FooterLayout />
    </Navbar>
  );
};

export default Layout;
