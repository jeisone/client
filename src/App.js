import AppRouter from "./routers/AppRouter";
import AuthProvider from "./auth/AuthProvider";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
      <Router> 
        <AuthProvider>
          <Layout>
            <AppRouter />
          </Layout>
        </AuthProvider>
      </Router>
      <ToastContainer/>
    </div>
  );
}
const a =2

export default App;
