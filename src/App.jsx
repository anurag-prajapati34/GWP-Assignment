
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import UserList from "./components/UserList";
import UserEdit from "./components/UserEdit";
import { Toaster } from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
};


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UserList />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <UserEdit />
            </PrivateRoute>
          }
        />
      </Routes>
      <Toaster/>
    </Router>
  );
}

export default App;