import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">To Home</Link>
      <Link to="/NewPlayerForm">To Create Player</Link>
    </nav>
  );
}

export default NavBar;
