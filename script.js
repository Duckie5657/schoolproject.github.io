        //More btn
        const button = document.getElementById("navbar-button")
        const textelms = document.querySelectorAll(".hidden-contents")
        const isHidden = localStorage.getItem("contentsHidden") == "true";
        //Btn element
        const btn = document.getElementById("btn")
        const textelms2 = document.querySelectorAll(".hidden-contents2")
        const isHidden2 = localStorage.getItem("contentsHidden2") == "false";
        //Slides
        const leftarrow = document.getElementById("left-arrow")
        const rightarrow = document.getElementById("right-arrow")
        const images = document.querySelectorAll(".hidden-photos")
        let viewedimage = 0;
        //Dark Mode Btn
        const drkmdbtn = document.getElementById("drkmdbtn")
        let drkmdenabled = localStorage.getItem("darkmode") == "true";
        
        //DarkMode
        function updateTheme() {
          document.body.classList.toggle("drkmdactive", drkmdenabled)
          document.body.classList.toggle("drkmdfalse", !drkmdenabled)

          if(drkmdbtn) {
            drkmdbtn.checked = drkmdenabled;
          }
        }

         updateTheme();

        if(drkmdbtn) {
          drkmdbtn.addEventListener("click", function() {
            drkmdenabled = drkmdbtn.checked;

            localStorage.setItem("darkmode", String(drkmdenabled));

            updateTheme();
          })
        }
        //Slides
        images.forEach(function(image, index) {
          image.dataset.number = index  + 1;
          if (index == 0) {
            image.classList.add("active")
          } else {
            image.classList.remove("active")
          }
        });
        if(leftarrow) {
        leftarrow.addEventListener("click", function() {
          images[viewedimage].classList.remove("active")
          viewedimage --;
          if(viewedimage < 0) {
            viewedimage = images.length - 1;
          }
          images[viewedimage].classList.add("active")
        })
      }
      if(rightarrow) {
        rightarrow.addEventListener("click", function() {
          images[viewedimage].classList.remove("active")
          viewedimage ++;
          if(viewedimage >= images.length) {
            viewedimage = 0;
          }
          images[viewedimage].classList.add("active")
        })
      }

        //More
        if(button) {
          textelms.forEach(textelm => {
            textelm.classList.add("hidden")
          })}
        if(button) {
        button.addEventListener("click", function() {
            textelms.forEach(textelm => {
            textelm.classList.toggle("hidden");
          })

          localStorage.setItem("contentsHidden" ,
            textelms[0].classList.contains("hidden")
          )
        })
        }
        //btn for inside the page
        if(isHidden2) {
          textelms2.forEach(textelm => {
            textelm.classList.add("hidden2")
          })}
        if(btn) {
        btn.addEventListener("click", function() {
            textelms2.forEach(textelm => {
            textelm.classList.toggle("hidden2");
          })

          localStorage.setItem("contentsHidden2" ,
            textelms[0].classList.contains("hidden2")
          )
        })
        }