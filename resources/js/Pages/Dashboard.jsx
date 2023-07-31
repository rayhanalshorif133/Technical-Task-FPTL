import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='flex flex-col items-center justify-center w-40 h-40 bg-gray-200 rounded-xl'>
                        <h4 className='flex items-center justify-center w-10 h-10 text-white bg-green-800 rounded-full hover:bg-gray-800'>{props.tasks}</h4>
                        <h2 className='px-4 py-2 my-5 bg-gray-100 rounded-xl'>
                            Total Tasks
                        </h2>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
