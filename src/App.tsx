import { useAuth } from "@clerk/clerk-react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components";
import { NotFoundPage, SignInPage } from "./pages";
import Dashboard from "./pages/dashboard";


const App: React.FC = () => {
  const {isLoaded, isSignedIn} = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
   <BrowserRouter>
      <Routes>
        {isSignedIn && (
          <Route element={<MainLayout><Outlet/></MainLayout>}>
            <Route path="/dashboard" element={<Dashboard/>} />
          </Route>
        )}
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignInPage />} />
        <Route path="/" element={isSignedIn? <Navigate to="/dashboard" /> : <Navigate to="/sign-in" />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;