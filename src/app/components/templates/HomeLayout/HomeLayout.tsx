import Navbar from "../../organisms/Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar></Navbar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
