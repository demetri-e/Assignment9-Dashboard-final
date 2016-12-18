// Toggle Show/Hide Function

function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}


//Settings / Save/ Cancel Buttons Ios Toggle Local Storage

	function save(){
	    var checkbox = document.getElementById('checkbox1');
	    localStorage.setItem('checkbox1', checkbox.checked);

	    var checkbox = document.getElementById('checkbox2');
	    localStorage.setItem('checkbox2', checkbox.checked);
	}

	function load(){    
	    var checked = JSON.parse(localStorage.getItem('checkbox1'));
	    document.getElementById("checkbox1").checked = checked;

	    var checked = JSON.parse(localStorage.getItem('checkbox2'));
	    document.getElementById("checkbox2").checked = checked;
	}

	function wis(){
	    location.reload();
	    localStorage.clear()

	}

	load();

// Select Button

	$(function() {
		$('#edit').change(function() {
		    localStorage.setItem('todoData', this.value);
		});
		if(localStorage.getItem('todoData')){
		    $('#edit').val(localStorage.getItem('todoData'));
		}
	});


	// Line Chart Navigation with Radio buttons
	$(document).ready(function(){
	    $('input[type="radio"]').click(function(){
	        if($(this).attr("value")=="red"){
	            $(".box").not(".red").hide();
	            $(".red").show();
	        }
	        if($(this).attr("value")=="green"){
	            $(".box").not(".green").hide();
	            $(".green").show();
	        }
	        if($(this).attr("value")=="blue"){
	            $(".box").not(".blue").hide();
	            $(".blue").show();
	        }
	        if($(this).attr("value")=="purple"){
	            $(".box").not(".purple").hide();
	            $(".purple").show();
	        }
	    });
	});

	// Hide Unchecked Line Charts

	 $(".hide").hide();




		//Validate Form Fields and Return Alerts
		function validateForm() {
		    var x = document.forms["myForm"]["fname"].value;
		    var y = document.forms["myForm"]["message"].value;
		    if (x == "") {
		        alert("Please choose a user to send a message to");
		        return false;
		    }
		        if (y == "") {
		        alert("Your message field is empty");
		        return false;
		    } else {
		    	alert("Your message to " + x + " was sent succesfully!");
		    }
		}



	// Radio Button Checked Onload
		$(function() {
    	var $radios = $('input:radio[name=colorRadio]');
	    if($radios.is(':checked') === false) {
	        $radios.filter('[value=red]').prop('checked', true);
		    }
		});
