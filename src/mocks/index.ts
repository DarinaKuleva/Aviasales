import { Ticket } from '../types'

export const TicketList: Array<Ticket> = [
  {
    carrier: "SU",
    price: 93065,
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-06-16T15:12:00.000Z",
        stops: [],
        duration: 740
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-07-06T05:27:00.000Z",
        stops: [],
        duration: 1856
      }
    ]
  },
  {
    carrier: "S7",
    price: 36226,
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-06-16T01:51:00.000Z",
        stops: ["IST", "SHA", "HKG"],
        duration: 646
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-07-06T05:32:00.000Z",
        stops: ["AUH", "BKK"],
        duration: 979
      }
    ]
  },
  {
    carrier: "FV",
    price: 51576,
    segments: [
      {
        date: "2020-06-16T14:12:00.000Z",
        destination: "HKT",
        duration: 614,
        origin: "MOW",
        stops: ["BKK"]
      },
      {
        date: "2020-06-16T14:12:00.000Z",
        destination: "HKT",
        duration: 1566,
        origin: "MOW",
        stops: []
      }
    ]
  }
]
