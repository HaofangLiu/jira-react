import "./App.css";
import ProjectList from "./views/project-list/index";
import { UserLoginOrReigster } from "views/unauthentication";
import { useAuth } from "context/authContext";
import { AuthedPage } from "views/authentication";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">{user ? <AuthedPage /> : <UserLoginOrReigster />}</div>
  );
}

export default App;
