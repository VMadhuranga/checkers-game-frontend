import { Link } from "react-router-dom";

const MainMenuPage = () => {
  return (
    <section>
      <h2>Main menu</h2>
      <ul>
        <li>
          <Link to={"play"}>Play</Link>
        </li>
        <li>
          <Link to={"leaderboard"}>Leaderboard</Link>
        </li>
        <li>
          <Link to={"instructions"}>Instructions</Link>
        </li>
        <li>
          <Link to={"profile"}>Profile</Link>
        </li>
      </ul>
    </section>
  );
};

export default MainMenuPage;
