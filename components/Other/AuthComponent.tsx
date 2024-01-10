import Link from "next/link";
import { AuthForm } from "./AuthForm";


const AuthComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Spana Portal
        </h1>
        <p className="text-sm text-muted-foreground">
          Login with your work email to access your portal
        </p>
      </div>
      <AuthForm />
      <p className="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to the company{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  </div>
  )
}

export default AuthComponent