// 2 WAYS OF WRITING FUNCTIONS
// const square = function (x) {
    // return x * x
// }

// const square_long = (x) => {
//     return x * x
// }
// console.log(square_long(3))

// SHORTER WAY FOR ONE-LINE FUNCTIONS
// const square_short = (x) => x * x
// console.log(square_short(2))

const event = {
    name: 'Party',
    guestList: [ 'Andrew', 'Jen', 'Mike'],

    printGuestList() {
        console.log('Guest list for ' + this.name + ':')
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending to the ' + this.name)
        })
    }
}
event.printGuestList()