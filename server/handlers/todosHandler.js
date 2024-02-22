// TODOS
let todos = [];

const postHandler = (req, res) => {
  let todo = req.body;

  try {
    todos.push(todo);

    res.status(201).json({
      status: "success",
      data: todo,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getHandler = (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: todos,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const putHandler = (req, res) => {
  let ubdatedTodo = req.body;
  let id = +req.params.id;
  try {
    let todo = todos.find((todo) => todo.id === id);

    if (!todo) {
      res.status(404).json({
        status: "fail",
        message: "ID Not Found!",
      });
    }
    let newTodo = Object.assign(todo, ubdatedTodo);
    let index = todos.indexOf(todo);
    todos.splice(index, 1, newTodo);

    res.status(201).json({
      status: "success",
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

const deleteHandler = (req, res) => {
  let id = +req.params.id;

  try {
    let todo = todos.find((todo) => todo.id == id);
    if (!todo) {
      res.status(404).json({
        status: "fail",
        message: "ID Not Found!",
      });
    } else {
      let index = todos.indexOf(todo);
      todos.splice(index, 1);
      res.status(204).end();
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error!",
    });
  }
};

const patchHandler = (req, res) => {
  let ubdatedTodo = req.body;
  let id = +req.params.id;
  try {
    let todo = todos.find((todo) => todo.id === id);

    if (!todo) {
      res.status(404).json({
        status: "fail",
        message: "ID Not Found!",
      });
    }
    let newTodo = Object.assign(todo, ubdatedTodo);
    let index = todos.indexOf(todo);
    todos.splice(index, 1, newTodo);

    res.status(201).json({
      status: "success",
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

export { postHandler, getHandler, putHandler, deleteHandler , patchHandler };
