"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

const LINKS = [
  { label: "Home", path: "home" },
  { label: "Modules", path: "modules" },
  { label: "Piazza", path: "piazza" },
  { label: "Zoom", path: "zoom" },
  { label: "Assignments", path: "assignments" },
  { label: "Quizzes", path: "quizzes" },
  { label: "Grades", path: "grades" },
  { label: "People", path: "people/table" },
  { segment: "announcements", id: "wd-course-announcements-link", label: "Announcements" },
] as const;

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      {LINKS.map((link) => {
        const segment = "path" in link ? link.path : link.segment;
        const id = "id" in link ? link.id : `wd-course-${link.label.toLowerCase()}-link`;
        const href = `/courses/${cid}/${segment}`;
        const active = pathname.includes(href);
        return (
          <Link
            key={link.label}
            href={href}
            id={id}
            className={
              active
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}