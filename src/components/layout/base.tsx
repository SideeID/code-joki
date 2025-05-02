import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { ScrollToTop } from "../ui/scroll-to-top";

export const Baseayout = ({
   children
}: {
   children: React.ReactNode
}) => {
   return (
      <>
      <Navbar />
      <main className="min-h-svh border-x max-w-screen-xl mx-auto">
         {children}
      </main>
      <ScrollToTop />
      <Footer />
      </>
   )
};
