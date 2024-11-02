import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRoutes } from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {privateRoutes.map((route, index) => {
            const Layout = route.layout;
            const Page = route.page;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
