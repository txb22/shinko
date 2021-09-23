/*tab*/
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function (el) {
    el.addEventListener("click", openTabs);
});


function openTabs(el) {
    var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
    var electronic = btn.dataset.electronic; // lấy giá trị trong data-electronic

    tabContent.forEach(function (el) {
        el.classList.remove("active");
    });

    tabLinks.forEach(function (el) {
        el.classList.remove("active");
    });

    document.querySelector("#" + electronic).classList.add("active");

    btn.classList.add("active");
}
/**/

var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


jQuery(document).ready(
    function () {
        menuMobile();
    });

function menuMobile() {
    $("#bt-menu-mobile").click(function () {
        $("#wrapper-menu-mobile").css({ left: 0, opacity: 0 });
        $("#wrapper-menu-mobile").animate({ opacity: 1 }, 200);
        $("#wrapper-menu-mobile .wrapper").animate({ right: "0" }, 500);
        jQuery(document.body).css('overflow', 'hidden');
        return false;
    });

    $("#bt-fechar-menu").click(function () {
        closeMenuMobile();
        return false;
    });

    $(".block-menu-mobile").mousedown(function () {
        closeMenuMobile();
    });
}

function closeMenuMobile() {
    $("#wrapper-menu-mobile .wrapper").animate({ right: "-100%" }, 300, function () {
        $("#wrapper-menu-mobile").animate({ opacity: 0 }, 200, function () {
            $("#wrapper-menu-mobile").css({ left: "100%", opacity: 1 });
            jQuery(document.body).css('overflow', 'auto');
        });
    });
}