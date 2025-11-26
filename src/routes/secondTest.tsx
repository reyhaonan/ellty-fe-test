import CreateThreadForm from '@/components/form/CreateThreadForm';
import { AuthModal } from '@/components/modal/AuthModal';
import Header from '@/components/ui/Header';
import { ThreadList } from '@/components/ui/Threadlist'
import { useAuth } from '@/hooks/useAuth';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/secondTest')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useAuth();
  return <div>
    <Header openAuthModal={() => setIsAuthModalOpen(true)} />
    {!!user &&
      <CreateThreadForm />
    }
    <ThreadList />
    <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
  </div>
}
