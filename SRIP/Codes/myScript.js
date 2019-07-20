$(document).ready(function() {
	$("#selectImage").click(function(){
		$("#imageGrid").show()
	});
});

$(document).ready(function() {
	$("#Reset").click(function(){
		window.location.reload();
	});
});



function hideIg() {
document.getElementById('imageGrid').style.display = 'none';
}

function myFunction(imgs) {

var expandImg = document.getElementById("inputImage");
var finalImg = document.getElementById("finalInput")
expandImg.src = imgs.src;
finalImg.src = imgs.src;
expandImg.parentElement.style.display = "block";
finalImg.parentElement.style.display = "block";
$("#io").hide();
}

$(document).ready(function(){
	$("#Run").click(function(){

	var c3 = document.getElementById("redCanvas");
	var ctx3 = c3.getContext("2d");
	var img = document.getElementById("inputImage");
	ctx3.drawImage(img, 0, 0);
	var imgData = ctx3.getImageData(0, 0, c3.width, c3.height);
	// invert colors
	var i;
	for (i = 0; i < imgData.data.length; i += 4) {
		    imgData.data[i] = imgData.data[i];
    		imgData.data[i+1] = 0;
    		imgData.data[i+2] = 0;
	}
	ctx3.putImageData(imgData, 0,0);

	var c4 = document.getElementById("greenCanvas");
	var ctx4 = c4.getContext("2d");
	var img1 = document.getElementById("inputImage");
	ctx4.drawImage(img1, 0, 0);
	var imgData1 = ctx4.getImageData(0, 0, c4.width, c4.height);
	// invert colors
	var i;
	for (i = 0; i < imgData1.data.length; i += 4) {
			    imgData1.data[i] = 0;
   				imgData1.data[i+1] = imgData1.data[i + 1];
    			imgData1.data[i+2] = 0;
	}
	ctx4.putImageData(imgData1, 0,0);

	var c5 = document.getElementById("blueCanvas");
	var ctx5 = c5.getContext("2d");
	var img2 = document.getElementById("inputImage");
	ctx5.drawImage(img2, 0, 0);
	var imgData2 = ctx5.getImageData(0, 0, c5.width, c5.height);
	// invert colors
	var i;
	for (i = 0; i < imgData2.data.length; i += 4) {
				imgData2.data[i] = 0;
   				imgData2.data[i+1] = 0 ;
    			imgData2.data[i+2] = imgData2.data[i + 2];
	}
	ctx5.putImageData(imgData2, 0,0);
	});
});

$(document).ready(function() {
	$("#Processing").click(function(){
	

	
		var c = document.getElementById("colorSpacingBox");
		c.style.height = "200px";
		if(!document.getElementById('HSI').checked && !document.getElementById('CMY').checked && !document.getElementById('YCrCb').checked ){alert("Please Select the Parameters")}
		else if(document.getElementById("HSI").checked)
		{
				$("#parameters1").show();
				$("#parameters2").hide();
				$("#parameters3").hide();
				$("#parameters").show();
				$("#io").show();
				$("#ipScript").hide();
				$("#imagePlanes").hide();
				$("#linearfunction").hide();
		}
		else if (document.getElementById("CMY").checked)
		{
				$("#parameters").show();
				$("#parameters1").hide();
				$("#parameters2").show();
				$("#parameters3").hide();
				$("#io").show();
				$("#ipScript").hide();
				$("#imagePlanes").hide();
				$("#linearfunction").hide();
		}
		else 
		{
				$("#parameters").show();
				$("#parameters1").hide();
				$("#parameters2").hide();
				$("#parameters3").show();
				$("#io").show();
				$("#ipScript").hide();
				$("#imagePlanes").hide();
				$("#linearfunction").hide();
		}
	});
});
$(document).ready(function(){
	$("#selectImage").click(function() {
		$("#linearfunction").hide();
		$("#parameters").hide();
		$("#io").hide();
		$("#imagePlanes").show();
		$("#ipScript").show();
			var c = document.getElementById("colorSpacingBox");
			c.style.height = "125px"

	});
});
$(document).ready(function(){
	$("#ColorSpacing").click(function() {
		$("#parameters").hide();
		$("#imagePlanes").show();
		$("#ipScript").show();
			var c = document.getElementById("colorSpacingBox");
			c.style.height = "125px";
	});
});

var slider = document.getElementById("myRange");
var output = document.getElementById("slope");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
  document.getElementById("eqnslope").innerHTML = slider.value + " r + " + slider2.value;
    

}

