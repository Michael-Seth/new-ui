import { Route, Routes } from "react-router-dom";

const About = () => (
  <div className="flex-1 p-4">
    <h1 className="text-2xl font-bold">About Us</h1>
    <p className="mt-4">
      Provide information about your application or company here.
    </p>
  </div>
);

const Contact = () => (
  <div className="flex-1 p-4">
    <h1 className="text-2xl font-bold">Contact Us</h1>
    <p className="mt-4">
      You can include a contact form or other contact information here.
    </p>
  </div>
);

const MainContent = () => (
  <div className="flex-1 p-4">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);

export default MainContent;
