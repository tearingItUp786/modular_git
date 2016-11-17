var Details = (function() {

    function loadPerson(ID) {
        $.ajax("details/" + ID + ".html", {
                dataType: "text"
            })
            .then(function(content) {
                $content.html(content);
            });
    }

    function init() {
        $content = $("[rel=js-details]");
        EVT.on("person-selected", loadPerson);
    }

    var $content;

    EVT.on("init", init);

    return {
        init: init,
        loadPerson: loadPerson
    };

})();
