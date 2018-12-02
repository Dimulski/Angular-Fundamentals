class Ticket {
  private destination: string;
  private price: number;
  private status: string;

  constructor(destination: string, price: number, status: string) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }

  get getDestination() {
    return this.destination;
  }

  get getPrice() {
    return this.price;
  }

  get getStatus() {
    return this.status;
  }
}

function manageTickets(tickets: Array<string>, sortingCriteria: string) {
  let ticketDatabase: Array<Ticket> = new Array();
  console.log(ticketDatabase);
  tickets.forEach(ticketStr => {
    let ticketParams = ticketStr.split("|");
    let destinationName: string = ticketParams[0];
    let price: number = Number(ticketParams[1]);
    let status: string = ticketParams[2];
    let ticket: Ticket = new Ticket(destinationName, price, status);
    ticketDatabase.push(ticket);
  });
  console.log(ticketDatabase.sort(function(a, b) {
    switch (sortingCriteria) {
      case 'destination': {
        return a.getDestination.localeCompare(b.getDestination);
      }
      case 'price': {
        return a.getPrice - b.getPrice;
      }
      case 'status': {
        return a.getStatus.localeCompare(b.getStatus);
      }
    }
  }));
}

manageTickets([ 
  'Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed'],
  'destination');
  
  manageTickets(['Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed'],
  'status');