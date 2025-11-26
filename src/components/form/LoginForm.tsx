import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginInput } from '@/schemas/authSchema';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/ui/Button';
import Input from '../ui/Input';

type LoginFormProps = {
    onClose: () => void;
};

export const LoginForm = ({ onClose }: LoginFormProps) => {
    const { login, isLoggingIn } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({
        // @ts-ignore
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginInput) => {
        login(data, {
            onSuccess: () => onClose(),
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <div>
                <label htmlFor="username">Username</label>
                <Input id="username" {...register('username')} />
                {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
            </div>
            <div>
                <label htmlFor="password" >Password</label>
                <Input id="password" type="password" {...register('password')} />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>
            <Button type="submit" disabled={isLoggingIn}>
                {isLoggingIn ? 'Logging in...' : 'Login'}
            </Button>
        </form>
    );
};