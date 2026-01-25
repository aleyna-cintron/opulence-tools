import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import UserButton from "@/components/user-button";

export default function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar userButton={<UserButton />} />
      <main className="grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
