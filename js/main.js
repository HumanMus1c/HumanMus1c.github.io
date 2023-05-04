    $(function(){
        $("#notificationcolor").css({"opacity":0.6});
        showTopbar().then(function(){
            for(var i=0;i<20;i++){
                var appHtml = getDeskTopApp();
                $("#container .media-inline").append(appHtml);
            }
            $("#container").click(function(){
                $("#startMenu").slideLeftHide(300);
                $("#notificationMenu").slideRightHide(300);
            });
            $("#startMenuBtn").click(function(){
                startMenu();
            });
            $("#notificationBtn").click(function(){
                notificationMenu();
            });

            $(".appicon").hover(function(){
                $(".apphover").hide();
                $(this).next(".apphover").show(150);
            },function(){
                $(".apphover").hide(150);
            });

            $(".desktopappicon").hover(function(){
                $(".desktopapphover").hide();
                $(this).next(".desktopapphover").show(150);
            },function(){
                $(".desktopapphover").hide(150);
            });

            $("#searchApp").on('keyup',function(){
                var words = $(this).val();
                if(words && words.length > 0){
                    $("#startMenuContent .appicon").each(function(index, obj){
                        var appName = $(obj).find("strong").text();
                        if(appName.indexOf(words)<0){
                            $(obj).closest(".app").addClass("appHide");
                        }
                    });
                }else{
                    $("#startMenuContent .app").removeClass("appHide");
                }
            })

            $(window).resize(function(){
                if($("#startMenu").is(':visible')){　　//如果node是隐藏的则显示node元素，否则隐藏
                　　$("#startMenu").slideLeftHide(300);
                }
                if($("#notificationMenu").is(':visible')){　　//如果node是隐藏的则显示node元素，否则隐藏
                　　$("#notificationMenu").slideRightHide(300);
                }
                showTopbar();
            });
        });
    });

    function showTopbar(){
        var width = $(window).width();
        var height = $(window).height();
        $("#bgimage").width(width);
        $("#bgimage").height(height);
        return new Promise(function(resolve, reject){
            var canvas=document.getElementById("topbarcanvas");
            var canvasUtil = new CanvasUtil();
            canvas = canvasUtil.ImageToCanvas($("#bgimage")[0],canvas);
            resolve(canvas);
        }).then(function(canvas){
            StackBlur.canvasRGB(canvas, 0, 0, width, height, 20);
        })
    }

    function startMenu() {
        if($("#startMenuImg").is(':visible')){
            $("#startMenu").slideLeftHide(300);
        }else{
            var width = $(window).width();
            var height = $(window).height();
            html2canvas($('#desktop'), {
                onrendered: function(canvas) {
                    StackBlur.canvasRGB(canvas, 0, 0, width, height, 20);
                    var canvasUtil = new CanvasUtil();
                    $("#startMenuImg").html('').append(canvasUtil.convertCanvasToJPEG(canvas,0.8));
                    $("#startMenu").slideLeftShow(300);
                },
                width: width,
                height: height
            });
        }
    }

    function notificationMenu() {
        if($("#notificationimg").is(':visible')){
            $("#notificationMenu").slideRightHide(300);
        }else{
            var width = $(window).width();
            var height = $(window).height();
            html2canvas($('#desktop'), {
                onrendered: function(canvas) {
                    StackBlur.canvasRGB(canvas, 0, 0, width, height, 20);
                    var canvasUtil = new CanvasUtil();
                    $("#notificationimg").html('').append(canvasUtil.convertCanvasToJPEG(canvas,0.8));
                    $("#notificationimg img").css({"margin-left":-(width-300)});
                    $("#notificationMenu").slideRightShow(300);
                },
                width: width,
                height: height
            });
        }
    }

    function getDeskTopApp(){
        var appTemplete = '<div class="media clearfix desktopapp">'+
                            '<div class="desktopappicon">'+
                                '<a href="#">'+
                                    '<img src="./images/file.png" class="radius" alt="...">'+
                                '</a>'+
                                '<div class="media-body">'+
                                    '<strong>文档</strong>'+
                                '</div>'+
                            '</div>'+
                            '<div class="desktopapphover"></div>'+
                        '</div>';
        return appTemplete;
    }