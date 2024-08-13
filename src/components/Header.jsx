"use client";

import {
    Menu,
    Package2,
    Search,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

export function Header() {
    return (
        <header className="sticky z-[100] bg-white top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-4">
            <nav className="hidden flex-col gap-4 text-lg font-medium md:flex md:flex-row md:items-center md:gap-4 md:text-sm lg:gap-4">
                <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                >
                    <span className="text-2xl">dsc</span>
                </Link>
            </nav>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link href="#" className="hover:text-foreground">
                            Dashboard
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Orders
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Products
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Customers
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            Analytics
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="ml-auto flex-1 sm:flex-initial hidden">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                        />
                    </div>
                </form>
            </div>

            <SignedOut>
                <Button disabled>
                    <SignInButton forceRedirectUrl="/dashboard" />
                </Button>
                <Button disabled>
                    <SignUpButton forceRedirectUrl="/dashboard" />
                </Button>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </header>
    );
}
