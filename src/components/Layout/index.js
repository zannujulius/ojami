import NavBar from "../NavBar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <NavBar />
      <div className="w-[90%] mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
