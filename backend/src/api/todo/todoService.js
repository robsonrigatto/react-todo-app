const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({new: true, runValidators: true}) //quando fizer um update, se retornar o registro, trazer já atualizado

module.exports = Todo