import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="links-main">
        <Link to="/" className="links header-link">Home</Link>
        <Link to="/new" className="links header-link">Add New Question</Link>
      </div>
    </div>
  )
}


export default Header;
