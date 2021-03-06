$(function() {
    // header插入
    var header = $("#header");
    var headerHTML = [
        '<header>',
        '    <a class="logo" href="http://www.ieee.org/"><img src="/img/ieee_white.png" alt="ieee"></a>',
        '    <div class="banner">',
        '        <h1>IEEE CASE 2017</h1>',
        '        <p>13th IEEE Conference on Automation Science and Engineering</p>',
        '        <p>August 20-23, 2017 Xi&apos;an  China',
        '        </p>',
        '        <a href="/submission/calls_for_papers.html" class="btn">Call for Papers</a>',
        '    </div>',
        // '    <nav class="container">',
        '    <nav class="text-center">',
        '        <ul class="list-inline">',
        '            <li class="nav-top"><a href="/index.html">Home</a>',
        '            </li>',
        '            <li class="nav-top">',
        '                <a>Committees&nbsp;&nbsp;<span class="fa fa-sort-desc"></span></a>',
        '                <ul class="slideDown text-left">',
        '                    <li>',
        '                        <a href="/committees/steering_committee.html">Steering Committee</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/committees/conference_editorial_board.html">Conference Editorial Board</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/committees/organizing_committee.html">Organizing Committee</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/committees/volunteer_form.html">Volunteers</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/committees/contact.html">Contact</a>',
        '                    </li>',
        '                </ul>',
        '            </li>',
        '            <li class="nav-top"><a>Submission&nbsp;&nbsp;<span class="fa fa-sort-desc"></span></a>',
        '                <ul class="slideDown text-left">',
        '                    <li>',
        '                        <a href="/submission/calls_for_papers.html">Call for Papers</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/submission/paper_submission.html">Paper Submission</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/submission/call_for_late_breaking_results_posters.html">Call for Late Breaking Results Posters</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/submission/awards.html">Awards</a>',
        '                    </li>',
        '                </ul>',
        '            </li>',
        '            <li class="nav-top"><a>Program&nbsp;&nbsp;<span class="fa fa-sort-desc"></span></a>',
        '                <ul class="slideDown text-left">',
        '                    <li>',
        '                        <a href="/program/case_isam_conference_program.html">CASE Conference Program</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/program/plenary_speakers.html">Plenary Speakers</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/program/competition.html">Competition</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/program/ras_member_luncheons.html">RAS Member Luncheons</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/program/meetings.html">Meetings</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/program/workshops_and_tutorials.html">Workshops and Tutorials</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/program/technical_tours.html">Technical Tours</a>',
        '                    </li>',
        '                </ul>',
        '            </li>',
        '            <li class="nav-top"><a>Registration&nbsp;&nbsp;<span class="fa fa-sort-desc"></span></a>',
        '                <ul class="slideDown text-left">',
        '                    <li>',
        '                        <a href="/registration/invitation_letter.html">Invitation Letter</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/registration/student_travel_awards.html">Student Travel Awards</a>',
        '                    </li>',
        '                </ul>',
        '            </li>',
        '            <li class="nav-top"><a>Sponsors/Exhibitions&nbsp;&nbsp;<span class="fa fa-sort-desc"></span></a></a>',
        '                <ul class="slideDown text-left">',
        '                    <li>',
        '                        <a href="/sponsors_exhibitions/sponsors_patrons.html">Information</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/sponsors_exhibitions/sponsors_2.html">Sponsors</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/sponsors_exhibitions/exhibitors.html">Exhibitors</a>',
        '                    </li>',
        '                </ul>',
        '            </li>',
        '            <li class="nav-top"><a>Hotel/Travel&nbsp;&nbsp;<span class="fa fa-sort-desc"></span></a>',
        '                <ul class="slideDown text-left">',
        '                    <li>',
        '                        <a href="/hotel_travel/hotel.html">Hotel</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/hotel_travel/travel_information.html">Travel Information</a>',
        '                    </li>',
        '                </ul>',
        '            </li>',
        '            <li class="nav-top"><a>Attractions <span class="fa fa-sort-desc"></span></a>',
        '                <ul class="slideDown">',
        '                    <li>',
        '                        <a href="/attractions/the_city_of_Xian.html">The City of Xi&apos;an</a>',
        '                    </li>',
        '                    <li>',
        '                        <a href="/attractions/visitors_brochure.html">Visitor&apos;s Brochure</a>',
        '                    </li>',
        '                </ul>',
        '            </li>',
        '            <li class="nav-top"><a href="/photos/photos.html">Photos</a></li>',
        '        </ul>',
        '    </nav>',
        '</header>',
    ].join('');

    header.html(headerHTML);


    // footer插入
    var footer = $("#footer")
    var footerHTML = [

        '<footer class="text-center container">',
        '   <h4 class="text-left">Sponsors:</h4>',
        // '    <div class="xi_an">',
        // '        <h2>Xi&apos;an</h2>',
        // '            <p>',
        // '                Xi&apos;an is a famous historical and cultural city in China. It is the cradle of the Chinese nationality, the birthplace of the Chinese civilization and the representative of the Chinese culture. The city was first established more than 3100 years ago and it has been taken as a capital for 1129 years for 13 dynasties. It is one of the most ancient capitals of the world, in the company of Athens, Rome, and Cairo. The city once functioned as the political, economic, and cultural center of China and as the starting point of the renowned Silk Road. Due to its long history and rich culture,  the city is reputed to be the natural history museum.',
        // '            </p>',
        // '    </div>',
        '    <ul class="list-inline text-center container">',
        '        <li class="col-lg-3">',
        '            <a href="http://www.ieee.org/"><img src="/img/ieee.jpg" alt="ieee"></a>',
        '        </li>',
        '        <li class="col-lg-3">',
        '            <a href="http://www.ieee.org/"><img src="/img/ras.png" alt="ras"></a>',
        '        </li>',
        '        <li class="col-lg-3">',
        '            <a href="http://www.xjtu.edu.cn/"><img src="/img/xjtu.png" alt="xjtu"></a>',
        '        </li>',
        '        <li class="col-lg-3">',
        '            <a href="http://www.tsinghua.edu.cn/publish/newthu/"><img src="/img/thu.png" alt="thu"></a>',
        '        </li>',
        '    </ul>',
        '</footer>',
    ].join('');

    footer.html(footerHTML);

    // 插入模态框
    var modalHtml = [
        '<div class="modal fade" id="modal">',
        '    <div class="modal-dialog modal-lg">',
        '        <div class="modal-content">',
        '            <div class="modal-header">',
        '                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>',
        '                <h4 class="modal-title" id="myModalLabel">Modal title</h4>',
        '            </div>',
        '            <div class="modal-body">',
        '            </div>',
        '            <div class="modal-footer">',
        '                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>',
        '            </div>',
        '        </div>',
        '    </div>',
        '</div>',
        '<script src="http://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>'
    ].join('');

    $('body').append(modalHtml)



    // 点击查看原图
    $(".img-thumbnail").click(function(e) {
        var modal = $("#modal");
        var modalTitle = $(".modal-title")
        var modalBody = $(".modal-body");
        var _this = $(this).clone();
        $(".modal-body img").remove();
        modalTitle.text(_this.attr("alt"));
        modalBody.append(_this);
        modal.modal();
    })

    // 添加active, 路径导航
    var navTop = $('.nav-top');
    var slideDown = $('.slideDown');
    chooseActive();
    breadcrumb_title();


    // 导航栏事件绑定    
    navTop.hover(function(e) {
        var _this = $(this);
        var index = _this.index() - 1;
        _this.addClass('active');
        if (index >= 0) {
            slideDown.eq(index).show();
        }

    }, function(e) {
        var _this = $(this);
        var index = _this.index() - 1;
        _this.removeClass('active');
        if (index >= 0) {
            slideDown.eq(index).hide();
        }
        chooseActive();
    })

    // 导航栏active, 路径导航
    function chooseActive() {
        var pathname = window.location.pathname;
        var path = pathname.split('/')[1];

        switch (path) {
            case 'committees':
                navTop.eq(1).addClass('active');
                break;
            case 'submission':
                navTop.eq(2).addClass('active');
                break;
            case 'program':
                navTop.eq(3).addClass('active');
                break;
            case 'registration':
                navTop.eq(4).addClass('active');
                break;
            case 'sponsors_exhibitions':
                navTop.eq(5).addClass('active');
                break;
            case 'hotel_travel':
                navTop.eq(6).addClass('active');
                break;
            case 'attractions':
                navTop.eq(7).addClass('active');
                break;
            case 'photos':
                navTop.eq(8).addClass('active');
                break;
            default:
                navTop.eq(0).addClass('active');
        }
    }

    function breadcrumb_title() {
        var pagetitle = $("h2").text();
        var title = $("title");
        if (pagetitle !== '') {

            if (pagetitle === 'Templates') {
                liHtml = [

                    '<ul class="breadcrumb container">',
                    '<li><a href="/">Home</a></li>',
                    '<li>' + 'Paper Submission' + '</li>',
                    '</ul>'
                ].join('');
                header.append(liHtml);
                title.text('Paper Submission');
                return;
            }
            liHtml = [

                '<ul class="breadcrumb container">',
                '<li><a href="/">Home</a></li>',
                '<li>' + pagetitle + '</li>',
                '</ul>'
            ].join('');
            header.append(liHtml);
            title.text(pagetitle);
        }
    }


    console.log('constructed by %cJordi Wang', 'font-weight:bold', 'XI\'AN JIAOTONG UNIVERSITY')
    console.log('github:https://github.com/594WangHao')
    console.log('email:jordiwang@outlook.com')
})
