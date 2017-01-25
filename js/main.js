var PICASSA_GALLERY_USERNAME = 'bp.mladen';         // TODO: 'mladencvetkovic' ili sta vec

$(document).ready(function() {
	// Picassa Gallery
	picassaPhotoGallery();
});


// Show picassa photo gallery
function picassaPhotoGallery() {
    $("#yoxview_picasa").ready(function() {
        $("#yoxview_picasa").yoxview({
                dataUrl: 'http://picasaweb.google.com/' + PICASSA_GALLERY_USERNAME,
                onLoadComplete: function() {
                        if($('#yoxview_picasa div.item').length > 0)
                                return;
                        $('#yoxview_picasa a').each(function(i, el) {
                                var link = $(el),
                                    text = link.find('img').attr('title'),
                                    cnt = $('<div class="item text-center col-lg-3 col-md-3 col-sm-4 col-xs-6"></div>'),
                                    desc = $('<div class="item-description"></div>').html(text);
                            
                                link.wrap(cnt);
                                link.parent(cnt).append(desc);
                        });
                }
        });
    });
}

