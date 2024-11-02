import { Link } from "react-router-dom";
import SignInForm from "./SignInForm";

const SignInPage = () => {
  return (
    <section>
      <h2>Sign in</h2>
      <SignInForm />
      <p>
        Don&apos;t have an account? Please <Link to={"/sign_up"}>Sign up</Link>
      </p>
    </section>
  );
};

export default SignInPage;
