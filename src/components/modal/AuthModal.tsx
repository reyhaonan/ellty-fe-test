import { useState } from 'react';
import { LoginForm } from '@/components/form/LoginForm';
import { RegisterForm } from '@/components/form/RegisterForm';

type AuthModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
    const [isLoginView, setIsLoginView] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-80" onClick={onClose}></div>
            <div className="bg-white p-8 rounded-lg shadow-xl w-96 relative">
                <button
                    onClick={onClose}
                    className="absolute top-1 right-2 text-2xl"
                >
                    &times;
                </button>

                <div className="flex justify-center mb-4">
                    <button
                        onClick={() => setIsLoginView(true)}
                        className={`pb-2 px-4 ${isLoginView ? 'border-b-2 border-primary font-semibold' : ''}`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setIsLoginView(false)}
                        className={`pb-2 px-4 ${!isLoginView ? 'border-b-2 border-primary font-semibold' : ''}`}
                    >
                        Register
                    </button>
                </div>

                {isLoginView ? <LoginForm onClose={onClose} /> : <RegisterForm onClose={() => {
                    setIsLoginView(true)
                }} />}
            </div>
        </div>
    );
};