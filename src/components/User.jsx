import { Outlet, useLoaderData } from "react-router-dom";

const User = () => {
  const user = useLoaderData();

  return <Outlet context={user} />;
};

export default User;
