import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { AppContext } from "./context/contextApi";
import Header from "./components/Header";
import Feed from "./components/Feed";
import VideoDetails from "./components/VideoDetails";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<VideoDetails />}
            />
            <Route path="/video/:id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
