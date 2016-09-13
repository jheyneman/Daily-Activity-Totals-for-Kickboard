// ==UserScript==
// @name         Daily Activity Totals for Kickboard
// @version      0.3
// @description  Provides student absent/present counts on Kickboard for United Schools Network
// @author       James Heyneman
// @match        https://united.kickboardforteachers.com/culture/daily-activity
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

$(document).ready(function() {

  $( "#sidebar" ).append('<div class="widget clear">' +
          '<div style="text-align: center;">' +
                '<input type="button" value="Get Totals" id="getTotals" style="background-color: #95be22; color: #fff; border-radius: 4px; font-size: 16px; border: none; padding: 16px;">' +
               '</span>' +
          '</div>' +
      '</div>' +
        '<div class="widget clear" id="totalsDiv"></div>' );

 $('#getTotals').click(function(){
  var totals_div = document.getElementById('totalsDiv');

  var student_list_elements = document.getElementsByClassName("detail clear");
  var present_elements = document.getElementsByClassName("present");
  var present_elements_hidden = document.getElementsByClassName("present hidden");
  var absent_elements = document.getElementsByClassName("absent");
  var absent_elements_hidden = document.getElementsByClassName("absent hidden");
  var present_students = present_elements.length - present_elements_hidden.length;
  var absent_students = absent_elements.length - absent_elements_hidden.length;
  var total_students = student_list_elements.length;

  totals_div.innerHTML = '<div class="widget clear">' +
          '<div style="margin-left: auto; margin-right: auto; width: 100%;">' +
               '<span style="font-weight:bold; font-size: 14px; color: #222;">' +
                     '<div style="float: left; width: 33%; text-align: center;">' + 'Total: ' + total_students + '</div>' +
                     '<div style="float: left; width: 33%; text-align: center; border-left: 1px solid black; border-right: 1px solid black;">Present: ' + present_students + '</div>' +
                     '<div style="float: left; width: 33%; text-align: center;">Absent: ' + absent_students + '</div>' +
               '</span>' +
          '</div>' +
      '</div>';
});

});