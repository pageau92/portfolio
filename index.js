"use strict"

function handleAboutBtn() {

    $('.js-about-btn').on('click', function () {

        $(".main-home").hide();
        $(".work-content").hide();
        $(".resume-content").hide();
        $(".footer-content").hide();
        $(".about-content").show();
        $(".footer-home").show();

        $(".js-about-btn").css({ "text-decoration-line": "line-through", "font-style": "italic" });
        $(".js-work-btn").css({ "text-decoration-line": "none", "font-style": "normal" });
        $(".js-resume-btn").css({ "text-decoration-line": "none", "font-style": "normal" });
        $("#line-separator").css("display", "none");
        $("body").css("background-color", "#CCD1D1");
        $("header button").css("position", "static");
    });

    $('#about-close-btn').on('click', function () {
        $(".about-content").hide();
        $(".footer-content").hide();
        $(".main-home").show();
        $(".footer-home").show();

        $(".js-about-btn").css({ "text-decoration-line": "none", "font-style": "normal" });
        $("#line-separator").css("display", "none");
        $("body").css("background-color", "#EF5350");
        $("#background-whitish").css("display", "block");
    });
}


function handleResumeBtn() {

    $('.js-resume-btn').on('click', function () {

        $(".main-home").hide();
        $(".about-content").hide();
        $(".work-content").hide();
        $(".footer-content").hide();
        $(".resume-content").show();
        $(".footer-home").show();

        $(".js-resume-btn").css({ "text-decoration-line": "line-through", "font-style": "italic" });
        $(".js-work-btn").css({ "text-decoration-line": "none", "font-style": "normal" });
        $(".js-about-btn").css({ "text-decoration-line": "none", "font-style": "normal" });
        $("#line-separator").css("display", "none");
        $("body").css("background-color", "#CCD1D1");
        $("header button").css("position", "static");
    });

    $('#resume-close-btn').on('click', function () {
        $(".resume-content").hide();
        $(".footer-content").hide();
        $(".main-home").show();
        $(".footer-home").show();

        $(".js-resume-btn").css({ "text-decoration-line": "none", "font-style": "normal" });
        $("#line-separator").css("display", "none");
        $("body").css("background-color", "#EF5350");
        $("#background-whitish").css("display", "block");
    });
}


function handleWorkBtn() {

    $('.js-work-btn').on('click', function () {

        $(".main-home").hide();
        $(".about-content").hide();
        $(".resume-content").hide();
        $(".footer-content").hide();
        $(".work-content").show();
        $(".footer-home").show();

        $(".js-work-btn").css({ "text-decoration-line": "line-through", "font-style": "italic" });
        $(".js-about-btn").css({ "text-decoration-line": "none", "font-style": "normal" });
        $(".js-resume-btn").css({ "text-decoration-line": "none", "font-style": "normal" });
        $("body").css("background-color", "#CCD1D1");
        $("#line-separator").css("display", "none");
        $("main").css({ "margin-bottom": "50px" });
        $(".projects button").css("display", "block");
    });

    $('#work-close-btn').on('click', function () {
        $(".work-content").hide();
        $(".main-home").show();
        $(".footer-content").hide();
        $(".footer-home").show();

        $("body").css("background-color", "#EF5350");
        $("#line-separator").css("display", "none");
        $("#background-whitish").css("display", "block");
        $(".js-work-btn").css({ "text-decoration-line": "none", "font-style": "normal" });
    });

    viewProjects();
}

function viewProjects() {

    $('#weather-app-project').on('click', function () {

        $("#weather-app-selected").show();
        $("#battle-rockets-selected").hide();
        $("#fajitas-ritas-selected").hide();
        $("#food-finder-selected").hide();
    });

    $('#battle-rockets-project').on('click', function () {

        $("#battle-rockets-selected").show();
        $("#fajitas-ritas-selected").hide();
        $("#weather-app-selected").hide();
        $("#food-finder-selected").hide();
    });

    $('#food-finder-project').on('click', function () {

        $("#food-finder-selected").show();
        $("#battle-rockets-selected").hide();
        $("#fajitas-ritas-selected").hide();
        $("#weather-app-selected").hide();
    });

    $('#fajitas-ritas-project').on('click', function () {

        $("#fajitas-ritas-selected").show();
        $("#battle-rockets-selected").hide();
        $("#weather-app-selected").hide();
        $("#food-finder-selected").hide();
    });
}


function handleContactBtn() {

    $('#js-contact-btn').on('click', function () {

        $(".footer-home").hide();
        $(".footer-content").show();

        $("#contact-btn").css({ "text-decoration-line": "line-through", "font-style": "italic" });
    });

    $("#contact-close-btn").on('click', function () {
        $(".footer-content").hide();
        $(".footer-home").show();
    });
}

function handlePortfolio() {
    handleAboutBtn();
    handleResumeBtn();
    handleWorkBtn();
    handleContactBtn();
}

handlePortfolio();