        const button = document.getElementById("navbar-button")
        const textelms = document.querySelectorAll(".hidden-contents")
        const isHidden = localStorage.getItem("contentsHidden") == "true";
        console.log(textelms);
        console.log(textelms.length);

        if(isHidden) {
          textelms.forEach(textelm => {
            textelm.classList.add("hidden")
          })
        }

        button.addEventListener("click", function() {
            textelms.forEach(textelm => {
            textelm.classList.toggle("hidden"); 
          })

          localStorage.setItem("contentsHidden" ,
            textelms[0].classList.contains("hidden")
          )
        })