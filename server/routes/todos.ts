import express from 'express';
const router = express.Router();
import {
    getAllTodos,
    getTodoById,
    removeTodo,
    checkedTodo,
    createTodo,
} from '../controllers/todos';

router.get('/', getAllTodos);
router.get('/getTodoById/:id', getTodoById);
router.post('/completed', checkedTodo);
router.delete('/remove/:id', removeTodo);
router.post('/create', createTodo);


export default router