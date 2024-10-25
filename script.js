let cs =0;
let ps =0
let a= prompt("enter how many points of game you want to play")
let chan  =parseInt(a)


function computer_chance() {
    let computer = Math.random();
    computer = Math.round(computer * 100);
    console.log(computer);
    let cv = computer;
    let ans;

    if (cv <= 33 && cv > 0) {
        ans = 1;
    } else if (cv <= 66 && cv > 33) {
        ans = 2;
    } else if (cv <= 100 && cv > 66) {
        ans = 3;  // Fixed typo from "sejor" to "scissors"
    }

    console.log(ans);
    return ans 
}



let stone = document.getElementsByClassName("stone")[0];
let p = document.getElementsByClassName("paper")[0];
let s = document.getElementsByClassName("s")[0];  // Fixed class reference
let finalans = document.getElementsByClassName("ans")[0];  // Fixed class reference
let img = document.getElementsByClassName("compimg")[0];  // Fixed class reference
let comp_img= document.createElement("img")
// comp_img.src="img/paper.svg"
// img.innerHTML=img.innerHTML +comp_img
img.appendChild(comp_img); // Correct

//for click on stone

function run(){ 
  
 let i=0;
 if(i!=chan){ 
stone.addEventListener('click', (e) => {
    let ans =  computer_chance()
    console.log("Stone clicked");
    if (ans == 1) {
        finalans.innerHTML = `tie score: computer : ${cs}  your:${ps} `
       comp_img.src="img/stone.svg"
       
    }
    if (ans == 2) {
        cs++
        finalans.innerHTML =`loss score: computer : ${cs}  your:${ps} `
        comp_img.src="img/paper.svg"
        
    }
    if (ans == 3) {
        ps++
        finalans.innerHTML = `won score: computer : ${cs}  your:${ps} `
        comp_img.src="img/sijor.svg"
           
    }
    i++;
 
});


//for click on paper
p.addEventListener('click', (e) => {
    let ans =  computer_chance()
    console.log("Paper clicked");
    if (ans == 1) {
        ps++
        finalans.innerHTML =  `won score: computer : ${cs}  your:${ps} `
       comp_img.src="img/stone.svg"
       
    }
    if (ans == 2) {
        finalans.innerHTML =  `tie score: computer : ${cs}  your:${ps} `
        comp_img.src="img/paper.svg"
    }
    if (ans == 3) {
        cs++
        finalans.innerHTML =  `loss score: computer : ${cs}  your:${ps} `
        comp_img.src="img/sijor.svg"
      
    }
    i++;
    
});


//  for click on sejor
s.addEventListener('click', (e) => {
    let ans =  computer_chance()
    console.log("Scissors clicked");
    if (ans == 1) {
        cs++
        finalans.innerHTML = `loss score: computer : ${cs}  your:${ps} `
        comp_img.src="img/stone.svg"
        
    }
    if (ans == 2) {
        ps++
        finalans.innerHTML = `won score: computer : ${cs}  your:${ps} `
        comp_img.src="img/paper.svg"
        
    }
    if (ans == 3) {
        
        finalans.innerHTML = `tie score: computer : ${cs}  your:${ps} `
        comp_img.src="img/sijor.svg"
    }
    i++;
   
});
}
  if(chan==i){
    stone.removeEventListener('click',e)
    p.removeEventListener('click',e)
    s.removeEventListener('click',e)
}


    }




    run( ); 

