"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex  flex-col  justify-between w-fit h-screen bg-dark-1 p-6 pt-28 max-sm:hidden lg:w-[]264px text-white">
      <div className=" flex flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route && pathname.startsWith(link.route);

          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                { "bg-blue-1": isActive }
              )}
            >
              <Image
              src={link.imageURL}
              alt={`${link.label} icon`}
              height={24}
              width={24}
            
                />
          <p className="font-semibold max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
