import { Task } from '../models/Task.js';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        console.log(tasks)
        res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: {
                id
            },
            attributes: ['name']
        });

        if(!task) {
            return res.status(404).json({ message: 'task does not exists'})
        }
        res.json(task)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createTask = async (req, res) => {
    const { name, done, projectId } = req.body

    try {
        const newTask = await Task.create({
            name: name,
            done: done,
            projectId: projectId
        });

        console.log(newTask);
        res.send(newTask);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, done, projectId } = req.body;

        const task = await Task.findOne({
            where: {
                id
            }
        })
        task.set({
            name,
            done,
            projectId
        })
        await task.save();

        res.json(task)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteTask = async (req, res) => {
    
    try {
        const { id } = req.params;
        await Task.destroy({
            where: {
                id: id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}