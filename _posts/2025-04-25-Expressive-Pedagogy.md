<style>
.timeline-horizontal {
  overflow-x: auto;
  white-space: nowrap;
  padding: 2rem 1rem;
  background-color: #f9f9f9;
  position: relative;
}
.timeline-horizontal::before {
  content: '';
  position: absolute;
  top: 60px;
  left: 0;
  height: 4px;
  width: 100%;
  background: #ddd;
  z-index: 0;
}
.timeline-card {
  display: inline-block;
  vertical-align: top;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  margin: 0 1rem;
  padding: 1rem;
  width: 220px;
  position: relative;
  z-index: 1;
}
.timeline-card::before {
  content: '';
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  background-color: #3498db;
  border: 3px solid #fff;
  border-radius: 50%;
  z-index: 2;
}
.timeline-card h3 {
  margin-top: 0;
  font-size: 1.1rem;
  color: #2c3e50;
}
.timeline-card p {
  font-size: 0.9rem;
  color: #555;
}
</style>

<div class="timeline-horizontal">
  <div class="timeline-card">
    <h3>2020 – PhD Start</h3>
    <p>Began doctoral research in English Literature and Rhetoric.</p>
  </div>
  <div class="timeline-card">
    <h3>2022 – First Article</h3>
    <p>Published a peer-reviewed paper on digital rhetoric and memory.</p>
  </div>
  <div class="timeline-card">
    <h3>2023 – Built Website</h3>
    <p>Launched <a href="https://sarbagyakafle.com">sarbagyakafle.com</a> using Hyde and GitHub Pages.</p>
  </div>
  <div class="timeline-card">
    <h3>2025 – Dissertation Defense</h3>
    <p>Defended dissertation on rhetorical ethics in posthuman AI systems.</p>
  </div>
</div>
