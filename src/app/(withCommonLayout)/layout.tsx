import Footer from "@/components/Shared/Footer";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className=" min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
