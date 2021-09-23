//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
R_width=100;
R_height=100;
Rx=10;
Ry=10;
bimg= "parkingLot.jpg";
rimg= "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	Bimg_tag=new Image();
Bimg_tag.onload=uploadbackground;
Bimg_tag.src=Bimg;

Rimg_tag=new Image();
Rimg_tag.onload=uploadRover;
Rimg_tag.src=Rimg;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(Bimg_tag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(Rimg_tag,Rx,Ry,R_width,R_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
if(Ry>=0)
{
Ry=Ry-10;
uploadbackground();
uploadRover();
}

function down(){
    if(Ry<=500)
    {
    Ry=Ry+10;
    uploadbackground();
    uploadRover();
    }
    }

    function left(){
        if(Rx>=0)
        {
        Rx=Rx-10;
        uploadbackground();
        uploadRover();
        }
        }

        function right(){
            if(Rx<=700)
            {
            Rx=Rx+10;
            uploadbackground();
            uploadRover();
            }
            }
