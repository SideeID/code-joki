import { Baseayout } from '@/components/layout/base';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Baseayout>{children}</Baseayout>
    </>
  );
}
