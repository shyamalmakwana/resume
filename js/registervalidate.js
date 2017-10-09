console.log("g")
$(document).ready(function() {
$('#button').click(function() {
	var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
	var pwd = $('#pwd').val();
	var pwd1 = $('#pwd1').val();
    var url = $('#url').val();
    var username = $('#usrname').val();
    var gender = $("input[name = gender]:checked").length;

	var ck_name = /^[A-Za-z]{3,20}$/;
    var ck_usrname = /^[A-Za-z0-9]{3,20}$/;
	var ck_password = /^[A-Za-z0-9!@#$%^&*()_]{8,20}$/;
    var ck_url = /^[a-zA-Z0-9\-\.]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/;

	var errors = [];

		if(!firstname.match(ck_name)) {
			errors[errors.length] = "You must enter valid UserName & no special char .";
			document.form.firstname.style.borderColor = "red";
		}


        else if(!lastname.match(ck_name)) {
        	errors[errors.length] = "You must enter valid UserName & no special char .";
        	document.form.lastname.style.borderColor = "red";
        }


        else if(!username.match(ck_usrname)) {
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

        else if(!url.match(ck_url)) {
            errors[errors.length] = "You must enter valid URL";
            document.form.homepage.style.borderColor = "red";
        }

        else if (gender < 1){
                errors[errors.length] = "Please select your Gender.";
            }

		if (errors.length > 0) {
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
