const db = require('../data/dbConfig');

function find(){
  return  db('schemes');
};

function findById(id){
    return db('schemes')
    .where({id: id})
    first()
};

function findSteps(id){
    return db('schemes')
    .select('scheme_name', 'step_number', 'instructions', 'steps.id')
    .join('steps', 'schemes.id', 'steps.scheme_id' )
    .where('schemes.id', id )
    .orderBy('step_number')
}

function add(scheme){
    return db('schemes')
    .insert(scheme)
};

// function update(change, id){
//     return 
// db('schemes')
// .where({id})
// .update(change)

// }

function remove(id){
    db('schemes')
    .where('id', id)
    .del()
};




module.exports = {
    find,
    findById,
    findSteps,
    add,
    // update, 
    remove,
};