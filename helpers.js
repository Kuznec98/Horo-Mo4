advice_url = "http://sf-pyw.mosyag.in/m04/api/forecasts";
$("#clickme").click(function() {
        $.getJSON(advice_url, function(data){
          advice = data['prophecies']
          set_content_in_divs(advice);
        });
      });
        
        function set_content_in_divs(paragraphs) {
          $.each(paragraphs, function(i, d) {
            p = $("#p-" + i);
            p.html("<p>" + d + "</p>");
          })
        }

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = mm + '/' + dd + '/' + yyyy;

h1 = $('h1')
h1.html('Что день '+dd+' '+mm+' '+yyyy+' готовит?')