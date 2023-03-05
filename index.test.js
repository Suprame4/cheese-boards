const {sequelize, Sequelize } = require('./db')
const {User, Board, Cheese} = require('./models/index')

const {
    seedBoard,
    seedCheese,
    seedUser
} = require('./seedData.js')

describe("Board, Cheese and User Models", () => {

    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test("test association with user and board (one-to-many)", async () => {
        await User.bulkCreate(seedUser)
        await Board.bulkCreate(seedBoard)

        const someUser = await User.findByPk(1)
        console.log("USER: ", someUser)
    })

    test("test association with board and cheese (many-to-many)", async () => {

    })

    test("test edger loading", async () => {

    })
})