const taskModel = require('../modal/Task'); 

exports.createTask = async (req, res) => {

  try {
 
    const task = await taskModel.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Task created successfully",
      data: task
    });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({
      status: "fail",
      message: "An error occurred while creating the task",
      error: error.message
    });
  }
};


exports.getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find().populate('userId');
    res.status(200).json({
      status: "success",
      message: 'Tasks fetched successfully',
      data: tasks
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({
      status: "fail",
      message: "An error occurred while fetching tasks",
      error: error.message
    });
  }
};


exports.getTaskById = async (req, res) => {
  const taskId = parseInt(req.params.task_id);

  try {
    const task = await taskModel.findById(taskId);
    res.status(200).json({
      status: "success",
      message: 'Task fetched successfully',
      data: task
    });
  } catch (error) {
    console.error('Error fetching task:', error);
    res.status(500).json({
      status: "fail",
      message: "An error occurred while fetching the task",
      error: error.message
    });
  }
};


exports.updateTask = async (req, res) => {
  const taskId = req.params.id;


  try {
    const updatedTask = await taskModel.findByIdAndUpdate(taskId,req.body);
    res.status(200).json({
      status: "success",
      message: 'Task updated successfully',
      data: updatedTask
    });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).json({
      status: "fail",
      message: "An error occurred while updating the task",
      error: error.message
    });
  }
};





