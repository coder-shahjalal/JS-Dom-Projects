    /**
     * Project Requierments:
     * Change the background color by generating rendom rbg color by clicking a button 
     * Also display the hex code to a disabled input field 
     * add a button to copy the color code 
     */

    //Steps

    // step 1 -create onload handler 
        window.onload = () => {
            main();
            
            
        }
       
        function main (){
            const root = document.getElementById("root");    // step 3 - collect all necessary referances 
        
            const btn = document.getElementById("change-btn") // step 3 - collect all necessary referances

            const h1 = document.getElementById("h-tag")

            const output = document.getElementById("output")

             
            console.log(root,btn);
            
            btn.addEventListener("click",function(){         // step 4 - handle the click event 
                const bgColor = generatHexColor();
                console.log(bgColor);
                root.style.backgroundColor = bgColor;
               
                output.value = bgColor
                
                    
                
            });
        }

    // step 2 - random color generator function 

    function generatHexColor(){

        const red = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)

        return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    }

    

    