var slider2 = document.getElementById("myOffsetRange");
var output2 = document.getElementById("offset");
output2.innerHTML = slider2.value; 

slider2.oninput = function() {
  output2.innerHTML = this.value;
  document.getElementById("eqnslope").innerHTML = slider.value + " r + " + slider2.value;

  
}
$(document).ready(function(){
	$("#linear").click(function() {
			$("#linearfunction").show();
			var c = document.getElementById("colorSpacingBox");
			c.style.height = "400px";
	});
});

$(document).ready(function(){
	$("#Run").click(function() {
		if(document.getElementById('HSI').checked || document.getElementById('CMY').checked || document.getElementById('YCrCb').checked)
			{
				$("#id").show();
				$("#instructionBox").hide();
				$("#instructionBox2").show();

			}
	});
});


$(document).ready(function() {
	$("#Run").click(function(){
	var c6 = document.getElementById("finalOutput");
	var ctx6 = c6.getContext("2d");
	var img6 = document.getElementById("inputImage");
	ctx6.drawImage(img6, 0, 0);
	var imgData6 = ctx6.getImageData(0, 0, c6.width, c6.height);
	if(document.getElementById('HSI').checked) {
			if(document.getElementById('Hue').checked) {
				var i;
				if(slider2.value<0) slider2.value = -1 * slider2.value;
					for (i = 0; i < imgData6.data.length; i += 4) {
					imgData6.data[i + 3] = slider.value;
					}
					ctx6.putImageData(imgData6, 0,0);
			}
			if(document.getElementById('Saturation').checked) {
				var i;
				if(slider2.value<0) slider2.value = -1 * slider2.value;
				for (i = 0; i < imgData6.data.length; i += 4) {
				imgData6.data[i] = slider2.value;
				}
				ctx6.putImageData(imgData6, 0,0);
			}
			if(document.getElementById('Intensity').checked) {
				var i;
				if(slider2.value<0) slider2.value = -1 * slider2.value;
				for (i = 0; i < imgData6.data.length; i += 4) {
				imgData6.data[i] = slider2.value;
				}	
				ctx6.putImageData(imgData6, 0,0);
			}

			}


	else if(document.getElementById('CMY').checked) {
			if(document.getElementById('Cyan').checked) {
				var i;
				if(slider2.value<0) slider2.value = -1 * slider2.value;
					for (i = 0; i < imgData6.data.length; i += 4) {
					imgData6.data[i + 1] = slider2.value;
					imgData6.data[i + 2] = slider2.value;
					}
					ctx6.putImageData(imgData6, 0,0);
			}
			if(document.getElementById('Magenta').checked) {
				var i;
				if(slider2.value<0) slider2.value = -1 * slider2.value;
				for (i = 0; i < imgData6.data.length; i += 4) {
					imgData6.data[i] = slider2.value;
					imgData6.data[i + 2] = slider2.value;
				}
				//imgData6.data[i + 1] = 1 - imgData6.data[i + 1];
				ctx6.putImageData(imgData6, 0,0);
			}
			if(document.getElementById('Yellow').checked) {
				var i;
				if(slider2.value<0) slider2.value = -1 * slider2.value;
				for (i = 0; i < imgData6.data.length; i += 4) {
					imgData6.data[i] = slider2.value;
					imgData6.data[i + 1] = slider2.value;
				}	
				//imgData6.data[i + 2] = 1 - imgData6.data[i + 2];
				ctx6.putImageData(imgData6, 0,0);
			}
	}
	else if(document.getElementById('YCrCb').checked) {
			if(document.getElementById('Red').checked) {
				var i;
				if(slider2.value<0) slider2.value = -1 * slider2.value;
					for (i = 0; i < imgData6.data.length; i += 4) {
					imgData6.data[i] =  slider2.value;
					}
					ctx6.putImageData(imgData6, 0,0);
			}
			if(document.getElementById('Green').checked) {
				var i;
				if(slider2.value<0) slider2.value = -1 * slider2.value;
				for (i = 0; i < imgData6.data.length; i += 4) {
					imgData6.data[i + 1] = slider2.value;
				}
				ctx6.putImageData(imgData6, 0,0);
			}
			if(document.getElementById('Blue').checked) {
				var i;
				if(slider2.value<0) slider2.value = -1 * slider2.value;
				for (i = 0; i < imgData6.data.length; i += 4) {
					imgData6.data[i + 2] = slider2.value;
				}	
				ctx6.putImageData(imgData6, 0,0);
			}
			
	}


	});
});

