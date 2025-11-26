import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterInput } from '@/schemas/authSchema';
import { useAuth } from '@/hooks/useAuth';
import Button from '../ui/Button';
import Input from '../ui/Input';

type RegisterFormProps = {
    onClose: () => void;
};

export const RegisterForm = ({ onClose }: RegisterFormProps) => {
    const { register, isRegistering } = useAuth();
    const { handleSubmit, register: registerField, formState: { errors } } = useForm<RegisterInput>({
        //@ts-ignore
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = (data: RegisterInput) => {
        register(data, {
            onSuccess: () => onClose(), // Close modal on success
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Register</h2>
            <div>
                <label htmlFor="reg-username">Username</label>
                <Input id="reg-username" {...registerField('username')} />
                {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
            </div>
            <div>
                <label htmlFor="reg-password">Password</label>
                <Input id="reg-password" type="password" {...registerField('password')} />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>
            <Button type="submit" disabled={isRegistering}>
                {isRegistering ? 'Registering...' : 'Register'}
            </Button>
        </form>
    );
};