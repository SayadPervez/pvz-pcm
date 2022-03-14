function getScreen() {
    var caption = $('#caption-input').val();
        $("#caption-text").html(caption);
        $("#panel").hide();

    html2canvas(document.getElementById('myGraph')).then(function (canvas) {
        $("#blank").attr('href', canvas.toDataURL("image/png"));
        $("#blank").attr('download', caption + '.png');
        $("#blank")[0].click();
    });

}