// document.addEventListener("DOMContentLoaded", function() {//Commented out so the ip_addy variable can be initalised external to this script (3rd party data source)
    //Globals for scroll position calcs & posting:
    var page_length, scrollable_length, view_top_to_bottom, html, the_body;
    var intermittent_scroll_checker;

    function source_lengths() {
        the_body = document.body,
        html = document.documentElement;
        page_length = Math.max(the_body.scrollHeight, the_body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        //We are trying to get the largest of these values as the more likely correct answer
        view_top_to_bottom = window.innerHeight || (document.documentElement || document.body).clientHeight;
        scrollable_length = page_length - view_top_to_bottom;
    }

    function post_scroll_position(scroll_state) {
        var fd = new FormData();
        // console.log(scroll_state);
        // console.log(page_url);
        var page_url_string = String(page_url);
        var scroll_state_string = String(scroll_state);
        var dataset = {'page_url': page_url_string, 'scrolldata': scroll_state_string, 'ip_address': 'not.tracked'};
        // console.log('dataset =',dataset);
        $.ajax ({
            type: "POST",
            url: 'https://triplican.com/thepilotsuit',
            data: JSON.stringify(dataset),
            processData: false,  // prevents JS from converting the data
            contentType: 'application/json; charset=utf-8', //For sending strings
            success: function(response) {
              // console.log('data sent');
            },
            error: function(error_data) {
                // console.log('error: ',error_data);
            }
        });
    }

// New fetch() approach:
// function post_scroll_position(scroll_state) {
//     https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// }

    source_lengths();

    //Recalculate source lengths if the page gets resized by user (say portrait to landscape)
//     window.addEventListener("resize", function() {
//         source_lengths();
//     }, false);

//     window.addEventListener("scroll", function() {
//         clearTimeout(intermittent_scroll_checker);
//         intermittent_scroll_checker =
//             setTimeout(function() {
//                   var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
//                   //This is undefined when there is no scrollable length
//                   var scrolled_fraction = (scrollTop/scrollable_length * 100) << 0;
//                   // console.log('Scrolled percentage: '+scrolled_fraction);
//                   post_scroll_position(scrolled_fraction);
//             }, 300)
//     }, false);

    // Sort of 'Overloading' the ajax call function by passing in a page-left note, since it all gets processed as strings anyway:
//     window.addEventListener("beforeunload", function() {
//         post_scroll_position('User_closed_tab_or_page');
//     });

// });
