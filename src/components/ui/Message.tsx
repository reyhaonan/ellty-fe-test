import { useState } from 'react';
import ReplyForm from '../form/ReplyForm';
import Button from './Button';
import { format } from 'date-fns';
import { useAuth } from '@/hooks/useAuth';
import { humanReadableOperationLookup } from '@/utils/humanReadableOperationLookup';
import type { Operation } from '@/types/Operation';

interface Message {
    id: number;
    threadId: number;
    authorUsername: string;
    operation: Operation;
    operand: string;
    resultNumber: string;
    depth: number;
    replies: Message[];
    createdAt: string
}

interface MessageProps {
    message: Message;
}

export const Message = ({ message }: MessageProps) => {
    const [isReplying, setIsReplying] = useState(false);
    const { user } = useAuth();

    return (
        <>
            <div style={{ marginLeft: `${message.depth * 2}rem` }} className='border border-border p-4 my-2 rounded-lg'>
                <div className="">
                    <span className='text-xs opacity-50'><b>{message.authorUsername}</b> at {format(message.createdAt, "dd-MM-yyyy hh:mm:ss")}</span>
                    <h4 className='font-semibold text-xl'>{humanReadableOperationLookup[message.operation]} {message.operand} = <u>{message.resultNumber}</u></h4>
                </div>

                {!!user && <Button
                    onClick={() => setIsReplying(!isReplying)}
                    variant='outline'
                    size='sm'
                >
                    {isReplying ? 'Cancel' : 'Reply'}
                </Button>}

                {isReplying && (
                    <ReplyForm parentMessageId={message.id} threadId={message.threadId} onReplied={function (): void {
                        setIsReplying(false)
                    }} />
                )}

            </div>
            {message.replies.map((reply) => (
                <Message key={reply.id} message={reply} />
            ))}
        </>
    );
};