document.addEventListener("DOMContentLoaded", function() {
  if (window.fetch) {//If fetch() is supported [sends a GET request by default]
    fetch('https://triplican.com/thepilotsuit', {
      mode: 'no-cors'
    })
  } else {//For older browsers
    $.ajax ({
      type: "GET",
      url: 'https://triplican.com/thepilotsuit'
    });
  }
});
