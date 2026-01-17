"use client";
import { Button } from "@/lib/components/ui/button";

export default function SignInButton() {
  function handleSignIn() {
    return;
  }
  return (
    <Button onClick={handleSignIn} size={"lg"}>
      Sign into Tempo
    </Button>
  );
}
