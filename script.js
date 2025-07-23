function showArticle(articleId) {
    document.getElementById("cards-section").style.display = "none";
    document.querySelectorAll(".article-section").forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById(articleId).style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  function goBack() {
    document.querySelectorAll(".article-section").forEach((section) => {
      section.style.display = "none";
    });
    document.getElementById("cards-section").style.display = "flex";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const toggleBtn = document.getElementById("menu-toggle");
      const navbar = document.getElementById("navbar");
  
      toggleBtn.addEventListener("click", () => {
        navbar.classList.toggle("show");
      });