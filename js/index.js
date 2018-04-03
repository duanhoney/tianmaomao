

//topbar leftbar
{
    $(window).scroll(function () {
        let st = $(window).scrollTop();//获取滚动高度
        if (st > 700) {
            $(".topbar").show();
        } else {
            $(".topbar").hide();
        }
        if (st > 500) {
            $(".leftbar").show();
        } else {
            $(".leftbar").hide();
        }
    });
}
//dingbudaohang
{
    $(".sn-menu")
        .mouseenter(function () {
            let index = $(this).index(".sn-menu");
            $(".menu-bd").eq(index).show();
        })
        .mouseleave(function () {
            let index = $(this).index(".sn-menu");
            $(".menu-bd").eq(index).hide();
        })
}



//返回top
{
    $(".todingbu").click(function () {
        $("html,body").animate({scrollTop: 0})
    })
    // $(window).scroll(function () {
    //     let st = $(window).scrollTop();//获取滚动高度
    //     if (st > 0) {
    //         $(".rightlogo8").show();
    //     } else {
    //         $(".topbar").hide();
    //     }
    // });

}
//leftbartiaozhuan
{
    $(".left-click").click(function () {
        let index = $(this).index(".left-click");
        let ot = $(".floorportlou").eq(index).offset().top - 100;
        $(".left-click").removeClass("active");
        $(".left-click").eq(index).addClass("active");
        $("html,body").animate({scrollTop: ot}, 200);
    })
    $(window).scroll(function () {
        let st = $(window).scrollTop();

        $(".floorportlou").each(function (e) {
            if(st>$(".floorportlou").eq(e).offset().top-200){
                $(".left-click").removeClass("active");
                $(".left-click").eq(e).addClass("active");
            }
        })

        });
}
















// //最上边
// {
//     let hongtiao=document.querySelector(".hongtiaotiao")
//     let st = obj.scrollTop;
//     window.onscroll = function () {
//         let obj = document.body.scrollTop === 0 ? document.documentElement : document.body;
//         let st = obj.scrollTop;
//         if (st > 800) {
//             hongtiao.style.top = "0";
//         } else if (st < 800) {
//             hongtiao.style.top = "-50px";
//         }
//     }
// }
// //楼层跳转
// {
//     let zuoce = document.querySelector(".zuoce")
//     let zuobian = document.querySelectorAll(".zuoce div")
//     let neirong = document.querySelectorAll(".meilirensheng")
//     window.addEventListener("scroll", function () {
//         let obj = document.body.scrollTop === 0 ? document.documentElement : document.body;
//         let st = obj.scrollTop;
//         if (st > 800) {
//             zuoce.style.cssText = "width:36px;height:288px;";
//         } else if (st < 800) {
//             zuoce.style.cssText = "width:0px;height:0px;";
//         }
//         // console.log(st)
//         for (let i = 0; i < neirong.length; i++) {
//             if(st > neirong[i].offsetTop - 60){
//                 for(let i = 0; i < zuobian.length; i++){
//                     zuobian[i].classList.remove("active")
//                 }
//                 zuobian[i].classList.add("active")
//             }
//         }
//     })

//     //第一个参数操作的对象
//     //第二个参数传的对象，属性值得集合形式，用花括号包起来,属性 ： 冒号值
//     //第三个接收的参数是时间，默认是500毫秒
//     //第四个对应的就是一个函数，动画效果，比如匀速
//     //第五个是一个回调函数，
// }
// {
//     let a = document.querySelector(".aa")
//     a.onclick = function () {
//         animate(obj, {scrollTop: 0}, 1000)
// //            alert(1)
//     }
//     //第一个参数操作的对象
//     //第二个参数传的对象，属性值得集合形式，用花括号包起来,属性 ： 冒号值
//     //第三个接收的参数是时间，默认是500毫秒
//     //第四个对应的就是一个函数，动画效果，比如匀速
//     //第五个是一个回调函数，
// }
// {
//     let louceng = document.querySelectorAll(".zuoce .louceng")
//     let neirong = document.querySelectorAll(".meilirensheng")
//     console.log(obj)
//     louceng.forEach(function (ele, index) {
//         ele.onclick = function () {
//             let ot = neirong[index].offsetTop;
//             animate(obj, {scrollTop: ot - 50}, 1000);
//         }
//     })
// }

