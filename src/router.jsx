import { createBrowserRouter, redirect } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import App from "./App";
import signUp from "./actions/sign-up";

const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "sign_up",
        element: <SignUpForm />,
        action: async ({ request }) => {
          const formData = Object.fromEntries(
            (await request.formData()).entries(),
          );

          const errors = await signUp(baseUrl, formData);
          if (errors) {
            return errors;
          }

          return redirect("/sign-in");
        },
      },
    ],
  },
]);

export default router;
