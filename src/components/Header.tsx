import Link from "next/link";
import React from "react";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="header absolute left-0 right-0 top-0 z-50 h-[clamp(8rem,5vw+6rem,12rem)] px-[clamp(1rem,3vw,1.5rem)] py-[clamp(1rem,2vw+0.5rem,1.5rem)] md:h-32">
      <div
        className="mx-auto
      grid
      w-full
      max-w-6xl
      grid-cols-2
      grid-rows-[auto_auto]
      items-center
      gap-6
      md:grid-cols-[1fr,auto,1fr]
      md:grid-rows-1
    "
      >
        {/* Лого слева, первая строка, первая колонка */}
        <Link href="/" className="justify-self-start row-start-1 col-start-1">
          <Logo className="text-brand-purple h-[clamp(3rem,4vw+2rem,5rem)]" />
        </Link>

        {/* Кнопка справа, первая строка, вторая колонка */}
        <div className="justify-self-end row-start-1 col-start-2 md:col-start-3">
          <ButtonLink href="" icon="cart" color="purple" aria-label="Cart (1)">
            <span className="md:hidden">1</span>
            <span className="hidden md:inline">Cart (1)</span>
          </ButtonLink>
        </div>

        {/* Навигация по центру, вторая строка, занимает обе колонки */}
        <nav
          aria-label="Main"
          className="col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
        >
          <ul className="flex flex-wrap items-center justify-center gap-8">
            {settings.data.navigation.map((item) => (
              <li key={item.link.text}>
                <PrismicNextLink
                  field={item.link}
                  className="text-[clamp(1rem,1.2vw+0.5rem,1.125rem)] leading-[clamp(1.1rem,1.5vw+0.5rem,1.25rem)]"
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
