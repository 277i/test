$(function () {

    // let html = ''
    // for (let i = 0; i < Job.length; i++) {
    //     html += '<div class="headline">'+ Job[i].name +'<span>查看详细<i></i></span></div>' +
    //             '<div class="ask">' +
    //                 '<p>'+ Job[i].value +'</p>' +
    //                 '<a class="apply" href="'+ Job[i].link +'">立即申请</a>' +
    //             '</div>'
    // }
    // $('.job-list').html(html)

    $(".job-list").on('click', '.headline', function () {
        var dsn = $(this).next(".ask").css("display");
        if (dsn == "none") {
            $(this).addClass('on').siblings('.headline').removeClass('on')
            $(this).next(".ask").slideDown().siblings('.ask').slideUp();
        } else {
            $(this).removeClass('on')
            $(this).next(".ask").slideUp();
        }
    })
})