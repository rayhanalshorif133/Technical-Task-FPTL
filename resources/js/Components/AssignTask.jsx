import React, { useEffect } from 'react'
import InputLabel from './InputLabel'
import { useForm } from '@inertiajs/react';

export default function AssignTask({tasksAndUsers}) {

    const {users,tasks} = tasksAndUsers;

    const { setData, data, post, reset } = useForm({
        task_id: '',
        user_id: '',
    });
    
    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    useEffect(() => {
        return () => {
            reset('task_id', 'user_id');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('task.assign.store'));
    };


    return (
        <div className='w-full'>
            <h2 className='font-semibold text-xl border-b-[1px] border-gray-500'>Assign a New Task</h2>
            <form onSubmit={submit} className="p-4 ">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <InputLabel value="Select a User" />
                        <select className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" name='user_id'
                            onChange={handleOnChange}
                            required>
                            <option value="" disabled selected>Select a user</option>
                            {
                                users.length > 0 && users.map((user) => {
                                    return (
                                        <option value={user.id} key={user.id}>{user.name}</option>
                                    )
                                })
                            }

                        </select>
                    </div>
                    <div>
                        <InputLabel value="Select a Task" />
                        <select className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" name='task_id'
                            onChange={handleOnChange}
                            required>
                            <option value="" disabled selected>Select a task</option>
                            {
                                tasks.length > 0 && tasks.map((task) => {
                                    return (
                                        <option value={task.id} key={task.id}>{task.title}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <button type="submit" className="inline-flex items-center px-4 py-2 bg-teal-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-teal-600 active:bg-teal-700 focus:outline-none focus:border-teal-700 focus:ring focus:ring-teal-300 disabled:opacity-25 transition">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
