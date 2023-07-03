// document.addEventListener("DOMContentLoaded", function() {//Commented out so the ip_addy variable can be initalised external to this script (3rd party data source)

    function post_url() {
        var fd = new FormData();
        // console.log(page_url);
        var page_url_string = String(window.location.href);
        var dataset = {'page_url': page_url_string, 'page_number': '0'};
        // console.log('dataset =',dataset);
        $.ajax ({
            type: "POST",
            url: 'https://triplican.com/thepilotsuit',
            data: JSON.stringify(dataset),
            processData: false,  // prevents JS from converting the data
            contentType: 'application/json; charset=utf-8', //For sending strings
            success: function(result) {
                console.log( 'data sent, ',result);
            },
            error: function(error_data) {
                console.log('error: ',error_data);
            }
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        post_url();
    });

// });
