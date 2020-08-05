$(document).ready(function(){
  
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event to toggle menu*/
 
     $toggleCollapse.click(function(){
         $nav.toggleClass('collapse');
     })



    /** end */
});