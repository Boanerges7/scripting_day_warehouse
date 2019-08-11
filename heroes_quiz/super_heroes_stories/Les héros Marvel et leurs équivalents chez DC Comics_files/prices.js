if ($j(".bloc_price").size() > 0) {
	$j(".bloc_price").each(function(i, val) {
		var search_id = $j(this).attr("data-search");
		var product_id = $j(this).attr("data-id");
		if ("undefined" == typeof search_id) {
			var id = product_id;
			var type = "product";
		} else {
			var id = search_id
			var type = "search";
		}
		$this = $j(this);
		$j(this).removeAttr("title");
		$j(this).load("/server.php?action=display_prices&id="+id+"&type="+type, function(data) {
			$this.show();
		});
	});
}