
import { getInvoices } from '../data'
import { Link, Outlet } from "react-router-dom"


function Invoice () {
  let invoice = getInvoices()

  return (
    <div>
      <nav>
        <u>
          {invoice.map((inv) => {
            return (
              <li li key={inv.number} >
                <Link to={`${inv.number}`}>{inv.name}</Link>
              </li>
            )
          })
          }
        </u>
      </nav>
      <Outlet></Outlet>
    </div >
  )
}

export default Invoice