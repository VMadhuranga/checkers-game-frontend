import { Link, useParams } from "react-router-dom";

const ProfilePage = () => {
  const { user_id } = useParams();

  return (
    <section>
      <h2>Profile</h2>
      <ul>
        <li>
          <Link to={"edit"}>Edit profile</Link>
        </li>
        <li>
          <Link to={"delete"}>Delete profile</Link>
        </li>
        <li>
          <Link to={"/sign_out"}>Sign out</Link>
        </li>
        <li>
          <Link to={`/${user_id}`}>Main menu</Link>
        </li>
      </ul>
    </section>
  );
};

export default ProfilePage;
