<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<style>
.timeline {
  position: relative;
  margin: 2rem 0;
  padding-left: 30px;
  border-left: 3px solid #3498db;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease-in-out;
}

.timeline-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline-item::before {
  content: '';
  position: absolute;
  top: 0.5rem;
  left: -11px;
  width: 16px;
  height: 16px;
  background: #3498db;
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #3498db;
}

.timeline-content {
  background: #fdfdfd;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem 1.2rem;
  font-size: 0.95rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.timeline-content h3 {
  margin-top: 0;
  font-size: 1.1rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.timeline-content h3 i {
  color: #3498db;
  font-size: 1rem;
}

  .timeline-content h3 {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.timeline-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #3498db;
}

</style>

<div class="timeline">

  <div class="timeline-item">
    <div class="timeline-content">
      <h3>
        <img ![lecture](https://github.com/user-attachments/assets/69d202c4-e579-45e5-a4bc-1c13aa0bc3f2)
 alt="Peter Elbow" class="timeline-avatar"> Peter Elbow (1935–2025)
      </h3>
      <p>1968 – "A Method for Teaching Writing"<br>
         1973 – <em>Writing Without Teachers</em><br>
         1981 – <em>Writing With Power</em><br>
         1991 – "Toward a Phenomenology of Freewriting"<br>
         1994 – "About Voice in Writing"
      </p>
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-content">
      <h3><i class="fas fa-book-open"></i> Donald Murray (1924–2006)</h3>
      <p>1998 – <em>Write to Learn</em><br>
         1998 – <em>The Craft of Revision</em>
      </p>
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-content">
      <h3><i class="fas fa-lightbulb"></i> James Britton</h3>
      <p>1970 – <em>Language and Writing</em><br>
         1978 – <em>The Development of Writing Abilities</em>
      </p>
    </div>
  </div>

  <div class="timeline-item">
    <div class="timeline-content">
      <h3><i class="fas fa-chalkboard-teacher"></i> bell hooks</h3>
      <p>1993 – <em>Sisters of the Yam</em><br>
         1994 – <em>Teaching to Transgress</em>
      </p>
    </div>
  </div>

</div>

<script>
// Simple scroll animation
const items = document.querySelectorAll('.timeline-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

items.forEach(item => observer.observe(item));
</script>
