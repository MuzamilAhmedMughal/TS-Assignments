// Assignment 1: Building Yuor Friend List

type Friends = {
    firstName: string;
    lastName: string;
    id?: number;
} 

type People = {
    friends: Friends[]
}

let people: People = {
    friends: []
}


let friend1: Friends = {
    firstName: "Muzamil",
    lastName: "Mughal",
    id: 7835
}

let friend2: Friends = {
    firstName: "Huzaifa",
    lastName: "Shamsi"
}

let friend3: Friends = {
    firstName: "Raafe",
    lastName: "Nadeem",
    id: 2378
}

people.friends.push(friend1, friend2, friend3);

console.log(people);