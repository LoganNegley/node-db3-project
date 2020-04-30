const db = require('../data/dbConfig');

function find(){
  return  db('schemes')
};





module.exports = {
    find
}