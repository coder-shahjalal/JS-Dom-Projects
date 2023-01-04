    /**
     * Project Requierments:
     * Change the background color by generating rendom rbg color by clicking a button 
     */

    //Steps

    // step 1 -create onload handler 
        window.onload = () => {
            main();
            
            
        }
       
        function main (){
            const root = document.getElementById("root");    // step 3 - collect all necessary referances 
        
            const btn = document.getElementById("change-btn") // step 3 - collect all necessary referances

            const h1=document.getElementById("h-tag")

             
            console.log(root,btn);
            
            btn.addEventListener("click",function(){         // step 4 - handle the click event 
                const bgColor = generatRGBColor();
                console.log(bgColor);
                root.style.backgroundColor = bgColor;
                btn.style.backgroundColor = generatRGBColor();
                h1.style.color = generatRGBColor();
                
                    
                
            });
        }

    // step 2 - random color generator function 

    function generatRGBColor(){

        const red = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)

        return `rgb(${red},${green},${blue})`
    }

    

    