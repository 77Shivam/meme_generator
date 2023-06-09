const memeGenerator = function(element) {
  
    // actual code of the challenge
    let formatText = function(message) {
      return message.split(" ")
                    .map(function(el) {
                      return el.split('')
                               .map(function(letter, idx) {
                                 return idx % 2 === 0 ? letter.toLowerCase() : letter.toUpperCase();
                               })
                               .join('');
                    })
                    .join(' ')
    }
    
    // generate the elements in the meme generator
    const textarea = document.createElement("textarea");
    const canvas = document.createElement("canvas");
    textarea.style = "font-size: 20px; line-height: 25px; height: 50px;";
    textarea.placeholder = "Write your text here";
    element.appendChild(textarea);
    element.appendChild(canvas);
  
    // set up the canvas
    canvas.width = 502;     // actual image width
    canvas.height = 353;    // actual image height
    const ctx = canvas.getContext("2d");
  
    // load the image in the background
    const background = new Image();
    background.src = "https://i.imgflip.com/1otk96.jpg";
    background.onload = function(){
      ctx.drawImage(background, 0, 0);   
    }
    
    textarea.addEventListener("input", function() {
      const lines = formatText(this.value).split("\n");
      canvas.width = canvas.width;
      ctx.drawImage(background, 0, 0); 
      ctx.textAlign = "center";
      ctx.font = "50px Impact,sans-serif";
      ctx.fillStyle = "white";
      ctx.strokeStyle = "black";
      ctx.lineWidth = "2";
      for (let x = 1; x <= lines.length; x++) {
        ctx.fillText(lines[x-1], 251, 50 * x);
        ctx.strokeText(lines[x-1], 251, 50 * x);
      }
      
    });
  }
  
  const mg = document.querySelector("#container");
  memeGenerator(mg);