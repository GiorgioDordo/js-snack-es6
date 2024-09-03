const invited = [
    {name: 'Brad Pitt', table: 'Tavolo Vip', occupiedPlace: 1},
    {name: 'Johnny Depp', table: 'Tavolo Vip', occupiedPlace: 2},
    {name: 'Lady Gaga', table: 'Tavolo Vip', occupiedPlace: 3},
    {name: 'Cristiano Ronaldo', table: 'Tavolo Vip', occupiedPlace: 4},
    {name: 'Georgina Rodriguez', table: 'Tavolo Vip', occupiedPlace: 5},
    {name: 'Chiara Ferragni', table: 'Tavolo Vip', occupiedPlace: 6},
    {name: 'George Clooney', table: 'Tavolo Vip', occupiedPlace: 7},
    {name: 'Amal Clooney', table: 'Tavolo Vip', occupiedPlace: 8},
    {name: 'Fedez', table: 'Tavolo Vip', occupiedPlace: 9},
    {name: 'Laura Pausini', table: 'Tavolo Vip', occupiedPlace: 10},
];

const guests = invited.map((guest) => {
    return guest.name + " " + guest.table + " " +guest.occupiedPlace;
});

console.log(guests);


