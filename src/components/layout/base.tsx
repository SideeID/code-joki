import { Navbar } from '../navbar';
import { Footer } from '../footer';
import { ScrollToTop } from '../ui/scroll-to-top';
import SchemaOrg from './schema-org';
import { PreloadCriticalAssets } from './preload-assets';

export const Baseayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PreloadCriticalAssets />
      <Navbar />
      <SchemaOrg />
      <main className='min-h-svh border-x max-w-screen-xl mx-auto'>
        {children}
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
};
