//create a list of users, boards and cheeses as mock data

const seedUser = [
    {
        name: "Alex",
        email: "Alex@gmail.com"
    },
    {
        name: "Andrew",
        email: "Andrew@gmail.com"
    },
    {
        name: "Adam",
        email: "Adam@gmail.com"
    }

]

const seedCheese = [
    {
        title: "American",
        description: "American is a creamy, smooth cheese made from blending natural cheeses."   
    },
    {
        title: "Asiago",
        description: "Asiago, a nutty-flavored cheese, comes in two forms: fresh and mature."
    },
    {
        title: "Blue Cheese",
        description: "Blue is a general name for cheeses that were made with Penicillium cultures, which creates “blue” spots or veins."
    }
]

const seedBoard = [
    {
        type: "party",
        description: "board 1",
        rating: 5 
    },
    {
        type: "individual",
        description: "board 2",
        rating: 5 
    },
    {
        type: "sharable",
        description: "board 3",
        rating: 5 
    }
]

module.exports = {
    seedUser,
    seedCheese,
    seedBoard
}
