$(
    function () {
        // 绑定搜索标签点击事件
        $(".type-label").click(function () {
            $(".type-label-selected").removeClass("type-label-selected");
            $(this).addClass("type-label-selected");

            var selectedName = this.innerText;
            var placeholder, btnText;
            switch (selectedName) {
                case "百度":
                    placeholder = "百度一下，你就知道";
                    btnText = "百度一下";
                    break;
                case "必应":
                    placeholder = "有求必应";
                    btnText = "必应搜索";
                    break;
                case "知乎":
                    placeholder = "有问题，上知乎";
                    btnText = "知乎搜索";
                    break;
                case "CSDN":
                    placeholder = "CSDN搜索";
                    btnText = "CSDN搜索";
                    break;
                case "思否":
                    placeholder = "思否搜索";
                    btnText = "思否搜索";
                    break;
                case "GitHub":
                    placeholder = "GitHub搜索";
                    btnText = "GitHub搜索";
                    break;
                default:
                    placeholder = "请输入搜索内容";
                    btnText = "搜索";
            }
            $("#searchInput").attr("placeholder", placeholder);
            $("#searchButton").text(btnText);
        });

        // 绑定搜索按钮点击事件
        $("#searchButton").click(function () {
            var searchVal = $("#searchInput").val();
            var selectedName = $(".type-label-selected").text();
            var searchUrl;
            switch (selectedName) {
                case "百度":
                    searchUrl = "https://www.baidu.com/s?wd=";
                    break;
                case "必应":
                    searchUrl = "https://cn.bing.com/search?q=";
                    break;
                case "知乎":
                    searchUrl = "https://www.zhihu.com/search?type=content&q=";
                    break;
                case "思否":
                    searchUrl = "https://segmentfault.com/search?q=";
                    break;
                case "CSDN":
                    searchUrl = "https://so.csdn.net/so/search/s.do?q=";
                    break;
                case "GitHub":
                    searchUrl = "https://github.com/search?q=";
                    break;
                default:
                    searchUrl = "https://www.baidu.com/s?wd=";
            }
            searchUrl += searchVal;
            window.open(searchUrl, "_blank");
        });

        // 添加搜索框回车事件
        $('#searchInput').bind('keypress', function (event) {
            if (event.keyCode == "13") {
                $("#searchButton").click()
            }
        });

        // 添加锚点动画
        $(".pull-down-a").bind("click touch", function () {
            $('html,body').animate({ scrollTop: ($($(this).attr('href')).offset().top) }, 500);
        });
        $(".content-nav-a").bind("click touch", function () {
            $('html,body').animate({ scrollTop: ($($(this).attr('href')).offset().top - 45) }, 500);
        });

        // 绑定 nav-a 点击事件
        $(".content-nav-a").click(function () {
            $(".active-nav-a").removeClass("active-nav-a");
            $(this).addClass("active-nav-a");
        });

        // 监听滚动
        var n = $(".content-nav-list");
        var nh = n.offset().top - 45;
        function check_scroll() {
            var st = window.pageYOffset
                || document.documentElement.scrollTop
                || document.body.scrollTop
                || 0;
            if (st >= nh) {
                n.addClass("content-nav-list-fixed");

            } else {
                n.removeClass("content-nav-list-fixed");
            }
        }
        $(window).on('scroll', check_scroll);
    }
)