import AssignTask from '@/Components/AssignTask';
import Table from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Task(props) {

    const [assignTask, setAssignTask] = useState(false);

    const {users,tasks} = props?.usersAndTasks;


    const handleAssignTask = () => {
        setAssignTask(!assignTask);
    }

    const ths = [
        { name: '#', sort: null },
        { name: 'Title', sort: null },
        { name: 'status', sort: null },
        { name: 'description', sort: null },
        { name: 'deadline', sort: null },
        { name: 'assigned user', sort: null },
    ];

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Task</h2>}
        >
            <Head title="Task" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="flex justify-center">
                        <a href={route('task.create')} className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500">
                            Create
                        </a>
                        <div onClick={handleAssignTask} className="cursor-pointer px-4 mx-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-md hover:bg-sky-500">
                            Assign Task
                        </div>
                    </div>
                    {
                        assignTask &&
                        <div className='flex justify-center my-10 bg-white rounded-xl p-5 border-[2px] border-gray-200 shadow-sm'>
                            <AssignTask tasksAndUsers={props?.usersAndTasks}/>
                        </div>
                    }

                    <div className="flex justify-center my-10 bg-white rounded-xl p-5 border-[2px] border-gray-200 shadow-sm">
                        <Table ths={ths} data={tasks} handleAssignTask={handleAssignTask}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
