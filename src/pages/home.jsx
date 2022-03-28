
import { Link, Outlet } from "react-router-dom"


function Home (props) {

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">HOME {props.name}</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/sansil">User profile</Link></li>
          <li><Link to="/invoices">Invoices</Link></li>
          <li><Link to="/fetch-page">Fetch example</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Home