import {Header} from "@/components/layout/Header";
import { AuthProvider } from "@/app/auth/providers";
import FooterMain from "@/components/layout/FooterMain";


export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
       <AuthProvider>
    <div className="min-h-screen bg-white">
        <Header/>
      <main className="flex-1">
        {children}
      </main>
      <FooterMain/>
    </div>
  </AuthProvider>
  );
}
