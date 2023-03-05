//import and export all models through index.js
const {User} = require('./User')
const {Cheese} = require('./Cheese')
const {Board} = require('./Board')

//user and board models have a one-to-many association 
//multiple boards can be added to a user
Board.belongsTo(User)
User.hasMany(Board)

//cheese and board models have a many-to-many association
//a board can have multiple cheeses 
//a cheese can be on multiple boards
Board.belongsToMany(Cheese, {through: "cheese_boards"})
Cheese.belongsToMany(Board, {through: "cheese_boards"})

module.exports = {
    User,
    Cheese,
    Board
}