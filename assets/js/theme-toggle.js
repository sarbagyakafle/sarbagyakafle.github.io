(function() {
  const toggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark-mode");
      document.body.classList.add("dark-mode");
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.body.classList.remove("dark-mode");
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }

  applyTheme(currentTheme);

  toggleBtn.addEventListener("click", function() {
    const newTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  });
})();
