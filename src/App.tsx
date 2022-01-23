import "./App.css";
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
