// ==UserScript==
// @name         Daily Activity Totals for Kickboard
// @version      0.4.5 (2016.09.14)
// @description  Provides student absent/present counts on Kickboard for United Schools Network
// @author       James Heyneman
// @match        https://united.kickboardforteachers.com/culture/daily-activity
// @require      http://code.jquery.com/jquery-latest.js
// @grant        GM_log
// ==/UserScript==

$(document).ready(function() {

  $( "#sidebar" ).append('<div class="widget clear">' +
          '<div style="text-align: center; padding-bottom: 8px;">' +
                '<input type="button" value="Get Totals" id="getTotals" style="background-color: #95be22; color: #fff; border-radius: 4px; font-size: 16px; border: none; padding: 16px;">' +
               '</span>' +
          '</div>' +
      '</div>' +
        '<div class="widget clear" id="totalsDiv"></div>' );
  addGlobalStyle('#getTotals:hover { background-color: #86ab1e !important; }');

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
          '<div style="margin-left: auto; margin-right: auto; width: 100%; text-align: center; line-height: 1.5;">' +
               '<span style="font-weight:bold; font-size: 24px; color: #222;">' +
                     'Total: ' + total_students + '<br>' +
                     'Present: ' + present_students + '<br>' +
                     'Absent: ' + absent_students + '<br> ' +
                     'Unmarked: ' + (total_students - absent_students - present_students) +
               '</span>' +
          '</div>' +
      '</div>';

  $( "#getTotals" ).attr('value', 'Update Totals');
  });
});

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
