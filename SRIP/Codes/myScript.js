$(document).ready(function() {
	$("#selectImage").click(function(){
		$("#imageGrid").show()

				$("#opScript").show();
				$("#opimagePlanes1").show();
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
	$("#ipScript").hide();
	$("#imagePlanes").hide();
	$("#linearfunction").hide();
	$("#processingButtons").show();
	$("#colorSpacingButtons").hide();
	$("#opimagePlanes1").hide();
	$("#opimagePlanes2").hide();
	$("#opimagePlanes3").hide();
	$("#opScript").hide();
	    $("#HSI").prop( "checked", false );
    $("#CMY").prop( "checked", false );
    $("#YCrCb").prop("checked", false);
		//if(!document.getElementById('HSI').checked && !document.getElementById('CMY').checked && !document.getElementById('RGB').checked ){alert("Please Select the Parameters")}
		 if(document.getElementById("HSI1").checked)
		{
				$("#parameters1").show();
				$("#parameters2").hide();
				$("#parameters3").hide();
				$("#parameters").show();
				$("#io").show();
						var c = document.getElementById("colorSpacingBox");
		c.style.height = "200px";
		}
		else if (document.getElementById("CMY1").checked)
		{
				$("#parameters").show();
				$("#parameters1").hide();
				$("#parameters2").show();
				$("#parameters3").hide();
				$("#io").show();
						var c = document.getElementById("colorSpacingBox");
		c.style.height = "200px";
		}
		else 
		{
				$("#parameters").show();
				$("#parameters1").hide();
				$("#parameters2").hide();
				$("#parameters3").show();
				$("#io").show();
						var c = document.getElementById("colorSpacingBox");
		c.style.height = "200px";
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
			if(document.getElementById("HSI").checked){
				$("#opimagePlanes3").hide();
				$("#opimagePlanes2").hide();
				$("#opimagePlanes1").show();
			}
			if(document.getElementById("CMY").checked){
				$("#opimagePlanes3").hide();
				$("#opimagePlanes1").hide();
				$("#opimagePlanes2").show();
			}
			else {
				$("#opimagePlanes1").hide();
				$("#opimagePlanes2").hide();
				$("#opimagePlanes1").show();
			}

	});
});
$(document).ready(function(){
	$("#ColorSpacing").click(function() {
		$("#parameters").hide();
		$("#imagePlanes").show();
		$("#processingButtons").hide();
		$("#colorSpacingButtons").show();
		$("#io").hide();
		$("#ipScript").show();
			var c = document.getElementById("colorSpacingBox");
			c.style.height = "125px";
		if(document.getElementById("HSI").checked)
		{		$("#opScript").show();
				$("#opimagePlanes1").show();
				$("#opimagePlanes2").hide();
				$("#opimagePlanes2").hide();
		}
		else if(document.getElementById("CMY").checked)
		{
				$("#opScript").show();
				$("#opimagePlanes2").show();
				$("#opimagePlanes1").hide();
				$("#opimagePlanes3").hide();
		}
		else {
				$("#opScript").show();
				$("#opimagePlanes3").show();
				$("#opimagePlanes1").hide();
				$("#opimagePlanes2").hide();
		}
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
			$("#opimagePlanes1").show();
			$("#opimagePlanes2").hide();
			$("#opimagePlanes3").hide();

	var c10 = document.getElementById("hueCanvas");
	var ctx10 = c10.getContext("2d");
	var img10 = document.getElementById("inputImage");
	ctx10.drawImage(img10, 0, 0);
	var imgData10 = ctx10.getImageData(0, 0, c10.width, c10.height);
	ctx10.putImageData(imgData10, 0,0);
	document.getElementById("hueCanvas").style.filter  = "hue-rotate(100deg)";
	var c11 = document.getElementById("saturationCanvas");
	var ctx11 = c11.getContext("2d");
	var img11 = document.getElementById("inputImage");
	ctx11.drawImage(img11, 0, 0);
	var imgData11 = ctx11.getImageData(0, 0, c11.width, c11.height);
	ctx11.putImageData(imgData11, 0,0);
	document.getElementById("saturationCanvas").style.filter  = "saturate(10%)";
    			var c12 = document.getElementById("intensityCanvas");
	var ctx12 = c12.getContext("2d");
	var img12 = document.getElementById("inputImage");
	ctx12.drawImage(img12, 0, 0);
	var imgData12 = ctx12.getImageData(0, 0, c12.width, c12.height);
	var intensity = 0;
	for (i = 0; i < imgData12.data.length; i += 4) {
		    imgData12.data[i] = 0.299*imgData12.data[i];
		    imgData12.data[i + 1] = 0.587*imgData12.data[i + 1] ;
		    imgData12.data[i + 2]  = 0.144*imgData12.data[i + 2];
		    
	}

	ctx12.putImageData(imgData12, 0,0);


	}
		if(document.getElementById('CMY').checked) {
			$("#opimagePlanes2").show();
			$("#opimagePlanes1").hide();
			$("#opimagePlanes3").hide();

			var c7 = document.getElementById("cyanCanvas");
	var ctx7 = c7.getContext("2d");
	var img7 = document.getElementById("inputImage");
	ctx7.drawImage(img7, 0, 0);
	var imgData7 = ctx7.getImageData(0, 0, c7.width, c7.height);
	// invert colors
	var i;
	for (i = 0; i < imgData7.data.length; i += 4) {
		    imgData7.data[i] = 0;

	}
	ctx7.putImageData(imgData7, 0,0);
				var c8 = document.getElementById("magentaCanvas");
	var ctx8 = c8.getContext("2d");
	var img8 = document.getElementById("inputImage");
	ctx8.drawImage(img8, 0, 0);
	var imgData8 = ctx8.getImageData(0, 0, c8.width, c8.height);
	// invert colors
	var i;
	for (i = 0; i < imgData8.data.length; i += 4) {
		    imgData8.data[i + 1] = 0;
	}
	ctx8.putImageData(imgData8, 0,0);
				var c9 = document.getElementById("yellowCanvas");
	var ctx9 = c9.getContext("2d");
	var img9 = document.getElementById("inputImage");
	ctx9.drawImage(img9, 0, 0);
	var imgData9 = ctx9.getImageData(0, 0, c9.width, c9.height);
	// invert colors
	var i;
	for (i = 0; i < imgData9.data.length; i += 4) {
			imgData9.data[i + 2] = 0; 
	}
	ctx9.putImageData(imgData9, 0,0);
	}
		if(document.getElementById('YCrCb').checked) {
			$("#opimagePlanes3").show();
			$("#opimagePlanes1").hide();
			$("#opimagePlanes2").hide();
							var c10 = document.getElementById("luminanceCanvas");
	var ctx10 = c10.getContext("2d");
	var img10 = document.getElementById("inputImage");
	ctx10.drawImage(img10, 0, 0);
	var imgData10 = ctx10.getImageData(0, 0, c10.width, c10.height);
	// invert colors
	var i;
	for (i = 0; i < imgData10.data.length; i += 4) {
			
			imgData10.data[i] =  16/3 + (65.378/256)*imgData10.data[i];
			imgData10.data[i + 1] =16/3 +  (129.057/256)*imgData10.data[i + 1];
			imgData10.data[i + 2] = 16/3 +(25.064/256)*imgData10.data[i + 2];

	}
	ctx10.putImageData(imgData10, 0,0);
	
			var c11 = document.getElementById("CbCanvas");
	var ctx11 = c11.getContext("2d");
	var img11 = document.getElementById("inputImage");
	ctx11.drawImage(img11, 0, 0);
	var imgData11 = ctx11.getImageData(0, 0, c11.width, c11.height);
	// invert colors
	var i;
	for (i = 0; i < imgData11.data.length; i += 4) {
			
			imgData11.data[i] =  128/3 - (37.945/256)*imgData11.data[i];
			imgData11.data[i + 1] =128/3 -  (74.494/256)*imgData11.data[i + 1];
			imgData11.data[i + 2] = 128/3 + (112.439/256)*imgData11.data[i + 2];

	}
	ctx11.putImageData(imgData11, 0,0);
	
	 var c12 = document.getElementById("CrCanvas");
	var ctx12 = c12.getContext("2d");
	var img12 = document.getElementById("inputImage");
	ctx12.drawImage(img12, 0, 0);
	var imgData12 = ctx12.getImageData(0, 0, c12.width, c12.height);
	// invert colors
	var i;
	for (i = 0; i < imgData12.data.length; i += 4) {
			
			imgData12.data[i] =  128/3 + (112.439/256)*imgData12.data[i];
			imgData12.data[i + 1] =128/3 - (94.154/256)*imgData12.data[i + 1];
			imgData12.data[i + 2] = 128/3 - (18.285/256)*imgData12.data[i + 2];

	}
	ctx12.putImageData(imgData12, 0,0);
	
}


	if(document.getElementById('HSI1').checked) {
			if(document.getElementById('Hue').checked) {
				var i;
			for (i = 0; i < imgData6.data.length; i += 4) {
				imgData6.data[i] = imgData6.data[i] * slider.value + slider2.value;
				imgData6.data[i + 1] = imgData6.data[i + 1] * slider.value + slider2.value;
				imgData6.data[i + 2] = imgData6.data[i + 2] + slider.value + slider2.value;
				}
			ctx6.putImageData(imgData6, 0,0);
			document.getElementById("finalOutput").style.filter  = "hue-rotate(90deg)","hue-rotate(180deg)";
					 
					
			}
			if(document.getElementById('Saturation').checked) {
				var i;
				for (i = 0; i < imgData6.data.length; i += 4) {
				imgData6.data[i] = imgData6.data[i] * slider.value + slider2.value;
				imgData6.data[i + 1] = imgData6.data[i + 1] * slider.value + slider2.value;
				imgData6.data[i + 2] = imgData6.data[i + 2] + slider.value + slider2.value;
				}
			ctx6.putImageData(imgData6, 0,0);
				document.getElementById("finalOutput").style.filter = "saturate(8)";
			
			}
			if(document.getElementById('Intensity').checked) {
				var i;
				//if(slider2.value<0) slider2.value = -1 * slider2.value;
				for (i = 0; i < imgData6.data.length; i += 4) {
					imgData6.data[i] = (imgData6.data[i]*slider.value + slider2.value)/3;
					imgData6.data[i + 1] = (imgData6.data[i + 1]*slider.value + slider2.value) /3;
					imgData6.data[i + 2] = (imgData6.data[i + 2]*slider.value + slider2.value)/3;
				}	
				ctx6.putImageData(imgData6, 0,0);
			}

			}


	if(document.getElementById('CMY1').checked) {
			if(document.getElementById('Cyan').checked) {
				var i;
				//if(slider2.value<0) slider2.value = -1 * slider2.value;
					for (i = 0; i < imgData6.data.length; i += 4) {
							imgData6.data[i] = 1 - imgData6.data[i];
							imgData6.data[i] = imgData6.data[i]*slider.value + slider2.value
					}
					ctx6.putImageData(imgData6, 0,0);
			}
			if(document.getElementById('Magenta').checked) {
				var i;
				//if(slider2.value<0) slider2.value = -1 * slider2.value;
				for (i = 0; i < imgData6.data.length; i += 4) {
							imgData6.data[i + 1] = 1 - imgData6.data[i + 1];
							imgData6.data[i + 1] = imgData6.data[i + 1]*slider.value + slider2.value;
				}
				//imgData6.data[i + 1] = 1 - imgData6.data[i + 1];
				ctx6.putImageData(imgData6, 0,0);
			}
			if(document.getElementById('Yellow').checked) {
				var i;
				//if(slider2.value<0) slider2.value = -1 * slider2.value;
				for (i = 0; i < imgData6.data.length; i += 4) {
							imgData6.data[i + 2] = 1 - imgData6.data[i + 2];
							imgData6.data[i + 2] = imgData6.data[i + 2]*slider.value + slider2.value
				}	
				//imgData6.data[i + 2] = 1 - imgData6.data[i + 2];
				ctx6.putImageData(imgData6, 0,0);
			}
	}
	if(document.getElementById('RGB').checked) {
			if(document.getElementById('Red').checked) {
				var i;
				//if(slider2.value<0) slider2.value = -1 * slider2.value;
					for (i = 0; i < imgData6.data.length; i += 4) {
					imgData6.data[i] =  imgData6.data[i] * slider.value + slider2.value;
					}
					ctx6.putImageData(imgData6, 0,0);
			}
			if(document.getElementById('Green').checked) {
				var i;
				//if(slider2.value<0) slider2.value = -1 * slider2.value;
				for (i = 0; i < imgData6.data.length; i += 4) {
					imgData6.data[i + 1] = imgData6.data[i + 1] * slider.value + slider2.value;
				}
				ctx6.putImageData(imgData6, 0,0);
			}
			if(document.getElementById('Blue').checked) {
				var i;
				//if(slider2.value<0) slider2.value = -1 * slider2.value;
				for (i = 0; i < imgData6.data.length; i += 4) {
					imgData6.data[i + 2] = imgData6.data[i + 2] * slider.value + slider2.value;
				}	
				ctx6.putImageData(imgData6, 0,0);
			}
			
	}
	});
});

