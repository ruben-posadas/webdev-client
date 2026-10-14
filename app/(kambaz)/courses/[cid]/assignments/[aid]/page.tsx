import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="space-y-4">
      {/* Assignment Name */}
      <div>
        <label htmlFor="wd-name" className="mb-1 block text-sm font-medium text-gray-700">
          Assignment Name
        </label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className="block w-full border border-gray-300 px-3 py-2 text-sm"/>
      </div>
      {/* Assignment Description */}
      <div>
        <textarea
          id="wd-description"
          rows={4}
          className="block w-full border border-gray-300 px-3 py-2 text-sm"
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
        />
      </div>
      {/* Assignment Points */}
      <div className="grid grid-cols-[10rem_1fr] items-start gap-4">
        <label htmlFor="wd-points" className="pt-2 text-right text-sm font-medium text-gray-700">
          Points
        </label>
        <input id="wd-points" type="number" defaultValue={100} className="block w-full border border-gray-300 px-3 py-2 text-sm"/>
      </div>
      {/* Assignment Group */}
      <div className="grid grid-cols-[10rem_1fr] items-start gap-4">
        <label htmlFor="wd-group" className="pt-2 text-right text-sm font-medium text-gray-700">
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className="block w-full border border-gray-300 px-3 py-2 text-sm">
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      {/* Display Grade as */}
      <div className="grid grid-cols-[10rem_1fr] items-start gap-4">
        <label htmlFor="wd-display-grade-as" className="pt-2 text-right text-sm font-medium text-gray-700">
          Display Grade as
        </label>
        <select id="wd-display-grade-as" defaultValue="Percentage" className="block w-full border border-gray-300 px-3 py-2 text-sm">
          <option value="Percentage">Percentage</option>
          <option value="Points">Points</option>
          <option value="Complete/Incomplete">Complete/Incomplete</option>
        </select>
      </div>
      {/* Submission Type */}
      <div className="grid grid-cols-[10rem_1fr] items-start gap-4">
        <label htmlFor="wd-submission-type" className="pt-2 text-right text-sm font-medium text-gray-700">
          Submission Type
        </label>
        <div>
          <fieldset className="mt-3 rounded-md border border-gray-300 p-4">
          <select id="wd-submission-type" defaultValue="Online" className="block w-full border border-gray-300 px-3 py-2 text-sm">
            <option value="Online">Online</option>
            <option value="On Paper">On Paper</option>
            <option value="No Submission">No Submission</option>
          </select>
          <p className="mb-2 mt-4 text-sm font-bold">Online Entry Options</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="wd-text-entry" className="h-4 w-4 accent-red-600"/>
                <label htmlFor="wd-text-entry" className="text-sm">
                  Text Entry
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="wd-website-url" className="h-4 w-4 accent-red-600"/>
                <label htmlFor="wd-website-url" className="text-sm">
                  Website URL
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="wd-media-recordings" className="h-4 w-4 accent-red-600"/>
                <label htmlFor="wd-media-recordings" className="text-sm">
                  Media Recordings
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="wd-student-annotation" className="h-4 w-4 accent-red-600"/>
                <label htmlFor="wd-student-annotation" className="text-sm">
                  Student Annotation
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="wd-file-upload" className="h-4 w-4 accent-red-600"/>
                <label htmlFor="wd-file-upload" className="text-sm">
                  File Uploads
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      {/* Assign */}
      <div className="grid grid-cols-[10rem_1fr] items-start gap-4">
        <span className="pt-2 text-right text-sm font-medium text-gray-700">Assign</span>
        <fieldset className="space-y-4 rounded-md border border-gray-300 p-4">
          <div>
            <label htmlFor="wd-assign-to" className="mb-1 block text-sm font-bold">
              Assign to
            </label>
            <input id="wd-assign-to" defaultValue="Everyone" className="block w-full border border-gray-300 px-3 py-2 text-sm" />
          </div>

          <div>
            <label htmlFor="wd-due-date" className="mb-1 block text-sm font-bold">
              Due
            </label>
            <input id="wd-due-date" type="date" defaultValue="2024-05-13" className="block w-full border border-gray-300 px-3 py-2 text-sm" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="wd-available-from" className="mb-1 block text-sm font-bold">
                Available from
              </label>
              <input id="wd-available-from" type="date" defaultValue="2024-05-06" className="block w-full border border-gray-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="mb-1 block text-sm font-bold">
                Until
              </label>
              <input id="wd-available-until" type="date" defaultValue="2024-05-20" className="block w-full border border-gray-300 px-3 py-2 text-sm" />
            </div>
          </div>
        </fieldset>
      </div>
      {/* Sample Notes */}
      <div>
        <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm font-medium text-gray-700">
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          rows={4}
          className="block w-full border border-gray-300 px-3 py-2 text-sm"
        />
      </div>
      <hr className="border-gray-200" />
      {/* Cancel/Save */}
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
        >
          Save
        </Link>
      </div>
    </div>
  );
}