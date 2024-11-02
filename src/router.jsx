import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";
import signUp from "./actions/sign-up";
import signInUser from "./actions/sign-in-user";

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

          const errors = await signUp(baseUrl, formData);
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
