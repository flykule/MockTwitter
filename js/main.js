$(document).ready(function () {
    let $charCount, maxCharCount;

    $charCount = $('#tweet-modal .char-count');
    maxCharCount = parseInt($charCount.data('max'),10);

    $('#tweet-modal textarea').on('keyup',function (e) {
        let tweetLength = $(e.currentTarget).val().length;

        $charCount.html(maxCharCount - tweetLength);
    })
});