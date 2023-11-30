import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { NotFound } from "./pages/notFound";
import { MyPlaylist } from "./pages/myPlaylist";
import { Categories } from "./pages/categories";
import { Login } from "./pages/login";
import { Registration } from "./pages/registration";
import React from "react";
import { ProtectedRoute } from "./protectedRoute/ProtectedRoute";
export const AppRoutes = ({ tracks, setTracks, track_file }) => {
  const [user, setUser] = React.useState(null);
  const logOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route
          path="/"
          element={
            <Main
              tracks={tracks}
              setTracks={setTracks}
              user={user}
              logOut={logOut}
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
      <Route path="/login" element={<Login user={user} setUser={setUser} />} />
      <Route path="/register" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
