$(document).ready(function () {
    let $charCount, maxCharCount;

    $charCount = $('#tweet-modal .char-count');
    maxCharCount = parseInt($charCount.data('max'), 10);

    $('#tweet-modal textarea').on('keyup', function (e) {
        let tweetLength = $(e.currentTarget).val().length;

        $charCount.html(maxCharCount - tweetLength);
    });

    $('[data-toggle="tooltip"]').tooltip({animation: true});
    let popoverContentTemplate = '' +
        '<img src="imgs/breed.jpg" class="rounded-circle" style="vertical-align: top;width: 27%;' +
        'display: inline-block;margin-right: 5%;margin-top: 5%;">' +
        '<div class="table-info" style="background-color: #ffffff;width: 67%;display: inline-block;">' +
        '<strong style="display: block;overflow: hidden;text-overflow: ellipsis;">Dog Breeds</strong>' +
        '<a href="#" class="btn btn-light">' +
        '<i class="fa fa-plus" aria-hidden="true"></i>' + 'Follow' + '</a>' + '</div>';

    let popovers = $('[data-toggle="popover"]');

    popovers.popover({
        placement: 'bottom',
        html: true,
        content: function () {
            return popoverContentTemplate;
        }
    });

    popovers.on('show.bs.popover', function () {
        let $icon = $(this).find('i.fa');

        $icon.removeClass('fa-plus').addClass('fa-check');
        $(this).html($icon)
            .append(" Following");
    });
});