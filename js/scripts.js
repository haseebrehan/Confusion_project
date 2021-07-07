
        $(function () {
            $("#mycarousel").carousel({
                interval: 2000
            });
            $("#carouselButton").on("click",function () {
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                } else
                if ($("#carouselButton").children("span").hasClass('fa-play')) {
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');
                }
            });
       
 
            $("#mylogin").on("click",function () {
                $("#loginModal").modal('show');
            });
            $("#myloginxc, #myloginbc").on("click",function () {
                $('#loginModal').modal('hide');
            });
            $("#reservebc, #reservexc").on("click",function () {
                $('#reserveform').modal('hide');
            });
            $("#reservetable").on("click",function () {
                $("#reserveform").modal('show');
            });
        });

