import { BrowserRouter } from "react-router-dom";
import {Content} from "./Components/Content";
import { Header } from "./Components/Header";

import "./css/index.scss";

const App = () => (
  <BrowserRouter>
    <div>
      <Header/>,
      <Content/>
    </div>
  </BrowserRouter>
);

export default App;
