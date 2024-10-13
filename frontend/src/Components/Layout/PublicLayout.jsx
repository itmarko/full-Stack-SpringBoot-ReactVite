import { Footer, Header } from "../Import/imprt";

const PublicLayout = ({ children }) => {
    return (
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    );
  };
  
  export default PublicLayout;