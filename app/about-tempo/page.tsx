import { Button } from "@/lib/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";
import { Badge } from "@/lib/components/ui/badge";
import { ArrowRight, Zap, Shield, BarChart3, SparklesIcon } from "lucide-react";
import Link from "next/link";
import SignInButton from "@/lib/auth/components/sign-in-btn";

export default function AboutTempo() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-12 px-4 text-center">
        <Badge variant="secondary" className="mb-4">
          Introducing Tempo <SparklesIcon />
        </Badge>
        <h1 className="text-5xl font-bold tracking-tight text-foreground max-w-3xl mx-auto text-balance">
          Make every day count with reflection.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto text-pretty">
          This is your space to pause, reflect, and capture what you're working
          on, learning, and building. Track your daily wins, work through
          challenges, and create a meaningful record of how you're growing.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <SignInButton />
          <Link href="/about-tempo/demo">
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="py-6 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              What Tempo can do for you
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Lorem Ipsum</CardTitle>
                <CardDescription>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Dolor Amet</CardTitle>
                <CardDescription>
                  Sed quia consequuntur magni dolores eos qui ratione
                  voluptatem.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                  consectetur.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Consectetur</CardTitle>
                <CardDescription>
                  Ut enim ad minima veniam quis nostrum exercitationem ullam.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="p-4">
        <div className="max-w-4xl mx-auto text-center bg-secondary rounded-2xl p-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet.
          </p>
        </div>
      </section>
    </main>
  );
}
