import { useThreadMessages } from '@/hooks/useThreadMessages';
import { Message } from './Message';

export const MessageList = ({ threadId }: { threadId: number }) => {

    const { data, error, isLoading, isFetching } = useThreadMessages(threadId);

    if (isLoading) return <div>Loading messages...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const { messages } = data?.data || { messages: [] };

    return (
        <div>
            {isFetching && <div>Updating...</div>}
            {messages.map((msg: any) => (
                <Message key={msg.id} message={msg} />
            ))}
        </div>
    );
};