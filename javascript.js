document.addEventListener('DOMContentLoaded', function () {
  const targets = [
    ".mycover-textarea",
    ".mycover-textarea h2",
    ".mycover-textarea p",
    ".news-content",
    ".service-text01",
    ".service-text02",
    ".service-item",
    ".ceo",
    ".office-left",
    ".office-right",
    ".inquire-box"
  ];

  const elements = document.querySelectorAll(targets.join(', '));

  if (elements.length > 0) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
  }
});