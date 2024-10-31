import { Link, Outlet, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <>
      <header>
        <h1>Checkers Game</h1>
      </header>
      <main>
        {location.pathname === "/" ? (
          <>
            <p>
              Please <Link to={"/sign_in"}>Sign in</Link> to play the game.
            </p>
            <p>or,</p>
            <p>
              <Link to={"/sign_up"}>Sign up</Link> if don&apos;t have an
              account.
            </p>
          </>
        ) : (
          <Outlet />
        )}
      </main>
      <footer>VMadhuranga &copy; 2024</footer>
    </>
  );
};

export default App;
