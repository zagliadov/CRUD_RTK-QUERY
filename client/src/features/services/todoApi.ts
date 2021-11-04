import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ITodo {
    userId?: number;
    id: number;
    title?: string;
    completed: boolean;
}
type TodoResponse = ITodo[];

interface ICreateTodo {
    id: string;
    title: string;
    completed: boolean;
}

export const todoApi = createApi({
    reducerPath: 'todoApi',
    tagTypes: ['Todos'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9001'
    }),
    endpoints: (build) => ({
        getAllTodos: build.query<TodoResponse, string>({
            query: (limit = '') => `/api/todos?${limit && `_limit=${limit}`}`,
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'Todos' as const, id })),
                    { type: 'Todos', id: 'LIST' },
                ]
                : [{ type: 'Todos', id: 'LIST' }],
        }),
        getTodoById: build.query<TodoResponse, string>({
            query: (id) => `/api/todos/getTodoById/${id}`,
            providesTags: [{ type: 'Todos', id: 'LIST' }]
        }),
        deleteTodo: build.mutation<TodoResponse, number>({
            query: (id) => ({
                url: `/api/todos/remove/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Todos', id: 'LIST' }]
        }),
        checkedTodo: build.mutation<TodoResponse, ITodo>({
            query: (todo) => ({
                url: `/api/todos/completed`,
                method: 'POST',
                body: todo,
            }),
            invalidatesTags: [{ type: 'Todos', id: 'LIST' }]
        }),
        createTodo: build.mutation<TodoResponse, ICreateTodo>({
            query: (data) => ({
                url: '/api/todos/create',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: [{ type: 'Todos', id: 'LIST' }]
        })
    })

});

export const {
    useGetAllTodosQuery,
    useDeleteTodoMutation,
    useCheckedTodoMutation,
    useGetTodoByIdQuery,
    useCreateTodoMutation,
} = todoApi;
