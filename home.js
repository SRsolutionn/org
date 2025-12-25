// Home page specific JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Counter animation for stats
  const statNumbers = document.querySelectorAll(".stat-number")

  const animateCounter = (element) => {
    const target = Number.parseInt(element.getAttribute("data-target"))
    const duration = 2000 // 2 seconds
    const increment = target / (duration / 16) // 60fps
    let current = 0

    const updateCounter = () => {
      current += increment
      if (current < target) {
        element.textContent = Math.floor(current)
        requestAnimationFrame(updateCounter)
      } else {
        element.textContent = target
      }
    }

    updateCounter()
  }

  // Intersection Observer for stats
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains("animated")) {
          animateCounter(entry.target)
          entry.target.classList.add("animated")
        }
      })
    },
    { threshold: 0.5 },
  )

  statNumbers.forEach((stat) => {
    statsObserver.observe(stat)
  })

  // 3D card tilt effect
  const serviceCards = document.querySelectorAll(".service-card")

  serviceCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)"
    })
  })
})