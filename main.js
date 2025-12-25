// Main JavaScript for all pages

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle")
  const navMenu = document.getElementById("navMenu")

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")

      // Animate menu toggle button
      const spans = menuToggle.querySelectorAll("span")
      if (navMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(6px, 6px)"
        spans[1].style.opacity = "0"
        spans[2].style.transform = "rotate(-45deg) translate(6px, -6px)"
      } else {
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      }
    })

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        const spans = menuToggle.querySelectorAll("span")
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      })
    })
  }

  // Navbar scroll effect
  const navbar = document.getElementById("navbar")
  let lastScroll = 0

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 100) {
      navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)"
    } else {
      navbar.style.boxShadow = "none"
    }

    lastScroll = currentScroll
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#" && href.length > 1) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          const offsetTop = target.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all cards and sections
  document.querySelectorAll(".service-card, .solution-card, .value-card, .platform-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})