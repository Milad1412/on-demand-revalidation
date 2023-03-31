import { useEffect, useState } from 'react'
import {
  BusPassTypes,
  BusReceiptTypes,
  FlightPassTypes,
  FlightReceiptTypes,
  TableProps,
} from '../types/Table'

const Table: React.FC<TableProps> = ({
  tableFor,
  title,
  busPass,
  busReceipt,
  flightPass,
  flightReceipt,
}) => {
  const [table, setTable] = useState<
    | BusPassTypes[]
    | BusReceiptTypes[]
    | FlightPassTypes[]
    | FlightReceiptTypes[]
    | undefined
  >(undefined)

  const checkTableTypes = (tableFor: string) => {
    switch (tableFor) {
      case 'busPass':
        setTable(busPass)
        break
      case 'busReceipt':
        setTable(busReceipt)
        break
      case 'flightPass':
        setTable(flightPass)
        break
      case 'flightReceipt':
        setTable(flightReceipt)
        break
      default:
        setTable(undefined)
    }
  }

  useEffect(() => {
    checkTableTypes(tableFor)
  }, [tableFor])

  table?.forEach((item) => console.log(item))

  return (
    <div>
      {table?.map(
        ({
          busPassUnique,
          busReceiptUnique,
          flightPassUnique,
          flightReceiptUnique,
          name,
          price,
        }) => {
          return (
            <div key={name}>
              <p>busPassUnique: {busPassUnique}</p>
              <p>busReceiptUnique: {busReceiptUnique}</p>
              <p>flightPassUnique: {flightPassUnique}</p>
              <p>flightReceiptUnique: {flightReceiptUnique}</p>
              <p>name: {name}</p>
              <p>price: {price}</p>
            </div>
          )
        }
      )}
    </div>
  )
}

export default Table
