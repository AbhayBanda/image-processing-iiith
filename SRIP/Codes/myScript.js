			function myFunction(imgs) {
						
				 			 var expandImg = document.getElementById("expandedImg");
 			 var expandIPImg = document.getElementById("ip");
  			expandImg.src = imgs.src;
  			expandIPImg.src = imgs.src;
  			expandImg.parentElement.style.display = "block";
  			expandIPImg.parentElement.style.display = "block";
  			$("#ioHolder").hide()

			}
			function showDiv() {
				document.getElementById('imageGrid').style.display = 'block';
			}

			function hideIg() {
				document.getElementById('imageGrid').style.display = 'none';
			}

			function hideInst() {
				document.getElementById('instructionCanvas').style.display = 'none';
			}

			function showInst1() {
			document.getElementById('instructionCanvas2').style.display = 'block';
			}

						var canvas = document.getElementById('instructionCanvas');
			var ctx = canvas.getContext('2d');
			canvas.style.display = 'block';
			canvas.style.padding.top = "1px";
			canvas.style.padding.left= "1px";
			canvas.style.border= "dashed grey 1px";
			canvas.position = "relative";
			canvas.height = 50;
			ctx.fillStyle = "#c2c2c2";
			ctx.font = "13px Georgia";
			ctx.position = "relative";
			ctx.top = canvas.height/2;
			ctx.fillText("Select appropriate parameters and click on 'Run'.", 10, 25);

								var canvas1 = document.getElementById('instructionCanvas2');
					var ctx1 = canvas1.getContext('2d');
					canvas1.style.display = "none";
					canvas1.style.padding.top = "1px";
					canvas1.style.padding.left= "1px";
					canvas1.style.border= "dashed grey 1px";
					canvas1.position = "relative";
					canvas1.height = 50;
					ctx1.fillStyle = "#c2c2c2";
					ctx1.font = "13px Georgia";
					ctx1.position = "relative";
					ctx1.top = canvas.height/2;
					ctx1.fillText("Note down the results.", 10, 25);

					 var c = document.getElementById("inputCanvas");
					  c.style.display = 'none' 
					  c.style.border = "solid red 2px";
					  c.style.position = "absolute";
					  c.style.left = "400px";
					  c.style.top = "70px";
					  c.style.width = "600px";
					  c.style.height = "700px";



			$(document).ready(function() {
				$("#Processing").click(function() {
				if(!document.getElementById('hsi').checked && !document.getElementById('cmy').checked && !document.getElementById('rgb').checked ){alert("Please Select the Parameters")}
				else if(document.getElementById('hsi').checked){ $("#applyParam").show(); $('.HSI').show(); $('.CMY').hide();$('.RGB').hide(); $("#ioImages").hide();}
				else if(document.getElementById('cmy').checked){ $("#applyParam").show(); $('.CMY').show();$('.HSI').hide(); $('.RGB').hide(); $("#ioImages").hide();}
				else if(document.getElementById('rgb').checked){ $("#applyParam").show(); $('.RGB').show();$('.CMY').hide();$('.HSI').hide();$("#ioImages").hide();}
				$("#ioHolder").show();
				$("ioImages").hide();
				});
			});


			$(document).ready(function() {
				$('#colorSpace').click(function() {
					$("#ioHolder").hide();
					$('#applyParam').hide();
					$("#ioImages").show();
				});
			});

			var canvas2 = document.getElementById("finalInput");
			var ctx2 = canvas2.getContext("2d");
			canvas2.style.border = "solid blue 2px";
			canvas2.style.width = "300px";
			canvas2.style.height = "300px";
			canvas2.style.position = "relative";
			canvas2.style.left = "450px";
			canvas2.style.top = "150px";


			var canvas3 = document.getElementById("finalOutput");
			var ctx3 = canvas3.getContext("2d");
			canvas3.style.border = "solid blue 2px";
			canvas3.style.width = "300px";
			canvas3.style.height = "300px";
			canvas3.style.position = "relative";
			canvas3.style.left = "225px";
			canvas3.style.top = "150px";


document.getElementById("run").onclick = function() {
  var c3 = document.getElementById("redCanvas");
  var ctx3 = c3.getContext("2d");
  var img = document.getElementById("expandedImg");
  ctx3.drawImage(img, 0, 0);
  var imgData = ctx3.getImageData(0, 0, c3.width, c3.height);
  // invert colors
  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255
  }
  ctx3.putImageData(imgData, 0,0);




    var c4 = document.getElementById("greenCanvas");
  var ctx4 = c4.getContext("2d");
  var img1 = document.getElementById("expandedImg");
  ctx4.drawImage(img1, 0, 0);
  var imgData1 = ctx4.getImageData(0, 0, c4.width, c4.height);
  // invert colors
  var i;
  for (i = 0; i < imgData1.data.length; i += 4) {
    imgData1.data[i + 1] = 255
  }
  ctx4.putImageData(imgData1, 0,0);
    var c5 = document.getElementById("blueCanvas");
  var ctx5 = c5.getContext("2d");
  var img2 = document.getElementById("expandedImg");
  ctx5.drawImage(img2, 0, 0);
  var imgData2 = ctx5.getImageData(0, 0, c5.width, c5.height);
  // invert colors
  var i;
  for (i = 0; i < imgData2.data.length; i += 4) {
    imgData2.data[i + 2] = 255
  }
  ctx5.putImageData(imgData2, 0,0);
};