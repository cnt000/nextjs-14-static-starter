"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log("🚀 ~ pathname:", pathname);

  return (
    <section>
      <div>
        <ul>
          <li className={pathname == "/page1/asset-sub" ? "active" : ""}>
            <Link href="/page1/asset-sub">asset-sub</Link>
          </li>
          <li className={pathname == "/page1/asset-sub2" ? "active" : ""}>
            <Link href="/page1/asset-sub2">asset-sub 2</Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </section>
  );
}
