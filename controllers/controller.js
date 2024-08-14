let todoStorage = [];

const defaultController = (req, res) => {
    res.render('index.ejs',{todos: todoStorage});
}
const todoApp = (req, res) => {

    let todoObj = {
        id: todoStorage.length + 1,
        task: req.body.task,
    }
    todoStorage = [...todoStorage, todoObj];

    console.log(todoObj);

    console.log("Todo");
    res.redirect('/')
}


const editTodoController = (req, res) =>{
    console.log(req.params);
    let {id} = req.params
    
    let singleTodo = todoStorage.find((todo) =>{
        return todo.id == id
    })
    console.log("Single Todo..???", singleTodo);
    
    res.render('edittodo',{singleTodo});    


}

// const updateTodoController = (req, res) =>{

//     console.log("b",req.body);
    
    

// }

module.exports = { defaultController, todoApp, editTodoController };