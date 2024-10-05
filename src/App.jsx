import { Routes, Route } from "react-router-dom";
import ContactsScreen from "./pages/ContactsScreen";
import contacts from "./utils/contacts";
import states from "./utils/states";
import cities from "./utils/cities";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <h1 className="flex flex-col justify-center items-center w-full min-h-screen">
        <Routes>
          <Route
            path="/"
            element={
              <ContactsScreen
                contacts={contacts}
                states={states}
                cities={cities}
              />
            }
          />
          <Route path="/perfil/:id" element={<ProfilePage />} />
        </Routes>
      </h1>
    </>
  );
}

export default App;
