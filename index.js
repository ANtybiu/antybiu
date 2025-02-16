let threeD = true;
const background = document.createElement("div");
background.id = "background";
document.body.prepend(background);


const bodyContent = document.getElementById("body");


document.addEventListener("mousemove", (event) => {
  if(threeD){
  const xPercent = (event.clientX / window.innerWidth - 0.5) * 3;
  const yPercent = (event.clientY / window.innerHeight - 0.5) * 3; 


  background.style.transform = `translate(-50%, -50%) translate(${xPercent}rem, ${yPercent}rem) translateZ(-500px) rotateX(${-yPercent*3}deg) rotateY(${xPercent*3}deg)`;

  const floatIntensity = 2;
  bodyContent.style.transform = `translateZ(150rem) translate(${xPercent / floatIntensity}rem, ${yPercent / floatIntensity}rem)`;
  }
});
function toggle3D(){
    threeD = !threeD
      document.querySelector('.three-toggle').classList.toggle('three-off')
}
let audios = false;
function toggleAudio(){
  audios = !audios;
  if(audios){
    document.getElementById(`audio-icon`).src = `Speaker_Icon.svg.svg`
  }else{
    document.getElementById(`audio-icon`).src = `Mute_Icon.svg`
  }
}
const hovers = document.querySelectorAll('.hover-audio');
const audio = document.getElementById('hover-sound');
hovers.forEach((hoverName)=>{
  hoverName.addEventListener('mouseenter', ()=>{
    if(audios){
    audio.currentTime = 0; 
    audio.play();
    }
  })
})

function showExamples(){
  const examples = document.getElementById('examples-page');
  const nnn = document.querySelectorAll('.nnn');
  document.getElementById('logo').style.cursor = `pointer`;
  setTimeout(()=>{
    examples.style.display = `flex`;
  },300)
  setTimeout(()=>{
      examples.style.opacity = `1`;
      examples.style.marginLeft = `0`;
  }, 350)
  nnn.forEach((names)=>{
    names.style.transition = `opacity 0.25s`;
    names.style.opacity = `0`;
    setTimeout(()=>{
      
      names.style.display = `none`;
    },300)
  })
}
function hideExamples(){
  const examples = document.getElementById('examples-page');
  const nnn = document.querySelectorAll('.nnn');
  document.getElementById('logo').style.cursor = `default`;
  examples.style.opacity = `0`;
  setTimeout(()=>{
    examples.style.display = `none`;
  },300)
  setTimeout(()=>{
      
      examples.style.marginLeft = `10rem`;
  }, 315)
  nnn.forEach((names)=>{
    names.style.transition = `opacity 0.25s`;
    names.style.opacity = `1`;
    setTimeout(()=>{
      
      names.style.display = `flex`;
    },300)
  })
}

function showServices(){
  const examples = document.getElementById('services-page');
  const nnn = document.querySelectorAll('.nnn');
  document.getElementById('logo').style.cursor = `pointer`;
  setTimeout(()=>{
    examples.style.display = `flex`;
  },300)
  setTimeout(()=>{
      examples.style.opacity = `1`;
      examples.style.marginTop = `0`;
  }, 350)
  nnn.forEach((names)=>{
    names.style.transition = `opacity 0.25s`;
    names.style.opacity = `0`;
    setTimeout(()=>{
      
      names.style.display = `none`;
    },300)
  })
}
function hideServices(){
  const examples = document.getElementById('services-page');
  const nnn = document.querySelectorAll('.nnn');
  document.getElementById('logo').style.cursor = `default`;
  examples.style.opacity = `0`;
  setTimeout(()=>{
    examples.style.display = `none`;
  },300)
  setTimeout(()=>{
      examples.style.marginTop = `10rem`;
  }, 315)
  nnn.forEach((names)=>{
    names.style.transition = `opacity 0.25s`;
    names.style.opacity = `1`;
    setTimeout(()=>{
      
      names.style.display = `flex`;
    },300)
  })
}

function s(){
  const examples = document.getElementById('about-us-page');
  const nnn = document.querySelectorAll('.nnn');
  document.getElementById('logo').style.cursor = `pointer`;
  setTimeout(()=>{
    examples.style.display = `block`;
  },300)
  setTimeout(()=>{
      examples.style.opacity = `1`;
      examples.style.marginRight = `0`;
  }, 350)
  nnn.forEach((names)=>{
    names.style.transition = `opacity 0.25s`;
    names.style.opacity = `0`;
    setTimeout(()=>{
      
      names.style.display = `none`;
    },300)
  })
}

function hs(){
  const examples = document.getElementById('about-us-page');
  const nnn = document.querySelectorAll('.nnn');
  document.getElementById('logo').style.cursor = `default`;
  examples.style.opacity = `0`;
  setTimeout(()=>{
    examples.style.display = `none`;
  },300)
  setTimeout(()=>{
      examples.style.marginRight = `10rem`;
  }, 315)
  nnn.forEach((names)=>{
    names.style.transition = `opacity 0.25s`;
    names.style.opacity = `1`;
    setTimeout(()=>{
      
      names.style.display = `flex`;
    },300)
  })
}

let deviceType = 'pc';
function contact(type){
  if(deviceType === 'pc'){
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=seahzhihen12@gmail.com`);
  }else{
    window.location.href = "mailto:seahzhihen12@gmail.com";
  }
}
function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (isMobile()) {
  deviceType = 'mobile'
}