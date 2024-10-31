import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "./FormInput";

const SignUpForm = () => {
  const errors = useActionData();

  return (
    <Form method="POST">
      <FormInput
        id={"username"}
        labelChildren={"Username"}
        inputType={"text"}
        inputAttributes={{ required: true }}
        errors={errors?.username}
      />
      <FormInput
        id={"password"}
        labelChildren={"Password"}
        inputType={"password"}
        inputAttributes={{ required: true }}
        errors={errors?.password}
      />
      <FormInput
        id={"confirm_password"}
        labelChildren={"Confirm Password"}
        inputType={"password"}
        inputAttributes={{ required: true }}
        errors={errors?.confirm_password}
      />
      <button type="submit">Sign up</button>
      <p>
        Already have an account? <Link to={"/sign_in"}>Sign in</Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
