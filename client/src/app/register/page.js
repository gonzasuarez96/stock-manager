import { RegisterForm } from "@/components/Forms";
import Image from "next/image";
export default function Page() {
  return (
    <main className="relative z-0 flex min-h-screen flex-col items-center justify-between bg-slate-300 p-24">
      <Image src="/images/auth-bg.png" alt="Tools background" fill />
      <RegisterForm />
    </main>
  );
}
