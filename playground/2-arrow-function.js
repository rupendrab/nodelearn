/*
const square = function(x) {
    return x * x
}
*/

/*
const square = (x) => {
    return x * x
}
*/

const square = (x) => x * x

console.log(square(3))

const event = {
    name: "Birthday Party",
    guestList: ['Andrew', 'Jen', 'Aaron'],
    printGuestList: function() {
        console.log("Guest list for: " + this.name)
    },
    printGuestList2: () => {
        console.log("Guest list for: " + this.name)
    },
    printGuestListES6() {
        console.log("Guest list for: " + this.name)
        this.guestList.forEach(guest => console.log("  " + guest + " is attending " + this.name))
    }
}

event.printGuestList()
event.printGuestList2()
event.printGuestListES6()
