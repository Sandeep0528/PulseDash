// import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import { Providers } from './providers'; // Include your Redux/Theme providers here
import Sidebar from '@/components/layout/Siderbar';
import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-zinc-50 dark:bg-zinc-950">
        <Providers>
          <div className="flex">
            <Sidebar />
            <main className="flex-1 lg:pl-64">
              <Header />
              <div className="p-4 lg:p-8">
                {children}
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}