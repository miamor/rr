function rate (element) {
    var rTxt = ['', 'Tệ', 'Không tốt', 'Trung bình', 'Tốt', 'Tuyệt vời'];
	if (!element) element = 'body';
	$(element).find(".rating-icons").not(".rated, .myrate").children(".rating-star-icon").hover(function() {
        var torate = $(this).closest('.torate');
		var a = $(this).attr("id").split("v")[1];
		torate.find('.ui_star_rating').attr('class', 'ui_star_rating star_'+a);
        torate.next('#ratingFlag').find('em').html(rTxt[a]);
	}).mouseout(function() {
        var torate = $(this).closest('.torate');
        var crate = $(element).find(".rate-val").val();
        torate.find('.ui_star_rating').attr('class', 'ui_star_rating star_'+crate);
        torate.next('#ratingFlag').find('em').html(rTxt[crate]);
	}).click(function() {
        var torate = $(this).closest('.torate');
		a = $(this).attr("id").split("v")[1];
		$(element).find(".rate-val").val(a);
        torate.find('.ui_star_rating').attr('class', 'ui_star_rating star_'+a);
        torate.next('#ratingFlag').find('em').html(rTxt[a]);
	});
	$(element).submit(function() {
		i = $(this).find(".star-info").attr("data-c");
		url = window.location.href;
		a = $(this).find(".rate-val").val();
//		$('[type="submit"]').attr("disabled", true);
//        alert(url + "&rate=" + a);
		$form = $(this);
		$form.children('*:visible').hide().addClass('visible hide-to-load');
		$form.append('<div class="spinner loading-sending"><div></div><div></div><div></div></div>');
		//formData = getFormData($form);
        var formData = $form.serialize();
		$.ajax({
			url: url + "?do=rate&rate=" + a,
			type: "POST",
			data: formData,
			datatype: "json",
			success: function (data) {
				alertsContent = data.split(/\[content\]|\[\/content]/)[1];
				alertsType = data.split(/\[type\]|\[\/type\]/)[1];
				alertsDataID = data.split(/\[dataID\]|\[\/dataID\]/)[1];
				$form.addClass('just-sent').children('.spinner.loading-sending').remove();
				$form.children('*.visible.hide-to-load').show().removeClass('visible hide-to-load');
				if (alertsContent) mtip('', alertsType, '', alertsContent);
				$('body').append(alertsContent);
				if (alertsType == 'success') {
					$form.parent().children(".ratings-list").load(url + "?v=window section#ratings .ratings-list > div");
					$form.slideUp(300).remove();
				}
			},
			error: function(e) {
				mtip("", "error", e.status, "Please try again or contact the administrators for help.")
			}
		});
		return false
	})
}
