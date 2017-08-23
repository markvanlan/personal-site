var screenWidth = $(window).width();
var screenHeight = $(window).height();
var navOpen = false

$(document).ready(function(){
   screenWidth = $(window).width();
   screenHeight = $(window).height();
   aboutImageWidth = $('#about-content__photo-wrap').width()
   $('#about-content__photo-wrap').css({'height':aboutImageWidth})
   buildKeyboard(true)
   $('#nav-icon').click(function(){
      $(this).toggleClass('open');
      toggleNavOpen()
   })
   if($.scrollify.currentIndex() == 0 ||$.scrollify.currentIndex() == 2) {
      $('.nav-icon-span').css({'background':'#d62a2a'})
   }
   else {
      $('.nav-icon-span').css({'background':'#ffffff'})
   }
   $('.skill-img').css({'height':$('.skill').height()})
   $('#skill-color-bar').css({'height':document.getElementById('skills-content').scrollHeight})
   $('.project-image').css({'width':screenWidth*(4/7)})
   $('.project-description').css({'max-weight':screenWidth*(4/7)})
});

window.addEventListener('resize', function(){handleResize();buildKeyboard()})
$(window).bind("scroll", function(){});

var handleResize = function() {
   aboutImageWidth = $('#about-content__photo-wrap').width()
   $('#about-content__photo-wrap').css({'height':aboutImageWidth})
   $('.skill-img').css({'height':$('.skill').height()})
   $('#skill-color-bar').css({'height':document.getElementById('skills-content').scrollHeight})
   $('.project-image').css({'width':screenWidth*(4/7)})
   $('.project-description').css({'max-weight':screenWidth*(4/7)})
}

var goToSection = function() {
   $.scrollify.move($.scrollify.currentIndex())
}

var toggleNavOpen = function() {
   var navMenu = document.getElementById('nav-menu')
   var navBackground = document.getElementById('nav-background')
   if(navOpen){
      navMenu.style.opacity = 0
      navBackground.style.left = '100%'
   }
   else {
      navMenu.style.opacity = 1
      navBackground.style.left = 0
   }
   navOpen = !navOpen
}

var navigateToSection = function(index, firstLoad) {
   if(index == 0){
      setTimeout(function(){$.scrollify.move(0)},300); currentIndex = 0
      $('.nav-icon-span').css({'background':'#d62a2a'})
   }
   else if(index == 1){
      setTimeout(function(){$.scrollify.move(1)},300); currentIndex = 1
      $('.nav-icon-span').css({'background':'#ffffff'})
   }
   else if(index == 2){
      setTimeout(function(){$.scrollify.move(2)},300); currentIndex = 2
      $('.nav-icon-span').css({'background':'#d62a2a'})
      $('.skill-img').css({'height':$('.skill').height()})
   }
   else if(index == 3){
      setTimeout(function(){$.scrollify.move(3)},300); currentIndex = 3
      $('.nav-icon-span').css({'background':'#ffffff'})
   }
   else if(index == 4){
      setTimeout(function(){$.scrollify.move(4)},300); currentIndex = 3
      $('.nav-icon-span').css({'background':'#ffffff'})
   }
   if(!firstLoad){
      toggleNavOpen()   
      $('#nav-icon').removeClass('open')
   }
}

