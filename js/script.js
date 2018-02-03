window.onload = function() {
    document.getElementById('js-tog-rows').addEventListener( 'click' , changeRowClass );
    document.getElementById('js-tog-cols').addEventListener( 'click' , changeColClass );
    document.getElementById('js-tog-items').addEventListener( 'click' , changeItemClass );
}

function changeRowClass() {    
	var rows = document.getElementsByClassName('flex-container--row');

	for (var i = 0; i < rows.length; i++) {
	    rows[i].classList.toggle("show-row");
	}
}

function changeColClass() {    
	var cols = document.getElementsByClassName('flex-container--col');

	for (var i = 0; i < cols.length; i++) {
	    cols[i].classList.toggle("show-col");
	}
}

function changeItemClass() {    
	var items = document.getElementsByClassName('flex-item');

	for (var i = 0; i < items.length; i++) {
	    items[i].classList.toggle("show-item");
	}
}
