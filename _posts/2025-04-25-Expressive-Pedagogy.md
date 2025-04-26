<style>
.timeline-container {
  position: relative;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem 0;
}
.timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background-color: #3498db;
}
.timeline-entry {
  position: relative;
  width: 50%;
  padding: 1rem 2rem;
  box-sizing: border-box;
}
.timeline-entry .content {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
}
.timeline-entry h3 {
  margin-top: 0;
  color: #2c3e50;
}
.timeline-entry p {
  font-size: 0.95rem;
  color: #555;
}
.timeline-entry::before {
  content: '';
  position: absolute;
  top: 20px;
  width: 16px;
  height: 16px;
  background: #3498db;
  border-radius: 50%;
  border: 3px solid #fff;
  z-index: 1;
}
.timeline-entry.left {
  left: 0;
  text-align: right;
}
.timeline-entry.left::before {
  right: -8px;
}
.timeline-entry.right {
  left: 50%;
  text-align: left;
}
.timeline-entry.right::before {
  left: -8px;
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-entry {
    width: 100%;
    left: 0 !important;
    text-align: left !important;
    padding-left: 4rem;
  }
  .timeline-entry::before {
    left: 20px;
  }
}
</style>

<div class="timeline-container">

  <div class="timeline-entry left">
    <div class="content">
      <h3>Peter Elbow (1935–2025)</h3>
      <p>1968 – "A Method for Teaching Writing"<br>
         1973 – <em>Writing Without Teachers</em><br>
         1981 – <em>Writing With Power</em><br>
         1991 – "Toward a Phenomenology of Freewriting"<br>
         1994 – "Introduction: About Voice in Writing"
      </p>
    </div>
  </div>

  <div class="timeline-entry right">
    <div class="content">
      <h3>Donald Murray (1924–2006)</h3>
      <p>1998 – <em>Write to Learn</em><br>
         1998 – <em>The Craft of Revision</em>
      </p>
    </div>
  </div>

  <div class="timeline-entry left">
    <div class="content">
      <h3>James Britton</h3>
      <p>1970 – <em>Language and Writing</em><br>
         1978 – <em>The Development of Writing Abilities</em>
      </p>
    </div>
  </div>

  <div class="timeline-entry right">
    <div class="content">
      <h3>bell hooks</h3>
      <p>1993 – <em>Sisters of the Yam</em><br>
         1994 – <em>Teaching to Transgress</em>
      </p>
    </div>
  </div>

</div>
