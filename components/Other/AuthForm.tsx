"use client";


import { Icons } from "@/components/Other/icons";
import { Button } from "@/components/ui/button";



export function AuthForm() {
  return (
    <div className="grid gap-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Continue with
          </span>
        </div>
      </div>

      <Button variant="outline" type="button">
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
    </div>
  );
}
