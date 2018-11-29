var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    Object.defineProperty(Ticket.prototype, "getDestination", {
        get: function () {
            return this.destination;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "getPrice", {
        get: function () {
            return this.price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ticket.prototype, "getStatus", {
        get: function () {
            return this.status;
        },
        enumerable: true,
        configurable: true
    });
    return Ticket;
}());
function manageTickets(tickets, sortingCriteria) {
    var ticketDatabase = new Array();
    console.log(ticketDatabase);
    tickets.forEach(function (ticketStr) {
        var ticketParams = ticketStr.split("|");
        var destinationName = ticketParams[0];
        var price = Number(ticketParams[1]);
        var status = ticketParams[2];
        var ticket = new Ticket(destinationName, price, status);
        ticketDatabase.push(ticket);
    });
    console.log(ticketDatabase.sort(function (a, b) {
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
    'Boston|126.20|departed'
], 'destination');
manageTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'status');
