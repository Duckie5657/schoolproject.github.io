        const button = document.getElementById("navbar-button")
        const textelms = document.querySelectorAll(".hidden-contents")
        const isHidden = localStorage.getItem("contentsHidden") == "true";

        const leftarrow = document.getElementById("left-arrow")
        const rightarrow = document.getElementById("right-arrow")
        const images = document.querySelectorAll(".hidden-photos")
        let viewedimage = 0;

        images.forEach(function(image, index) {
          image.dataset.number = index  + 1;
          if (index == 0) {
            image.classList.add("active")
          } else {
            image.classList.remove("active")
          }
        });

        leftarrow.addEventListener("click", function() {
          images[viewedimage].classList.remove("active")
          viewedimage --;
          if(viewedimage < 0) {
            viewedimage = images.length - 1;
          }
          images[viewedimage].classList.add("active")
        })
        rightarrow.addEventListener("click", function() {
          images[viewedimage].classList.remove("active")
          viewedimage ++;
          if(viewedimage >= images.length) {
            viewedimage = 0;
          }
          images[viewedimage].classList.add("active")
        })

        console.log(textelms);
        console.log(textelms.length);

        if(isHidden) {
          textelms.forEach(textelm => {
            textelm.classList.add("hidden")
          })}
        button.addEventListener("click", function() {
            textelms.forEach(textelm => {
            textelm.classList.toggle("hidden"); 
          })

          localStorage.setItem("contentsHidden" ,
            textelms[0].classList.contains("hidden")
          )
        })