export const observeAnimation = (fn, ratio, unobserve) => {
	const targets = document.querySelectorAll('.js-animation')
	
	const observer = new IntersectionObserver((entries) => {
	  entries.forEach((entry) => {
		if (entry.isIntersecting) {
		  fn(entry.target)
		  if (unobserve) {
			observer.unobserve(entry.target)
		  }
		}
	  })
	}, {
	  threshold: ratio,
	  rootMargin: '50px 0px'
	})
  
	targets.forEach((el) => observer.observe(el))
}
