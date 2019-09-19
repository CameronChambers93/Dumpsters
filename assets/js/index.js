var fromDate;
var toDate;
var sizes = {
    20: 56.5,
    40: 72.5
};
var currSize = 20;
document.getElementById("from").value = "";
document.getElementById("to").value = "";

$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1
        })
        .on( "change", function() {
          var days = new Date(getDate(this));
          fromDate = getDate(this);
          days.setDate(days.getDate() + 5)
          toDate = null;
          to.datepicker("setDate", null);
          to.datepicker( "option", "minDate", getDate(this));
          to.datepicker( "option", "maxDate", days);
          updatePrices();
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() { 
          toDate = getDate(this);
          updatePrices(); });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );

function updatePrices() {
    if(fromDate === null || toDate === null) {
        document.getElementById("resultDiv").innerHTML = "$";
        document.getElementById("submitBtn").disabled = true;
    }
    else {
        var total = (date_diff_indays(fromDate, toDate)*sizes[currSize])
        document.getElementById("resultDiv").innerHTML = "$" + total;
        document.getElementById("submitBtn").disabled = false;
    }
}


var date_diff_indays = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(),          dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(),    dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}