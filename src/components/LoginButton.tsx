import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

function LoginButton() {
  return (
    <SignInButton mode="modal">
      <button
        className="group relative flex items-center gap-2 px-5 py-2.5 
        bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
        hover:from-blue-600 hover:via-blue-700 hover:to-blue-800
        text-white rounded-xl font-semibold
        shadow-lg shadow-blue-500/30 
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-blue-600/40"
      >
        {/* Animated background glow */}
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/40 to-blue-600/40 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

        <LogIn className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        <span className="relative z-10">Sign In</span>
      </button>
    </SignInButton>
  );
}

export default LoginButton;
