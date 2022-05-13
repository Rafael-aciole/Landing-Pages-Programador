window.addEventListener('scroll', onScroll)


function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(profile)
  activateMenuAtCurrentSection(projects)
  activateMenuAtCurrentSection(contact)
}

function showNavOnScroll() {
  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  } else {    
    navigation.classList.add('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
  }
  
  function closeMenu() {
    document.body.classList.remove('menu-expanded')
  }

  function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + innerHeight/2
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    const sectionEndsAt = sectionTop +sectionHeight
    const sectionEndPassesTargetLine = sectionEndsAt <= targetLine
  
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassesTargetLine
    
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  
    menuElement.classList.remove('active')
    if(sectionBoundaries){
      menuElement.classList.add('active')
    }
  }
  
  let valueDisplays = document.querySelectorAll('.numCount')
  let interval = 4000
  
  valueDisplays.forEach((valueDisplay)=>{
    let startValue = 0
    let endValue = parseInt(valueDisplay.getAttribute('data-val'))
    let duration = Math.floor(interval/endValue)
    let counter = setInterval(function(){
      startValue += 1
      valueDisplay.textContent = `+${startValue}`
      if(startValue == endValue){
        clearInterval(counter)
      }
    }, duration)
  })

