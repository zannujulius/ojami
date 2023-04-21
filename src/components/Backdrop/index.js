const Backdrop = ({ children, setopen, open }) => {
  return (
    <div
      className="fixed h-screen w-screen bg-[#0000001b] top-0 right-0 z-50"
      style={{
        display: open ? "block" : "none",
      }}
    >
      <div className="w-screen h-screen flex items-center justify-center animate__animated animate__fadeInUp">
        {children}
      </div>
    </div>
  );
};

export default Backdrop;
