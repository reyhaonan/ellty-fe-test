import { useCreateMessage } from '@/hooks/useCreateMessage';
import { replySchema, type ReplyFormInput } from '@/schemas/messageSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Select from '../ui/Select';
import Button from '../ui/Button';
import Input from '../ui/Input';

type Props = {
    threadId: number,
    parentMessageId?: number,
    onReplied: () => void
}

const ReplyForm = ({ parentMessageId, threadId, onReplied }: Props) => {

    const { mutate, isPending, isError } = useCreateMessage();

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        //@ts-ignore
        resolver: zodResolver(replySchema),
        defaultValues: {
            operation: 'add',
            operand: undefined
        }
    });

    const onSubmit = (data: ReplyFormInput) => {
        mutate({
            threadId: threadId,
            parentMessageId: parentMessageId,
            ...data,
        }, {
            onSuccess: () => {
                reset();
                onReplied()
            }
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-4 p-3'>
                {isError && (
                    <p className='text-red-500 text-sm mb-2'>Failed to post reply. Please try again.</p>
                )}

                <div className='mb-3'>
                    <label htmlFor={`operation-${parentMessageId}`}>Operation</label>
                    <Select
                        id={`operation-${parentMessageId}`}
                        {...register('operation')}
                    >
                        <option value="add">Add (+)</option>
                        <option value="sub">Subtract (-)</option>
                        <option value="mul">Multiply (*)</option>
                        <option value="div">Divide (/)</option>
                    </Select>
                    {errors.operation && <p className='text-red-500 text-xs mt-1'>{errors.operation.message}</p>}
                </div>

                <div className='mb-3'>
                    <label htmlFor={`operand-${parentMessageId}`}>Operand</label>
                    <Input
                        id={`operand-${parentMessageId}`}
                        type="text"
                        placeholder="e.g., 10 or 3.14"
                        {...register('operand')}
                    />
                    {errors.operand && <p className='text-red-500 text-xs mt-1'>{errors.operand.message}</p>}
                </div>

                <Button
                    type="submit"
                    disabled={isPending}
                >
                    {isPending ? 'Posting...' : 'Post Reply'}
                </Button>
            </form>
        </div>
    )
}

export default ReplyForm