import Link from "next/link";
import React from "react";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";
// import { createClient } from "@/prismicio";
// import { PrismicNextLink } from "@prismicio/next";

export async function Header() {
  //   const client = createClient();
  //   const settings = await client.getSingle("settings");

  return (
    <header className="header absolute left-0 right-0 top-0 z-50 h-[clamp(8rem,5vw+6rem,12rem)] px-[clamp(1rem,3vw,1.5rem)] py-[clamp(1rem,2vw+0.5rem,1.5rem)] md:h-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto,auto] items-center gap-6 md:grid-cols-[1fr,auto,1fr]">
        <Link href="/" className="justify-self-start">
          <Logo className="text-brand-purple h-[clamp(3rem,4vw+2rem,5rem)]" />
        </Link>
        <nav
          aria-label="Main"
          className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
        >
          <ul className="flex flex-wrap items-center justify-center gap-8">
            {/* {settings.data.navigation.map((item) => (
              <li key={item.link.text}>
                <PrismicNextLink field={item.link} className="~text-lg/xl" />
              </li>
            ))} */}
            <li>board</li>
          </ul>
        </nav>

        <div className="justify-self-end">
          <ButtonLink href="" icon="cart" color="purple" aria-label="Cart (1)">
            <span className="md:hidden">1</span>
            <span className="hidden md:inline">Cart (1)</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
