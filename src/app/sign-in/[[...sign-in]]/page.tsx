import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Sign In - Pinged",
  description: "Connect And Share Around The World",
};

export default function Page() {
  return (
    <div className="h-[calc(100vh-96px)] flex items-center justify-center">
      <SignIn />
    </div>
  );
}
