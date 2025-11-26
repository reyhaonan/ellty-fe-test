import { useAuth } from '@/hooks/useAuth';
import Button from './Button';

type Props = {
    openAuthModal: () => void
}

const Header = ({ openAuthModal }: Props) => {
    const { user, logout, isLoggingOut } = useAuth();
    return (
        <header className="flex justify-between items-center mb-6 p-4 shadow">
            {user ? <b>Welcome back, {user.username}!</b> : <span></span>}
            <div>
                {user ? (
                    <div className="flex items-center space-x-4">
                        <Button
                            onClick={() => logout()}
                            disabled={isLoggingOut}
                            variant='danger'
                            size='sm'
                        >
                            {isLoggingOut ? 'Logging out...' : 'Logout'}
                        </Button>
                    </div>
                ) : (
                    <Button
                        onClick={() => openAuthModal()}
                        size='sm'
                    >
                        Login
                    </Button>
                )}
            </div>
        </header>
    )
}

export default Header