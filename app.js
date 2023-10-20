$(document).ready(function () {

    //selects all selector
    const checkAll = $("#all");

    //gets everything
    const checkboxes = $("input[type='checkbox']");

    //if the all get change checked/uncheciked then change the properties
    //of the all boxes to match all box
    //then change all text accordingly
    checkAll.on("change", function () {
        checkboxes.prop("checked", checkAll.prop("checked"));
        checkAll.next().text(checkAll.prop("checked") ? "Uncheck All" : "Check All");
    });
});
