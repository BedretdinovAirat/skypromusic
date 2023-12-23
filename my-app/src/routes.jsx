import { Routes, Route } from "react-router-dom";
import React from "react";
import { Main } from "./pages/main";
import { NotFound } from "./pages/notFound/";
import { MyPlaylist } from "./pages/myPlaylist";
import { Categories } from "./pages/categories";
// import { Login } from "./pages/login";
// import { Registration } from "./pages/registration";
import { ProtectedRoute } from "./protectedRoute/ProtectedRoute";
import AuthPage from "./pages/auth/AuthPage";
import { AuthProvider } from "./store/AuthContext";
import { themes, ThemeContext } from "./pages/ThemeContext/ThemeContext";
import { PageLayout } from "./components/pageLayout/PageLayout";
export const AppRoutes = ({ tracks, setTracks, track_file, isLoading }) => {
  const [currentTheme, setCurrentTheme] = React.useState(themes.dark);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  };

  return (
    <AuthProvider>
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<PageLayout />}>
              <Route
                index
                element={
                  <Main
                    isLoading={isLoading}
                    tracks={tracks}
                    setTracks={setTracks}
                    // user={user}
                    // logOut={logOut}
                  />
                }
              />
              <Route
                path="/myplaylist"
                element={
                  <MyPlaylist
                    tracks={tracks}
                    setTracks={setTracks}
                    track_file={track_file}
                  />
                }
              />
              <Route path="/categories/:id" element={<Categories />} />
            </Route>
          </Route>
          <Route path="/login" element={<AuthPage isLoginMode={true} />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeContext.Provider>
    </AuthProvider>
  );
};
