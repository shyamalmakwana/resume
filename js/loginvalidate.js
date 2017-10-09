console.log("g")
$(document).ready(function() {
$('#button').click(function() {
	var firstname = $('#1').val();
	var pwd = $('#2').val();
	var pwd1 = $('#3').val();

	var ck_name = /^[A-Za-z]{3,20}$/;
	var ck_password = /^[A-Za-z0-9!@#$%^&*()_]{8,20}$/;

	var errors = [];

		if(!firstname.match(ck_name)) {
			errors[errors.length] = "You must enter valid UserName & no special char .";
			document.form.usrname.style.borderColor = "red";

		}

		else if(!pwd.match(ck_password)) {
			errors[errors.length] = "Password must be at least 8 char"
			document.form.pwd.style.borderColor = "red";
		}

		else if(pwd != pwd1) {
			errors[errors.length] = "Password must match"
			document.form.pwd1.style.borderColor = "red";
		}

		if (errors.length > 0)
		{
			reportErrors(errors);
			return false;
		}
	return true;
		function reportErrors(errors) {
			var msg = "Please Enter Valide Data...\n";
			for (var i = 0; i<errors.length; i++)
			{
				var numError = i + 1;
				msg += "\n" + numError + ". " + errors[i];
			}
		alert(msg);
		}
	});
});



