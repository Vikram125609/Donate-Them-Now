let First_View_First_Line = document.querySelector('.First_View .First_Line');
let First_View_Second_Line = document.querySelector('.First_View .Second_Line');
let First_View_Button = document.querySelector('.First_View .Buttons');
$(document).ready(function () {
     setTimeout(() => {
          First_View_First_Line.style.visibility = 'visible';
          First_View_First_Line.classList.add('animate__fadeInLeft');
          First_View_Second_Line.style.visibility = 'visible';
          First_View_Second_Line.classList.add('animate__fadeInRight');
          First_View_Button.style.visibility = 'visible';
          First_View_Button.classList.add('animate__fadeInUpBig');

     }, 1500);
});


// JS FOR SECOND HOME PAGE
let Second_Home_Page_Heading = document.querySelector('.Second_Home_Page .heading');
let Second_Home_Page_First_Item = document.querySelector('.Second_Home_Page .First_Item');
let Second_Home_Page_Second_Item = document.querySelector('.Second_Home_Page .Second_Item');
let Second_Home_Page_First_Paragraph = document.querySelector('.Second_Home_Page .First_Paragraph');
$(window).ready(function () {
     $(window).scroll(function () {
          let Var_Position = $(document).scrollTop();
          if (Var_Position >= 400) {
               Second_Home_Page_First_Item.style.visibility = 'visible';
               Second_Home_Page_Second_Item.style.visibility = 'visible';
               Second_Home_Page_First_Item.classList.add('animate__fadeInUp');
               Second_Home_Page_Second_Item.classList.add('animate__fadeInUp');
          }
          console.log(Var_Position);
     });
});

// JS FOR THIRD HOME PAGE
let Third_Home_Page_Third_Image = document.querySelector('.Third_Home_Page .Third_Image');
let Third_Home_Page_Third_Description = document.querySelector('.Third_Home_Page .Third_Description')
$(window).ready(function () {
     $(window).scroll(function () {
          let Var_Position = $(document).scrollTop();
          if (Var_Position >= 1000) {
               Third_Home_Page_Third_Image.style.visibility = 'visible';
               Third_Home_Page_Third_Image.classList.add('animate__fadeInUp');
          }
          if (Var_Position >= 1500) {
               Third_Home_Page_Third_Description.style.visibility = 'visible';
               Third_Home_Page_Third_Description.classList.add('animate__lightSpeedInRight');
          }
     });
});
// JS FOR FOURTH HOME PAGE
let Fourth_Section_Outer_Division_First_Div = document.querySelector('.Fourth_Section_Outer_Division .First_Div');
let Fourth_Section_Outer_Division_Second_Div = document.querySelector('.Fourth_Section_Outer_Division .Second_Div');
let Fourth_Section_Outer_Division_Third_Div = document.querySelector('.Fourth_Section_Outer_Division .Third_Div');

$(window).ready(function () {
     $(window).scroll(function () {
          let Var_Position = $(document).scrollTop();
          // if(Var_Position >= 2100)
          // {
          // Fourth_Section_Outer_Division_First_Div.style.visibility = 'visible';
          // Fourth_Section_Outer_Division_First_Div.classList.add('animate__fadeInLeftBig');
          // Fourth_Section_Outer_Division_Second_Div.style.visibility = 'visible';
          // Fourth_Section_Outer_Division_Second_Div.classList.add('animate__fadeInUpBig');
          // Fourth_Section_Outer_Division_Third_Div.style.visibility = 'visible';
          // Fourth_Section_Outer_Division_Third_Div.classList.add('animate__fadeInRightBig');
          // }

     });
});
// JS FOR FOOTER SECTION
// $(window).ready(function () {
//      $(window).scroll(function () {
//           let Var_Position = $(document).scrollTop();
//           let Visitors = document.querySelector('.Footer_Division2 .Counter');
//           if (Var_Position >= 3900) {
//                for (let i = 0; i < 165921; i++) {
//                     setTimeout(() => {
//                          Visitors.innerHTML = i;
//                     }, 1000);
//                     if(i == 165921)
//                     {
//                          break;
//                     }
//                }
//           }
//      });
// });