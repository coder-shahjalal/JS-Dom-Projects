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
            const root = document.getElementById("root");
        
            const btn = document.getElementById("change-btn")
            console.log(root,btn);
            
            btn.addEventListener("click",function(){
                const bgColor = generatRGBColor();
                console.log(bgColor);
                root.style.backgroundColor = bgColor;
            });
        }

    // step 2 - random color generator function 

    function generatRGBColor(){

        const red = Math.floor(Math.random()*256)
        const green = Math.floor(Math.random()*256)
        const blue = Math.floor(Math.random()*256)

        return `rgb(${red},${green},${blue})`
    }

    // step 3 - collect all necessary referances 

    // step 4 - handle the click event 