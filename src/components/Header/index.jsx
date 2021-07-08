import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/vaccines'>Vaccines</Link>
      <Link to='/patients'>Patients</Link>
    </div>
  )
}

export default Header;