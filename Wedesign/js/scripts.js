


// Mobile Menu ------------------------------------------------------------------

//sliding-header-menu-outer
//hamburger
//close-icon

var menu = document.getElementById("sliding-header-menu-outer");

//var right = menu.computedStyleMap().get('right');
document.getElementById("hamburguer-icon").onclick = function(){

  menu.style.right = 0;
 
} 
document.getElementById("close-icon").onclick =function(){

  menu.style.right = "-320px";
  
} 
// About us Tab ------------------------------------------------------------
// class ----- single-tab  box-tabs
//id --------   box-text
var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";
var selectedTab;
var aboutTabs = document.getElementsByClassName("single-tab");



for(var a=0; a<aboutTabs.length;a++){
  
  aboutTabs[a].onclick = function (){

    for(var b=0; b<aboutTabs.length; b++){
       
      if(this.innerHTML == aboutTabs[b].innerHTML){
          
           aboutTabs[b].style.backgroundColor = seletectedColor;
           aboutTabs[b].style.fontWeight = "bold";

           document.getElementById("box-text").innerHTML = aboutUs[this.innerHTML]

      }else{

        aboutTabs[b].style.backgroundColor = unseletectedColor;
        aboutTabs[b].style.fontWeight = "normal";

      }
      
      



    }
  }
      
      
  
}



// Service slider -----------------------------------------------------

// id  --- service-previous
// id -- service-text

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  },
  {
    'title': 'test',
    'text': 'lvgashdv Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];


var previous = document.getElementById("service-previous");
var next = document.getElementById("service-next");
var currentIndex=0; 
//next ------
next.onclick = function(){

  if(currentIndex<ourServices.length-1)
  {
    currentIndex++;
  }else{
    currentIndex=0;
  }
  
document.getElementById("service-title").innerHTML =ourServices[currentIndex].title +". ";
document.getElementById("service-text").innerHTML=  ourServices[currentIndex].text;

}

//previous ------

previous.onclick = function(){

  if(currentIndex>0)
  {
    currentIndex--;
  }else{
    currentIndex=ourServices.length-1;
  }
  
document.getElementById("service-title").innerHTML =ourServices[currentIndex].title +". ";
document.getElementById("service-text").innerHTML=  ourServices[currentIndex].text;

}





// Footer-----------------------------------------------------------------------


// id --- current_year

document.getElementById("current_year").innerHTML = new Date().getFullYear();



  
   


   