

import { useParams } from "react-router-dom"
import { getInvoices } from "../data"
function Invoice (props) {
  const invoiceNumber = useParams().invoice
  const invoice = getInvoices().find(inv => inv.number == invoiceNumber)
  console.log('rendered')
  return (
    <div>
      {invoice.name}
    </div>
  )

}

export default Invoice