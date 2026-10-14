import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          Collapse All
        </button>
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          View Progress
        </button>
        <select
          defaultValue="publish-all"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
        >
          <option value="publish-all">Publish All</option>
        </select>
        <button
          type="button"
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          + Module
        </button>
      </div>

      <ul id="wd-modules" className="m-0 list-none p-0">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to the course</li>
            <li className="wd-content-item">Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to Web Development</li>
            <li className="wd-content-item">
              Creating an HTTP server with Node.js
            </li>
            <li className="wd-content-item">Creating a React Application</li>
          </Lesson>
        </Module>
        <Module title="Week 2, Lecture 2 - Styling User Interfaces with CSS and Tailwind">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Styling React Components with CSS
            </li>
            <li className="wd-content-item">
              Decorating Documents with React Icons
            </li>
            <li className="wd-content-item">
              Styling Webpages with Tailwind CSS
            </li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Chapter 2 — Styling User Interfaces with CSS and Tailwind
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">CSS Intro</li>
            <li className="wd-content-item">Colors</li>
            <li className="wd-content-item">Box Model</li>
          </Lesson>
        </Module>
        <Module title="Week 3, Lecture 3 - Creating Single Page Applications with JavaScript">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Introduction to JavaScript
            </li>
            <li className="wd-content-item">
              JavaScript Functions
            </li>
            <li className="wd-content-item">
              JavaScript Data Structures
            </li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Chapter 3 — Creating Single Page Applications with JavaScript
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Variables and Constants</li>
            <li className="wd-content-item">Variable Types</li>
            <li className="wd-content-item">Booleans and Conditionals</li>
          </Lesson>
        </Module>
        <Module title="Week 4, Lecture 4 - Managing Client State">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">
              Managing State and User Input with Forms
            </li>
            <li className="wd-content-item">
              Sharing State, Prop Drilling, and URLs
            </li>
            <li className="wd-content-item">React Context</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Chapter 4 — Managing Client State
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Click Events</li>
            <li className="wd-content-item">Passing Data and Functions</li>
            <li className="wd-content-item">useState and the Counter</li>
          </Lesson>
        </Module>

        <Module title="Sample module (AI)">
          <Lesson title="Sample lesson (AI)" />
        </Module>
      </ul>
    </div>
  );
}