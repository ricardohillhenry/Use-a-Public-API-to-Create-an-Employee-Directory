let employees = [],
listItems;
//console.log($employees)

$.ajax({
  url: 'https://randomuser.me/api/?results=12', //fetches 12 randomly generated users from the Random User API
  dataType: 'json',
  success: function(data) {
  	$("#modal").hide();
    $.each(data.results, function(employeeIndex, employee){
    	employees = data.results;
    	$("ul").append(

    		`	<div id="employee${employeeIndex}" class="employee-container" 
    				<li class="employee">
    					<img src="${employee.picture.large}">
	    				<div class="employee-info">
							<p class="employee-name capitalize">${employee.name.first} ${employee.name.last}</p>
							<p class="employee-email">${employee.email}</p>
							<p class="employee-location capitalize">${employee.location.city}, ${employee.location.state}</p>
						</div>
					</li>
    			</div>
    		`);//end ul append

    	$(`#employee${employeeIndex}`).click(function(){
    		$("#modal").empty();
    		$("#modal").show();
			$("#modal").append(`
				<span class="close">&times;</span>
				<div id="modal-info-container">
					<div id="employee${employeeIndex}-upper-info" class="modal-info">
						<img src="${employee.picture.large}">
						<p id="employee${employeeIndex}-modal-name" class="capitalize employee-name">${employee.name.first} ${employee.name.last}</p>
						<p id="employee${employeeIndex}-modal-email" class="employee-modal-info">${employee.email}</p>
						<p id="employee${employeeIndex}-modal-location" class="capitalize employee-modal-info">${employee.location.city}, ${employee.location.state}</p>
					</div>
					<div id="employee${employeeIndex}-lower-info" class="modal-info employee-modal-info">
						<p id="employee${employeeIndex}-modal-phone" class="capitalize employee-modal-info">${employee.cell}</p>
						<p id="employee${employeeIndex}-modal-address" class="capitalize employee-modal-info">${employee.location.street}, ${employee.location.state} ${employee.location.postcode}</p>
						<p id="employee${employeeIndex}-modal-birthday" class="capitalize employee-modal-info">Birthday: ${employee.dob}</p>
					</div>
				</div>
			`)

			$(".close").click(function(){
				$("#modal").hide();
			});
		});

    	if(employeeIndex === 11){
    		listItems = document.getElementById("employees").children;
			//console.log(listItems)	
    	}
	});//end forEach
	console.log(employees);
  } //end success
});// end ajax