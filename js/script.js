$( document ).ready(function() {
	var arr = [
	    {
	        "title": "Time to Share: 6 for $3.99*",
	        "img": "comp_plate_promo1.png",
	        "descrption": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
	        "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
	        "productUrl": "/products/promo1.html"
	    },
	    {
	        "title": "Rise 'n shine",
	        "img": "comp_plate_promo2.png",
	        "descrption": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
	        "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
	        "productUrl": "/products/promo2.html"
	    },
	    {
	        "title": "PM Snackers: Brownie Bites",
	        "img": "comp_plate_promo3.png",
	        "descrption": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
	        "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
	        "productUrl": "/products/promo3.html"
	    },
	    {
	        "title": "PM Snackers: Brownie Bites new",
	        "img": "comp_plate_promo4.png",
	        "descrption": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
	        "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
	        "productUrl": "/products/promo4.html"
	    }
	];

	var img = arr[0].img;
	$('.block_img').append('<img id="imageswap" src="img/'+img+'">');

	var title = arr[0].title;
	$('#title').text(title);

	var descrption = arr[0].descrption;
	$('#descr').text(descrption);

	var note = arr[0].note;
	$('#note').text(note);
    
	$('.show').click(function () {
		var link = $(this);
		$('.block_img img').fadeToggle(1000, function() {
	    
		});

		$('.block_img').slideToggle(1000, function() {
		    if ($(this).is(':visible')) {
		         link.text('Show Details');

		    } else if($(this).not(':visible')) {
		         link.text('Hide Details'); 
		         $('.body').animate({height:220,},500); 
		          $(".show").click(function () {
		         	$('.body').animate({height:25},500); 
		         });              
		    }        
		});

	});

	var arr_img = [];
	var arr_title = [];
	var arr_descr = [];
	var arr_note = [];
	for (var i = 0; i < arr.length; i++) {
		var img = arr[i].img;
		var title = arr[i].title;
		var descr = arr[i].descrption;
		var note = arr[i].note;
		arr_img.push(img);
		arr_title.push(title);
		arr_descr.push(descr);
		arr_note.push(note);

	}

	var max = arr_img.length || arr_title.length || arr_descr.length || arr_note.length;
	var curIdx = 0;


	var curSrc = $('#imageswap').attr('src');
	var title_txt = $("#title").text();
	var descr = $("#descr").text();
	var note = $("#note").text();


	var curID = curSrc.replace(/.*\/(.*?)\.png/i, '$1');
	var titleID = title_txt;
	var descrID = descr;
	var noteID = note;

	var curIdx = 0;


	while (curIdx < max) {
	    if (arr_img[curIdx] == curID || arr_title[curIdx] == titleID || arr_descr[curIdx] == descrID || arr_note[curIdx] == noteID) {
	        break;
	    }
	    curIdx++;
	}


	var imgSrcBase = 'img/';



	$('.next').click( function() {
	    curIdx = (curIdx+1) % max;
	    $("#imageswap").attr('src', imgSrcBase+arr_img[curIdx]);
	    $("#title").text(arr_title[curIdx]);
	    $("#descr").text(arr_descr[curIdx]);
	    $("#note").text(arr_note[curIdx]);
	});


	$('.prev').click( function() {
	    curIdx = (curIdx+max-1) % max;
	    $("#imageswap").attr('src', imgSrcBase+arr_img[curIdx]);
	    $("#title").text(arr_title[curIdx]);
	    $("#descr").text(arr_descr[curIdx]);
	    $("#note").text(arr_note[curIdx]);
	});


});