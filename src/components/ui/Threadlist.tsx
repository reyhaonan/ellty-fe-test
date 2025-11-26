import { useState } from 'react';
import { useThreads } from '@/hooks/useThreads';
import { MessageList } from './MessageList';
import ReplyForm from '../form/ReplyForm';
import Button from './Button';
import { format } from 'date-fns';
import { useAuth } from '@/hooks/useAuth';

export const ThreadList = () => {
    const { data, error, isLoading } = useThreads();
    const [expandedThreadId, setExpandedThreadId] = useState<number | null>(null);
    const [isReplying, setIsReplying] = useState(false);

    const { user } = useAuth();

    if (isLoading) return <div>Loading threads...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleThreadClick = (threadId: number) => {
        setExpandedThreadId(prevId => (prevId === threadId ? null : threadId));
        setIsReplying(false)
    };

    return (
        <div className='px-4'>
            <ul className='space-y-4'>
                {data?.data.threads.map((thread) => (
                    <li
                        key={thread.id}
                        className='border border-border overflow-hidden rounded-md'
                    >
                        <div
                            onClick={() => handleThreadClick(thread.id)}
                            className='cursor-pointer p-4 flex justify-between items-center select-none'
                        >
                            <div className="">
                                <span className='text-xs opacity-50'><b>{thread.creatorUsername}</b> at {format(thread.createdAt, "dd-MM-yyyy HH:mm:ss")}</span>
                                <h3 className='font-bold text-2xl'>{thread.startingNumber}</h3>
                            </div>
                            <span className={`transition-transform ${expandedThreadId === thread.id ? "rotate-90" : ""}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </span>
                        </div>

                        {expandedThreadId === thread.id && (
                            <div className='pb-4 px-4'>
                                {user && <Button
                                    onClick={() => setIsReplying(!isReplying)}
                                    variant='outline'
                                    size='sm'
                                >
                                    {isReplying ? 'Cancel' : 'Reply'}
                                </Button>}

                                {isReplying && (
                                    <ReplyForm threadId={thread.id} onReplied={() => {
                                        setIsReplying(false)
                                    }} />
                                )}
                                <MessageList threadId={thread.id} />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};