import React from "react";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [title, setTitle] = React.useState('Somon.TJ - сайт обьявлений в Таджикистане')
  React.useEffect(() => {
    document.title = title;
  })
  return <>
    <BrowserRouter>
      <Header />
      <Home />
      <Footer />
    </BrowserRouter>
    
  </>
};

export default App;
