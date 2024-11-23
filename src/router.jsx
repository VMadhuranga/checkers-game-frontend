import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import User from "./components/User";
import MainMenuPage from "./components/MainMenuPage";
import ProfilePage from "./components/ProfilePage";
import EditProfilePage from "./components/EditProfilePage";
import signInUser from "./actions/sign-in-user";
import signUpUser from "./actions/sign-up-user";
import getFormData from "./utils/get-form-data";
import getUserById from "./loaders/get-user-by-id";
import refreshToken from "./loaders/refresh-token";
import signOutUser from "./loaders/sign-out-user";
import deleteUserById from "./loaders/delete-user-by-id";
import updateUsername from "./actions/update-username";
import updatePassword from "./actions/update-password";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "sign_up",
        element: <SignUpPage />,
        action: async ({ request }) => {
          const formData = await getFormData(request);

          const errors = await signUpUser(baseUrl, formData);
          if (errors) {
            return errors;
          }

          return redirect("/sign_in");
        },
      },
      {
        path: "sign_in",
        element: <SignInPage />,
        action: async ({ request }) => {
          const formData = await getFormData(request);

          const { userId, errors } = await signInUser(baseUrl, formData);
          if (errors) {
            return errors;
          }

          return redirect(`/${userId}`);
        },
      },
      {
        path: "sign_out",
        loader: async () => {
          await signOutUser(baseUrl);
          return redirect("/sign_in");
        },
      },
      {
        path: ":user_id",
        element: <User />,
        loader: async ({ params }) => {
          await refreshToken(baseUrl);

          const { user_id } = params;
          const user = await getUserById(baseUrl, user_id);

          return user;
        },
        children: [
          {
            index: true,
            element: <MainMenuPage />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "profile/delete",
            loader: async ({ params }) => {
              const { user_id } = params;
              await deleteUserById(baseUrl, user_id);
              return redirect("/sign_up");
            },
          },
          {
            path: "profile/edit",
            element: <EditProfilePage />,
            action: async ({ request, params }) => {
              const { user_id } = params;
              const formData = await getFormData(request);

              if (Object.hasOwn(formData, "new_username")) {
                const errors = await updateUsername(baseUrl, user_id, formData);
                if (errors) {
                  return { errors };
                }

                return { usernameUpdated: true };
              }

              if (
                Object.hasOwn(formData, "old_password") &&
                Object.hasOwn(formData, "new_password") &&
                Object.hasOwn(formData, "confirm_new_password")
              ) {
                const errors = await updatePassword(baseUrl, user_id, formData);
                if (errors) {
                  return { errors };
                }

                return { passwordUpdated: true };
              }

              return null;
            },
          },
        ],
      },
    ],
  },
]);

export default router;
