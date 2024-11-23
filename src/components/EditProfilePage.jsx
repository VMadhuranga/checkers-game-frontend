import { useEffect, useState } from "react";
import {
  Form,
  Link,
  useActionData,
  useOutletContext,
  useParams,
} from "react-router-dom";
import FormInput from "./FormInput";

const EditProfilePage = () => {
  const user = useOutletContext();
  const actionData = useActionData();
  const { user_id } = useParams();
  const [isEditUsername, setIsEditUsername] = useState(false);
  const [isEditPassword, setIsEditPassword] = useState(false);

  useEffect(() => {
    if (actionData?.usernameUpdated) {
      setIsEditUsername(false);
    }
    if (actionData?.passwordUpdated) {
      setIsEditPassword(false);
    }
  }, [actionData]);

  function handleEditUsername(e) {
    e.preventDefault();
    setIsEditUsername(!isEditUsername);
  }

  function handleEditPassword(e) {
    e.preventDefault();
    setIsEditPassword(!isEditPassword);
  }

  return (
    <section>
      <h2>Edit profile</h2>
      <ul>
        <li>
          {isEditUsername ? (
            <Form method="PATCH">
              <FormInput
                id={"new_username"}
                labelChildren={"New username"}
                inputType={"text"}
                inputAttributes={{ required: true }}
                errors={actionData?.errors?.new_username}
              />
              <div>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleEditUsername}>
                  Cancel
                </button>
              </div>
            </Form>
          ) : (
            <>
              Username: {user?.username}{" "}
              <button type="button" onClick={handleEditUsername}>
                Edit
              </button>{" "}
            </>
          )}
        </li>
        <li>
          {isEditPassword ? (
            <Form method="PATCH">
              <FormInput
                id={"old_password"}
                inputType={"password"}
                labelChildren={"Old password"}
                inputAttributes={{ required: true }}
                errors={actionData?.errors?.old_password}
              />
              <FormInput
                id={"new_password"}
                inputType={"password"}
                labelChildren={"New password"}
                inputAttributes={{ required: true }}
                errors={actionData?.errors?.new_password}
              />
              <FormInput
                id={"confirm_new_password"}
                inputType={"password"}
                labelChildren={"Confirm new password"}
                inputAttributes={{ required: true }}
                errors={actionData?.errors?.confirm_new_password}
              />
              <button type="submit">Submit</button>
              <button type="button" onClick={handleEditPassword}>
                Cancel
              </button>
            </Form>
          ) : (
            <>
              Password: *****{" "}
              <button type="button" onClick={handleEditPassword}>
                Edit
              </button>
            </>
          )}
        </li>
        <li>
          <Link to={`/${user_id}`}>Main menu</Link>
        </li>
      </ul>
    </section>
  );
};

export default EditProfilePage;
