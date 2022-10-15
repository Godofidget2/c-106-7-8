var dog = 0;
var cat =0;
var cow = 0;
var lion = 0;



function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5HvO860Wh/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
    console.log("modelReady");
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error)
    }
    else
    {
        console.log(results)
        random_number_r = Math.floor(Math.random()*255)+ 1;
        random_number_g = Math.floor(Math.random()*255)+ 1;
        random_number_b = Math.floor(Math.random()*255)+ 1;

        document.getElementById("count_res").innerHTML = "Detected Dog"+ dog + "Detected Cat"+ cat + "Detected Lion"+ lion +"Detected Cow"+ cow;
        document.getElementById("audio_hear").innerHTML = "Detected Noise"+ results[0].label;
        document.getElementById("count_res").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("audio_hear").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
         
        img = document.getElementById("ear")
        if( results[0].label == "dog bark" )
        {
            img.src = 'images.jpg';
            dog = dog + 1;
        }
        else if(results[0].label == "cat meowing")
        {
            img.src = 'download(1).jpg';
            cat = cat + 1;
        }
        else if(results[0].label == "cow mooing")
        {
            img.src = 'download(2).jpg';
            cow = cow + 1;
        }
        else if(results[0].label == "lion roaring")
        {
            img.src = 'download.jpg';
            lion = lion + 1;
        }
        else
        {
            img.src = 'ear img.png';
        }
    }    
}