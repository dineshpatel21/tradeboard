import "./App.css";

// import icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Layout from "./components/layout/Layout";
import MyState from "./context/MyState";

function App() {
  return (
    <MyState>
      <Layout/>
    </MyState>
  );
}

export default App;
