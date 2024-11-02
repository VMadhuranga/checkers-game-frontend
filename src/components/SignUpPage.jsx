import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <section>
      <h2>Sign up</h2>
      <SignUpForm />
      <p>
        Already have an account? <Link to={"/sign_in"}>Sign in</Link>
      </p>
    </section>
  );
};

export default SignUpPage;
