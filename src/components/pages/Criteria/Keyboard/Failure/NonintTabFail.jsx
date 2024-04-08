import React from "react";
import IssueFailure from "../../../../layout/issueFailure";

const itemDescription = "Keyboard - Non Interactive Tab Index Failures";

export default () => (
  <IssueFailure
    itemContent={
      <ul>
        <li class="list-item">
          <p tabindex="0">Paragraph</p>
        </li>
        <li class="list-item">
          <h2 tabindex="0">Heading 2</h2>
        </li>
        <li class="list-item">
          <h3 tabindex="0">Heading 3</h3>
        </li>
        <li class="list-item">
          <section tabindex="0">
            <h4>A Section</h4>
            <p>This is a section with a heading and a paragraph inside.</p>
          </section>
        </li>
        <li class="list-item">
          <article tabindex="0">
            <h5>An Article</h5>
            <p>This is an article with a heading and a paragraph inside.</p>
          </article>
        </li>
        <li class="list-item">
          <aside tabindex="0">An Aside</aside>
        </li>
        <li class="list-item">
          <figure tabindex="0">A Figure</figure>
        </li>
        <li class="list-item">
          <footer tabindex="0">A Footer</footer>
        </li>
        <li class="list-item">
          <header tabindex="0">A Header</header>
        </li>
        <li class="list-item">
          <main tabindex="0">Main Content</main>
        </li>
        <li class="list-item">
          <nav tabindex="0">Navigation</nav>
        </li>
        <li class="list-item">
          <table class="table" tabindex="0">
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
            </tr>
          </table>
        </li>
        <li class="list-item">
          <blockquote tabindex="0">
            A long quotation from a notable source
          </blockquote>
        </li>
        <li class="list-item">
          <code tabindex="0">let x = 10;</code>
        </li>
        <li class="list-item">
          <pre tabindex="0">const y = 20;\nlet z = x + y;</pre>
        </li>
        <li class="list-item">
          <time datetime="2023-07-09" tabindex="0">
            July 9, 2023
          </time>
        </li>
        <li class="list-item">
          <mark tabindex="0">Highlighted text</mark>
        </li>
        <li class="list-item">
          <progress value="70" max="100" tabindex="0"></progress>
          <span> 70% completed</span>
        </li>
        <li class="list-item">
          <meter value="2" min="0" max="10" tabindex="0"></meter>
          <span> 2 out of 10</span>
        </li>
      </ul>
    }
    itemDescription={itemDescription}
  />
);
