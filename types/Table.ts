type CommonTableProps = {
  tableFor: 'busPass' | 'busReceipt' | 'flightPass' | 'flightReceipt'
  title: string
}

type CommonPass = {
  name: string
}

type CommonReceipt = {
  price: string
}

export type BusPassTypes = CommonPass & {
  busPassUnique: string
  price?: never
  busReceiptUnique?: never
  flightReceiptUnique?: never
  flightPassUnique?: never
}

export type FlightPassTypes = CommonPass & {
  flightPassUnique?: string
  price?: never
  busReceiptUnique?: never
  flightReceiptUnique?: never
  busPassUnique?: never
}

export type BusReceiptTypes = CommonReceipt & {
  busReceiptUnique?: string
  name?: never
  busPassUnique?: never
  flightPassUnique?: never
  flightReceiptUnique?: never
}

export type FlightReceiptTypes = CommonReceipt & {
  flightReceiptUnique: string
  name?: never
  busPassUnique?: never
  flightPassUnique?: never
  busReceiptUnique?: never
}

type BusPass = {
  busPass: BusPassTypes[] | undefined
  busReceipt?: never
  flightPass?: never
  flightReceipt?: never
}

type FlightPass = {
  busPass?: never
  busReceipt?: never
  flightPass: FlightPassTypes[] | undefined
  flightReceipt?: never
}

type BusReceipt = {
  busPass?: never
  busReceipt: BusReceiptTypes[] | undefined
  flightPass?: never
  flightReceipt?: never
}

type FlightReceipt = {
  busPass?: never
  busReceipt?: never
  flightPass?: never
  flightReceipt: FlightReceiptTypes[] | undefined
}

export type TableProps = CommonTableProps &
  (BusPass | FlightPass | BusReceipt | FlightReceipt)
