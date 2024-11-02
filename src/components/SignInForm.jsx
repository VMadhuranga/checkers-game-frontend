import { Form, useActionData } from "react-router-dom";
import FormInput from "./FormInput";

const SignInForm = () => {
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
      <button type="submit">Sign in</button>
    </Form>
  );
};

export default SignInForm;
