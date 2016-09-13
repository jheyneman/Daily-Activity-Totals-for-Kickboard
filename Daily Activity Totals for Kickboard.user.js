// ==UserScript==
// @name         Daily Activity Totals for Kickboard
// @version      0.2
// @description  Provides student absent/present counts on Kickboard for United Schools Network
// @author       James Heyneman
// @match        https://united.kickboardforteachers.com/culture/daily-activity
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$(document).ready(function() {

  var students_ul = document.getElementById('students');

  var totals_li = document.createElement('li');

  totals_li.innerHTML = '<div class="details">' +
      '<div class="detail clear">' +
          '<div style="text-align: center;">' +
                '<input type="button" value="Get Totals" id="getTotals" style="background-color: #95be22; color: #fff; border-radius: 4px; font-size: 16px; border: none; padding: 16px;">' +
               '</span>' +
          '</div>' +
      '</div>' +
   '</div>';

   students_ul.appendChild(totals_li);


$('#getTotals').click(function(){
  var present_elements = document.getElementsByClassName("present");
  var present_elements_hidden = document.getElementsByClassName("present hidden");
  var absent_elements = document.getElementsByClassName("absent");
  var absent_elements_hidden = document.getElementsByClassName("absent hidden");
  var present_students = present_elements.length - present_elements_hidden.length;
  var absent_students = absent_elements.length - absent_elements_hidden.length;

  totals_li.innerHTML =
   '<div class="details">' +
      '<div class="detail clear">' +
          '<div style="margin-left: auto; margin-right: auto; width: 75%;">' +
               '<span style="font-weight:bold; font-size: 18px; color: #222;">' +
                     '<div style="float: left; width: 33%; text-align: center;">' + 'Total: ' + (present_students + absent_students) + '</div>' +
                     '<div style="float: left; width: 33%; text-align: center; border-left: 1px solid black; border-right: 1px solid black;">Present: ' + present_students + '</div>' +
                     '<div style="float: left; width: 33%; text-align: center;">Absent: ' + absent_students + '</div>' +
               '</span>' +
          '</div>' +
      '</div>' +
   '</div>';

  students_ul.appendChild(totals_li);
});

});