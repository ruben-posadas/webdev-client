export default function HeadingTags() {
  return (
    <div id="wd-h-tag">
      <h4>Heading Tags</h4>
      Text documents are often broken up into several sections and subsections.
      Each section is usually prefaced with a short title or heading that
      attempts to summarize the topic of the section it precedes. For instance
      this paragraph is preceded by the heading Heading Tags. The font of the
      section headings are usually larger and bolder than their subsection
      headings. This document uses headings to introduce topics such as HTML
      Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used
      to format plain text so that it renders in a browser as large headings.
      There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and
      h6. Tag h1 is the largest heading and h6 is the smallest heading. A{" "}
      <span id="wd-inline-span">span</span> sits in this sentence without
      starting a new line.

        <h1>Heading Level 1</h1>
        <h2>Heading Level 2</h2>
        <h3>Heading Level 3</h3>
        <h4>Heading Level 4</h4>
        <h5>Heading Level 5</h5>
        <h6>Heading Level 6</h6>

        <div id="wd-your-heading">
            <h4>Ruben P.</h4>
            I <span id="wd-your-span">like</span> to read books, rock climb, and code.
        </div>

        <div id="wd-ai-headings">
            <h4>Lab notes</h4>
            This section keeps a short record of progress made while working through the lab exercises.
            <h5>What I built</h5>
            A small set of practice components demonstrating how heading tags are structured and nested.
            <h6>Next step</h6>
            Review the remaining lab sections and continue building out the practice examples.
        </div>

    </div>


    
  );
}