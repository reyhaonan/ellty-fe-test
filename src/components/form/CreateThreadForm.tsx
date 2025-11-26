import Button from '../ui/Button';
import Input from '../ui/Input';
import { useForm } from 'react-hook-form';
import { threadSchema, type ThreadFormInput } from '@/schemas/threadSchema';
import { useCreateThread } from '@/hooks/useCreateThread';
import { zodResolver } from '@hookform/resolvers/zod';

const CreateThreadForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        // @ts-ignore
        resolver: zodResolver(threadSchema),
        defaultValues: {
            startingNumber: undefined
        }
    });

    const { mutate, isPending } = useCreateThread()

    const onSubmit = async (data: ThreadFormInput) => {
        mutate(data.startingNumber, {
            onSuccess: () => {
                reset();
            }
        })
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='border border-border p-4 mx-4 rounded-lg space-y-2 mb-4'>
            <h2 className='font-semibold text-2xl'>Create a New Thread</h2>
            <div>
                <label htmlFor="startingNumber">Starting Number:</label>
                <Input
                    type="number"
                    placeholder="e.g., 10 or 3.14"
                    id="startingNumber"
                    {...register("startingNumber")}
                />
                {errors.startingNumber && <p className="text-red-500 text-xs mt-1">{errors.startingNumber.message}</p>}
            </div>
            <Button type="submit" disabled={isPending}>
                {isPending ? 'Creating...' : 'Create Thread'}
            </Button>
        </form>
    );
};

export default CreateThreadForm;