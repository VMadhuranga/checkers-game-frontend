import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import signInUser from "./actions/sign-in-user";
import signUpUser from "./actions/sign-up-user";

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
          const formData = Object.fromEntries(
            (await request.formData()).entries(),
          );

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
          const formData = Object.fromEntries(
            (await request.formData()).entries(),
          );

          const { userId, errors } = await signInUser(baseUrl, formData);
          if (errors) {
            return errors;
          }

          return redirect(`/${userId}`);
        },
      },
    ],
  },
]);

export default router;