var buildKeyboard = function(firstLoad) {
   removeKeyboard()
   screenWidth = $(window).width();
   screenHeight = $(window).height();
   var margin = screenWidth/120;
   var keySize = screenWidth/25;
   var strokeWidth = 1.5
   if (screenWidth < 500) {
      strokeWidth = 1
   }
   keyboardWidth = keySize*15+margin*14.5
   keyboardHeight = keySize*5+margin*4

   var name = document.getElementById('name')
   var nameBlinker = document.getElementById('name-blinker')
   var title = document.getElementById('title')
   var homeLandingStrip = document.getElementById('home-landing-strip')
   $('#name').css({'bottom':((screenHeight/2)+(keyboardHeight/2)+(keySize/2))})
   $('#name-blinker').css({'bottom':((screenHeight/2)+(keyboardHeight/2)+(keySize/2)+7)})
   $('#title').css({'top':((screenHeight/2)+(keyboardHeight/2)+(keySize/2))})
   
   var draw = SVG('keyboard').size(keyboardWidth,keyboardHeight)
   //----------------------------
   //Keybaord Case
   //----------------------------

   var keyCase = draw.rect(keyboardWidth+(1/2)*keySize,keyboardHeight+(1/2)*keySize).fill('#dee2e5').radius(keySize/5,keySize/5)
   keyCase.move((-1/4)*keySize,(-1/4)*keySize)
   //----------------------------
   //ROW 1
   //----------------------------
   var k11 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#c13030').radius(keySize/10,keySize/10)
   var k12 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k12.move(keySize+margin, 0)
   var k13 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k13.move(2*keySize+2*margin, 0)
   var k14 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k14.move(3*keySize+3*margin, 0)
   var k15 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k15.move(4*keySize+4*margin, 0)
   var k16 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k16.move(5*keySize+5*margin, 0)
   var k17 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k17.move(6*keySize+6*margin, 0)
   var k18 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k18.move(7*keySize+7*margin, 0)
   var k19 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k19.move(8*keySize+8*margin, 0)
   var k210 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k210.move(9*keySize+9*margin, 0)
   var k111 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k111.move(10*keySize+10*margin, 0)
   var k112 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k112.move(11*keySize+11*margin, 0)
   var k113 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k113.move(12*keySize+12*margin, 0)
   var k114 = draw.rect(2*keySize+1.5*margin,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#919191').radius(keySize/10,keySize/10)
   k114.move(13*keySize+13*margin, 0)
   //----------------------------
   //ROW 2
   //----------------------------
   var marginTop = keySize+margin
   var k21 = draw.rect(1.5*keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#919191').radius(keySize/10,keySize/10)
   k21.move(0,marginTop)
   var k22 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k22.move(1.5*keySize+1*margin, marginTop)
   var k23 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k23.move(2.5*keySize+2*margin, marginTop)
   var k24 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k24.move(3.5*keySize+3*margin, marginTop)
   var k25 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k25.move(4.5*keySize+4*margin, marginTop)
   var k26 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k26.move(5.5*keySize+5*margin, marginTop)
   var k27 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k27.move(6.5*keySize+6*margin, marginTop)
   var k28 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k28.move(7.5*keySize+7*margin, marginTop)
   var k29 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k29.move(8.5*keySize+8*margin, marginTop)
   var k210 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k210.move(9.5*keySize+9*margin, marginTop)
   var k211 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k211.move(10.5*keySize+10*margin, marginTop)
   var k212 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k212.move(11.5*keySize+11*margin, marginTop)
   var k213 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k213.move(12.5*keySize+12*margin, marginTop)
   var k214 = draw.rect(1.5*marginTop,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#919191').radius(keySize/10,keySize/10)
   k214.move(13.5*keySize+13*margin, marginTop)
   //----------------------------
   //ROW 3
   //----------------------------
   marginTop = 2*keySize+2*margin
   var k31 = draw.rect(1.75*keySize+margin,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#919191').radius(keySize/10,keySize/10)
   k31.move(0,marginTop)
   var k32 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k32.move(1.75*keySize+2*margin, marginTop)
   var k33 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k33.move(2.75*keySize+3*margin, marginTop)
   var k34 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k34.move(3.75*keySize+4*margin, marginTop)
   var k35 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k35.move(4.75*keySize+5*margin, marginTop)
   var k36 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k36.move(5.75*keySize+6*margin, marginTop)
   var k37 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k37.move(6.75*keySize+7*margin, marginTop)
   var k38 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k38.move(7.75*keySize+8*margin, marginTop)
   var k39 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k39.move(8.75*keySize+9*margin, marginTop)
   var k310 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k310.move(9.75*keySize+10*margin, marginTop)
   var k311 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k311.move(10.75*keySize+11*margin, marginTop)
   var k312 = draw.rect(keySize,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k312.move(11.75*keySize+12*margin, marginTop)
   var k313 = draw.rect(2.25*keySize+1.5*margin,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#51c2e8').radius(keySize/10,keySize/10)
   k313.move(12.75*keySize+13*margin, marginTop)
   //----------------------------
   //ROW 3
   //----------------------------
   marginTop = 3*keySize+3*margin
   var k41 = draw.rect(2.25*keySize+margin,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#919191').radius(keySize/10,keySize/10)
   k41.move(0, marginTop)
   var k42 = draw.rect(keySize, keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k42.move(2.25*keySize+2*margin, marginTop)
   var k43 = draw.rect(keySize, keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k43.move(3.25*keySize+3*margin, marginTop)
   var k44 = draw.rect(keySize, keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k44.move(4.25*keySize+4*margin, marginTop)
   var k45 = draw.rect(keySize, keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k45.move(5.25*keySize+5*margin, marginTop)
   var k46 = draw.rect(keySize, keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k46.move(6.25*keySize+6*margin, marginTop)
   var k47 = draw.rect(keySize, keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k47.move(7.25*keySize+7*margin, marginTop)
   var k48 = draw.rect(keySize, keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k48.move(8.25*keySize+8*margin, marginTop)
   var k49 = draw.rect(keySize, keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k49.move(9.25*keySize+9*margin, marginTop)
   var k410 = draw.rect(keySize, keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k410.move(10.25*keySize+10*margin, marginTop)
   var k411 = draw.rect(keySize, keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k411.move(11.25*keySize+11*margin, marginTop)
   var k412 = draw.rect(2.75*keySize+2.5*margin, keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#919191').radius(keySize/10,keySize/10)
   k412.move(12.25*keySize+12*margin, marginTop)
   //----------------------------
   //ROW 4
   //----------------------------
   marginTop = 4*keySize+4*margin
   var k51 = draw.rect(1.25*keySize+margin,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#919191').radius(keySize/10,keySize/10)
   k51.move(0, marginTop)
   var k52 = draw.rect(1.25*keySize+margin,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#919191').radius(keySize/10,keySize/10)
   k52.move(1.25*keySize+2*margin, marginTop)
   var k53 = draw.rect(1.25*keySize+margin,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#919191').radius(keySize/10,keySize/10)
   k53.move(2.5*keySize+4*margin, marginTop)
   var k54 = draw.rect(6.25*keySize+.5*margin,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#fffdf9').radius(keySize/10,keySize/10)
   k54.move(3.75*keySize+6*margin, marginTop)
   var k55 = draw.rect(1.25*keySize+margin,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#919191').radius(keySize/10,keySize/10)
   k55.move(11.25*keySize+1.5*margin, marginTop)
   var k55 = draw.rect(1.25*keySize+margin,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#919191').radius(keySize/10,keySize/10)
   k55.move(12.5*keySize+3.5*margin, marginTop)
   var k55 = draw.rect(1.25*keySize+margin,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#919191').radius(keySize/10,keySize/10)
   k55.move(13.75*keySize+5.5*margin, marginTop)
   var k55 = draw.rect(1.25*keySize+margin,keySize).stroke({color:'#dee2e5', width:strokeWidth}).fill('#919191').radius(keySize/10,keySize/10)
   k55.move(15*keySize+7.5*margin, marginTop)

   var name = document.getElementById('name')
   if(screenWidth > 850){nameBlinker.style.height = '72px'}
   else if(screenWidth < 851 && screenWidth > 700){nameBlinker.style.height = '60px'}
   else if(screenWidth < 701 && screenWidth > 550){nameBlinker.style.height = '48px'}
   else if(screenWidth < 551 && screenWidth > 375){nameBlinker.style.height = '36px'}
   else if(screenWidth < 376){nameBlinker.style.height = '30px'}

   if(firstLoad == true){
      setTimeout(function(){
         nameBlinker.style.opacity = 1
      },200)
      setTimeout(function(){
         nameBlinker.style.opacity = 0
      },900)

      setTimeout(function(){
      name.textContent = 'M'
      k48.fill('#eac556')
      },1000+500)
      setTimeout(function(){
         k48.fill('#fffdf9')
         name.textContent = 'Ma'
         k32.fill('#eac556')
      },1000+675)
      setTimeout(function(){
         k32.fill('#fffdf9')
         name.textContent = 'Mar'
         k25.fill('#eac556')
      },1000+850)
      setTimeout(function(){
         k25.fill('#fffdf9')
         name.textContent = 'Mark'
         k39.fill('#eac556')
      },1000+975)
      setTimeout(function(){
         k39.fill('#fffdf9')
         name.textContent = 'Mark '
         k54.fill('#eac556')
      },1000+1150)
      setTimeout(function(){
         k54.fill('#fffdf9')
         name.textContent = 'Mark V'
         k45.fill('#eac556')
      },1000+1325)
      setTimeout(function(){
         k45.fill('#fffdf9')
         name.textContent = 'Mark Va'
         k32.fill('#eac556')
      },1000+1500)
      setTimeout(function(){
         k32.fill('#fffdf9')
         name.textContent = 'Mark Van'
         k47.fill('#eac556')
      },1000+1675)
      setTimeout(function(){
         k47.fill('#fffdf9')
         name.textContent = 'Mark VanL'
         k310.fill('#eac556')
      },1000+1850)
      setTimeout(function(){
         k310.fill('#fffdf9')
         name.textContent = 'Mark VanLa'
         k32.fill('#eac556')
      },1000+2025)
      setTimeout(function(){
         k32.fill('#fffdf9')
         name.textContent = 'Mark VanLan'
         k47.fill('#eac556')
      },1000+2200)
      setTimeout(function(){
         k47.fill('#fffdf9')
         name.textContent = 'Mark VanLand'
         k34.fill('#eac556')
      },1000+2375)
      setTimeout(function(){
         k34.fill('#fffdf9')
         name.textContent = 'Mark VanLandi'
         k29.fill('#eac556')
      },1000+2500)
      setTimeout(function(){
         k29.fill('#fffdf9')
         name.textContent = 'Mark VanLandin'
         k47.fill('#eac556')
      },1000+2675)
      setTimeout(function(){
         k47.fill('#fffdf9')
         name.textContent = 'Mark VanLanding'
         k36.fill('#eac556')
      },1000+2850)
      setTimeout(function(){
         k36.fill('#fffdf9')
         name.textContent = 'Mark VanLandingh'
         k37.fill('#eac556')
      },1000+3025)
      setTimeout(function(){
         k37.fill('#fffdf9')
         name.textContent = 'Mark VanLandingha'
         k32.fill('#eac556')
      },1000+3200)
      setTimeout(function(){
         k32.fill('#fffdf9')
         name.textContent = 'Mark VanLandingham'
         k48.fill('#eac556')
         title.style.opacity = 1
      },1000+3375)
      setTimeout(function(){
         k48.fill('#fffdf9')  
      },1000+3550)
   } else {
      name.textContent = 'Mark VanLandingham'
   }
}

var removeKeyboard = function() {
   $('#keyboard').empty()
}

var currentImage = 1
var changePicture = function(direction) {
   if(direction == 'right'){
      if(currentImage == 4){
         document.getElementById('about-content__photo-4').style.opacity = 0
         document.getElementById('about-content__photo-1').style.opacity = 1
         currentImage = 1
         return
      }
      else {
         document.getElementById('about-content__photo-'+currentImage).style.opacity = 0
         document.getElementById('about-content__photo-'+(currentImage+1)).style.opacity = 1
         currentImage++;
      }
   }
   else if(direction == 'left') {
      if(currentImage == 1){
         document.getElementById('about-content__photo-1').style.opacity = 0
         document.getElementById('about-content__photo-4').style.opacity = 1
         currentImage = 4
         return
      }
      else {
         document.getElementById('about-content__photo-'+currentImage).style.opacity = 0
         document.getElementById('about-content__photo-'+(currentImage-1)).style.opacity = 1
         currentImage--;
      }
   }
   
}

var hoverOnSkill = function(index) {
   var skill = document.getElementById('skill-'+index)
   var img = document.getElementById('img-'+index)
   var label = document.getElementById('skill-label-'+index)
   skill.style.backgroundColor = 'rgba(255,255,255,.4)'
   img.style.right = '5px'
   img.style.transform = 'translateX(0)'
   label.style.opacity = 1;
}

var hoverOutSkill = function(index) {
   var skill = document.getElementById('skill-'+index)
   var img = document.getElementById('img-'+index)
   var label = document.getElementById('skill-label-'+index)
   skill.style.backgroundColor = '#f4eaff'
   img.style.right = '50%'
   img.style.transform = 'translateX(50%)'
   label.style.opacity = 0;
}

var currentProject = 1;
var changeProject = function(direction) {

   if(direction == 'right'){
      if(currentProject == 3){
         document.getElementById('project-3').style.opacity = 0
         document.getElementById('project-1').style.opacity = 1
         currentProject = 1
         return
      }
      else {
         document.getElementById('project-'+currentProject).style.opacity = 0
         document.getElementById('project-'+(currentProject+1)).style.opacity = 1
         currentProject++;
      }
   }
   else if(direction == 'left') {
      if(currentProject == 1){
         document.getElementById('project-1').style.opacity = 0
         document.getElementById('project-3').style.opacity = 1
         currentProject = 3
         return
      }
      else {
         document.getElementById('project-'+currentProject).style.opacity = 0
         document.getElementById('project-'+(currentProject-1)).style.opacity = 1
         currentProject--;
      }
   }
}

var sendEmail = function() {
   var name = document.getElementById('contact-name').value
   var email = document.getElementById('contact-email').value
   var message = document.getElementById('contact-message').value
   document.getElementById('contact-name').value = ''
   document.getElementById('contact-email').value = ''
   document.getElementById('contact-message').value = ''
   
   message = {
      name: name,
      email: email,
      message: message
   }
    $.ajax({
        url: "https://formspree.io/markvanlan@gmail.com", 
        method: "POST",
        data: message,
        dataType: "json"
    });
}

