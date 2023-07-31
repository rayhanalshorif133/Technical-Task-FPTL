import Dropdown from '@/Components/Dropdown';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Create(props) {

    const { setData, post, reset } = useForm({
        title: '',
        description: '',
        status: '',
        deadline: '',
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    useEffect(() => {
        return () => {
            reset('title', 'description', 'status', 'deadline');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('task.store'));
    };


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Create a new Task</h2>}
        >
            <Head title="Create Task" />

            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <h2 className='px-5 py-5 font-semibold bg-white shadow-sm'>New Task</h2>
                    <form onSubmit={submit} className="p-4 bg-white shadow sm:rounded-lg">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <InputLabel value="Title" />
                                <TextInput type="text" placeholder='Enter a title' name="title" className="w-full" 
                                    onChange={handleOnChange}
                                    required />
                            </div>
                            <div>
                                <InputLabel value="Description" />
                                <textarea type="text" name='description' placeholder='Enter a description' className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" 
                                    onChange={handleOnChange}
                                    required></textarea>
                            </div>
                            <div>
                                <InputLabel value="Status" />
                                <select className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" name='status' 
                                    onChange={handleOnChange}
                                    required>
                                    <option value="" disabled selected>Select a status</option>
                                    <option value="open">Open</option>
                                    <option value="in-process">In Process</option>
                                    <option value="done">Done</option>
                                </select>
                            </div>
                            <div>
                                <InputLabel value="Deadline" />
                                <input type="date" name='deadline'
                                    placeholder='Enter a deadline' className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400" 
                                    onChange={handleOnChange}
                                    required />
                            </div>
                            <div>
                                <button type="submit" className="inline-flex items-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-600 active:bg-green-700 focus:outline-none focus:border-green-700 focus:ring focus:ring-green-300 disabled:opacity-25 transition">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
