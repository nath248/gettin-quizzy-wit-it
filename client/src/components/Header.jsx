import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src="https://res.cloudinary.com/dojhf40bp/image/upload/v1638551854/footer_g2hom0.jpg" alt="header" width="100%" height="80" />
      <Link to="/">Home </Link>
      <Link to="/new">Add New Question</Link>
    </div>
  )
}


export default Header;
