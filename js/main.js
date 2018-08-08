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
        '<img src="imgs/breed.jpg" class="rounded-circle">' +
        '<div class="info">' +
        '<strong>Dog Breeds</strong>' +
        '<a href="#" class="btn btn-default">' +
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