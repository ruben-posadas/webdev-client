import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: Readonly<{
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;
  return (
    <div>
      <ul id="wd-assignment-list">
        <AssignmentItem
          cid={cid}
          aid="123"
          title="A1 - ENV + HTML"
          details="Multiple Modules | Due May 13"
        />
        <AssignmentItem
          cid={cid}
          aid="124"
          title="A2 - CSS + BOOTSTRAP"
          details="Multiple Modules | Due May 20"
        />
        <AssignmentItem
          cid={cid}
          aid="125"
          title="A3 - JAVASCRIPT + REACT"
          details="Multiple Modules | Due May 27"
        />
      </ul>
    </div>
  );
}
