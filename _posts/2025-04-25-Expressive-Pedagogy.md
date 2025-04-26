<style>
.timeline-container {
  position: relative;
  width: 100%;
  margin: 2rem 0;
  padding: 2rem 0;
}
.timeline-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px;
  height: 100%;
  background-color: #3498db;
  transform: translateX(-50%);
  z-index: 0;
}

.timeline-entry {
  width: 46%;
  padding: 1rem;
  position: relative;
  margin-bottom: 3rem;
  box-sizing: border-box;
}

.timeline-entry .content {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.timeline-entry::before {
  content: '';
  position: absolute;
  top: 20px;
  width: 16px;
  height: 16px;
  background: #3498db;
  border: 3px solid #fff;
  border-radius: 50%;
  z-index: 1;
}

.timeline-entry.left {
  float: left;
  clear: both;
  text-align: right;
}
.timeline-entry.left::before {
  right: -8px;
}

.timeline-entry.right {
  float: right;
  clear: both;
  text-align: left;
}
.timeline-entry.right::before {
  left: -8px;
}

/* Clearfix */
.timeline-container::after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-entry {
    width: 100%;
    float: none;
    text-align: left !important;
    padding-left: 3rem;
  }
  .timeline-entry::before {
    left: 16px !important;
    right: auto !important;
  }
  .timeline-container::before {
    left: 20px;
  }
}
</style>

<style>
/* Override Hyde's narrow post content for timeline */
.timeline-wrapper {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: #f9f9f9;
  padding: 2rem 0;
}
</style>

<div class="timeline-wrapper">
  <!-- your .timeline-container and timeline entries go here -->

<div class="timeline-container">

  <div class="timeline-entry left">
    <div class="content">
      <h3>Peter Elbow (1935–2025)</h3>
      <p>1968 – "A Method for Teaching Writing"<br>
         1973 – <em>Writing Without Teachers</em><br>
         1981 – <em>Writing With Power</em><br>
         1991 – "Toward a Phenomenology of Freewriting"<br>
         1994 – "About Voice in Writing"
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
</div>
