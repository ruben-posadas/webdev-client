"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/labs", id: "wd-home-link", label: "Home", match: (p: string) => p === "/labs" },
  { href: "/labs/lab1", id: "wd-lab1-link", label: "Lab 1", match: (p: string) => p.endsWith("/lab1") || p.includes("/lab1/") },
  { href: "/labs/lab2", id: "wd-lab2-link", label: "Lab 2", match: (p: string) => p.includes("/lab2") },
  { href: "/labs/lab3", id: "wd-lab3-link", label: "Lab 3", match: (p: string) => p.includes("/lab3") },
  { href: "/", id: "wd-kambaz-link", label: "Kambaz", match: () => false },
  { href: "https://kambaz.dev/book/ch3", id: "wd-book-ch3-link", label: "Book Ch3", match: () => false },
] as const;

const activeStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  borderRadius: "4px",
  padding: "2px 8px",
  textDecoration: "none",
};

export default function TOC() {
  const pathname = usePathname() ?? "";
  return (
    <ul>
      {LINKS.map((link) => {
        const active = link.match(pathname);
        return (
          <li key={link.id}>
            <Link
              href={link.href}
              id={link.id}
              style={active ? activeStyle : undefined}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}



// import Link from "next/link";

// export default function TOC() {
//   return (
//     <nav id="wd-labs-toc">
//       <h4>Ruben Posadas</h4>
//       <ul>
//         <li>
//           <Link href="/labs" id="wd-home-link">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link href="/labs/lab1" id="wd-lab1-link">
//             Lab 1
//           </Link>
//         </li>
//         <li>
//           <Link href="/labs/lab2" id="wd-lab2-link">
//             Lab 2
//           </Link>
//         </li>
//         <li>
//           <Link href="/labs/lab3" id="wd-lab3-link">
//             Lab 3
//           </Link>
//         </li>
//         <li>
//           <Link href="/labs/lab4" id="wd-lab4-link">
//             Lab 4
//           </Link>
//         </li>
//         <li>
//           <Link href="/labs/lab3" id="wd-lab3-link">
//             Lab 5
//           </Link>
//         </li>
//         <li>
//           <Link href="/" id="wd-kambaz-link">
//             Kambaz
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }
