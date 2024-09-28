## Horizontal Scrollable Timeline

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-content">
      <h3>2020</h3>
      <p>Started my journey in web development.</p>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-content">
      <h3>2021</h3>
      <p>Launched my first personal website.</p>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-content">
      <h3>2022</h3>
      <p>Started contributing to open source.</p>
    </div>
  </div>
  
  <div class="timeline-item">
    <div class="timeline-content">
      <h3>2023</h3>
      <p>Began working on advanced web development techniques.</p>
    </div>
  </div>
</div>

<style>
  .timeline {
    display: flex;
    overflow-x: scroll;
    padding: 20px;
    background-color: #f1f1f1;
  }

  .timeline-item {
    min-width: 200px;
    margin-right: 20px;
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .timeline-content h3 {
    margin-top: 0;
    font-size: 1.2em;
    color: #333;
  }

  .timeline-content p {
    font-size: 0.9em;
    color: #666;
  }

  /* Optional: Hide scrollbar */
  .timeline {
    scrollbar-width: none; /* For Firefox */
  }
  .timeline::-webkit-scrollbar {
    display: none; /* For Chrome, Safari, and Edge */
  }
</style>
