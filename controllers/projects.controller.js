import { Project } from '../models/Projects.js';
import { Task } from '../models/Task.js';

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        console.log(projects)
        res.json(projects);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findOne({
            where: {
                id
            }
        });

        if (!project) {
            return res.status(404).json({ message: 'Project does not exists' })
        }
        res.json(project)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createProject = async (req, res) => {
    const { name, priority, description } = req.body

    try {
        const newProject = await Project.create({
            name: name,
            description: description,
            priority: priority
        });

        console.log(newProject);
        res.send(newProject);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, priority, description } = req.body;

        const project = await Project.findByPk(id)
        project.name = name;
        project.priority = priority;
        project.description = description;
        await project.save();

        res.json(project)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteProject = async (req, res) => {

    try {
        const { id } = req.params;
        await Project.destroy({
            where: {
                id: id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const getProjectTasks = async (req, res) => {
    try {
        const { id } = req.params;
        const tasks = await Task.findAll({
            where: {projectId: id}
        });

        if (!tasks) {
            return res.status(404).json({ message: 'Tasks does not exists' })
        }
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}