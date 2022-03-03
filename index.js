const click = document.querySelector(".hamburger");
const newPage = document.querySelector(".popUp");
const body = document.querySelector("body");
const cancel = document.querySelector("#cancel-icon");
const items = document.querySelectorAll(".item")

items.forEach(item => item.addEventListener("click", () => {newPage.classList.toggle('window')
body.style.overflow = 'scroll'
}))

click.addEventListener("click", () => {
    newPage.classList.toggle('window');
    body.style.overflow = 'hidden';
})

cancel.addEventListener("click", () => {
    newPage.classList.toggle('window');
    body.style.overflow = 'scroll';
})

const data = [

         {
             title: "Tonic",
             name: "Canopy",
             position: "Back End Dev",
             year: 2020,
             description: `javaScript Program to Extract Given Property Values from Objects as Array accusamus error perspiciatis est 
             nesciunt. Repellendus ullam deleniti dolorem aliquam dicta.
             orem ipsum dolor sit amet consectetur, adipisicing elit. Non, nemo molestias officiis laborum 
             nisi, nulla magni aspernatur itaque natus dolorem suscipit accusamus error perspiciatis est 
             nesciunt. Repellendus ullam deleniti dolorem aliquam dicta.1`
    
         },
    
         {
             title: "Multi-Post Stories",
             name: "FACEBOOK",
             position: "Full Stack Dev",
             year: 2021,
             description: `javaScript Program to Extract Given Property Values from Objects as Array accusamus error perspiciatis est 
             nesciunt. Repellendus ullam deleniti dolorem aliquam dicta.
             orem ipsum dolor sit amet consectetur, adipisicing elit. Non, nemo molestias officiis laborum 
             nisi, nulla magni aspernatur itaque natus dolorem suscipit accusamus error perspiciatis est 
             nesciunt. Repellendus ullam deleniti dolorem aliquam dicta.2`
         },
    
         {
             title: "Facebook 360",
             name: "FACEBOOK",
             position: "Full Stack Dev",
             year: 2018,
             description: `javaScript Program to Extract Given Property Values from Objects as Array accusamus error perspiciatis est 
             nesciunt. Repellendus ullam deleniti dolorem aliquam dicta.
             orem ipsum dolor sit amet consectetur, adipisicing elit. Non, nemo molestias officiis laborum 
             nisi, nulla magni aspernatur itaque natus dolorem suscipit accusamus error perspiciatis est 
             nesciunt. Repellendus ullam deleniti dolorem aliquam dicta.3`
    
         },
    
         {
             title: "Uber Navigation",
             name: "Uber",
             position: "Lead Developer",
             year: 2022,
             description: `javaScript Program to Extract Given Property Values from Objects as Array accusamus error perspiciatis est 
             nesciunt. Repellendus ullam deleniti dolorem aliquam dicta.
             orem ipsum dolor sit amet consectetur, adipisicing elit. Non, nemo molestias officiis laborum 
             nisi, nulla magni aspernatur itaque natus dolorem suscipit accusamus error perspiciatis est 
             nesciunt. Repellendus ullam deleniti dolorem aliquam dicta.4`
         },
        
     ]
    
     const topic = document.getElementById("topic");
     const names = document.getElementById("names");
     const position = document.getElementById("position");
     const year = document.getElementById("year");
     const image = document.getElementById("newImg");
     const description = document.getElementById("popup-text");
    
     const firstproject = document.getElementById("firstproject");
     const secondproject = document.getElementById("secondproject");
     const thirdproject = document.getElementById("thirdproject");
     const fourthproject = document.getElementById("fourthproject"); 
     const control = document.getElementById("controller");
     const exit = document.getElementById("exit-btn");

     const popup = document.querySelector(".project-details-overlay-outer");

    
     firstproject.addEventListener("click", () => {
           control.classList.toggle("project-details-overlay-outer");
           popup.style.display = "block";
           topic.innerHTML = data[0]["title"];
           description.innerHTML = data[0]["description"];
           image.src = "media/SnapshootPortfolio1.png"
    
     })
    
     secondproject.addEventListener("click", () => {
        control.classList.toggle("project-details-overlay-outer"); 
        popup.style.display = "block";
        topic.innerHTML = data[1]["title"];
        names.innerHTML = data[1]["name"]
        position.innerHTML = data[1]["position"]
        year.innerHTML = data[1]["year"]
        description.innerHTML = data[1]["description"];
        image.src = "media/SnapshootPortfolio2.png"
 
  })
    
    thirdproject.addEventListener("click", () => {
        control.classList.toggle("project-details-overlay-outer");
        popup.style.display = "block";
        topic.innerHTML = data[2]["title"];
        names.innerHTML = data[2]["name"]
        position.innerHTML = data[2]["position"]
        year.innerHTML = data[2]["year"]
        description.innerHTML = data[2]["description"];
        image.src = "media/picture3.png"

    })

    fourthproject.addEventListener("click", () => {
        control.classList.toggle("project-details-overlay-outer");
        popup.style.display = "block";
        topic.innerHTML = data[3]["title"];
        names.innerHTML = data[3]["name"]
        position.innerHTML = data[3]["position"]
        year.innerHTML = data[3]["year"]
        description.innerHTML = data[3]["description"];
        image.src = "media/SnapshootPortfolio4.png"

    })

    exit.addEventListener("click", () => {
        control.classList.toggle("project-details-overlay-outer");
        popup.style.display = "none";

  })
 