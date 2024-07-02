import { LoginForm } from "@/components/Forms";
import Image from "next/image";
export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-slate-300 p-24 pt-[6.8125rem]">
      <Image src="/images/auth-bg.png" alt="Tools background" fill />
      <LoginForm />
    </main>
  );
}
