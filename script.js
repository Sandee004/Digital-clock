
        //Creating the elements
        const first_element = document.createElement("div");
        first_element.setAttribute("id", "background")
        document.body.appendChild(first_element);

        const second_element = document.createElement("div")
        second_element.setAttribute("id", "white-border")
        first_element.appendChild(second_element);

        const third_element = document.createElement("div")
        third_element.setAttribute("id", "black")
        second_element.appendChild(third_element);

        const fourth_element = document.createElement("span")
        fourth_element.setAttribute("id", "hours")
        third_element.appendChild(fourth_element);
        
        const fifth_element = document.createElement("span")
        fifth_element.innerHTML = ":"
        fifth_element.setAttribute("id", "colon")
        third_element.appendChild(fifth_element);
        
        const sixth_element = document.createElement("span")
        sixth_element.setAttribute("id", "mins")
        third_element.appendChild(sixth_element)
        
        const seventh_element = document.createElement("span")
        seventh_element.innerHTML = ":"
        seventh_element.setAttribute("id", "colon2")
        third_element.appendChild(seventh_element);
        
        const eighth_element = document.createElement("span")
        eighth_element.setAttribute("id", "seconds")
        third_element.appendChild(eighth_element);
        
        const nineth_element = document.createElement("p")
        nineth_element.setAttribute("id", "date")
        first_element.appendChild(nineth_element)




        //Styling the elements
        document.body.style.cssText = `
        height: 280px;
        background: white;
        `;

        document.getElementById("background").style.cssText = `
        background: lightgrey;
        height:280px;
        border: 10px solid black;
        `;

        document.getElementById("white-border").style.cssText = `
        border: 8px solid white;
        margin: 50px auto 0 auto;
        height: 74px;
        line-height: 100px;
        display: block;
        width: 240px;
        border-radius: 8px;
        text-align: center;
        `;

        document.getElementById("black").style.cssText = `
        border: 3px solid black;
        border-radius: 8px;
        width: 235px;
        height: 68px;
        line-height: 70px;
        background-color: black;
        color: red;
        font-weight: 700;
        `;

        document.getElementById("hours").style.cssText = `
        font-size: 60px;
        font-family: "Bebas Neue", cursive;
        margin-right: 5px;
        margin-bottom: 0;
        vertical-align: middle;
        letter-spacing: 2px;
        `;

        document.getElementById("colon").style.cssText = `
        font-size: 60px;
        font-family: "Bebas Neue", cursive;
        margin-right: 5px;
        margin-bottom: 0;
        vertical-align: middle;
        letter-spacing: 2px;
        `;

        document.getElementById("mins").style.cssText = `
        font-size: 60px;
        font-family: "Bebas Neue", cursive;
        margin-right: 5px;
        margin-bottom: 0;
        vertical-align: middle;
        letter-spacing: 2px;
        `;

        document.getElementById("colon2").style.cssText = `
        font-size: 60px;
        font-family: "Bebas Neue", cursive;
        margin-right: 5px;
        margin-bottom: 0;
        vertical-align: middle;
        letter-spacing: 2px;
        `;

        document.getElementById("seconds").style.cssText = `
        font-size: 60px;
        font-family: "Bebas Neue", cursive;
        margin-right: 5px;
        margin-bottom: 0;
        vertical-align: middle;
        letter-spacing: 2px;
        `;

        document.getElementById("date").style.cssText = `
        font-weight: 600;
        color: red;
        text-align: center;
        `;


        //Making them functional
        setInterval(showTime, 1000);

        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();

            hour = hour < 10 ? "0" + hour: hour;
            min = min < 10 ? "0" + min: min;
            sec = sec < 10 ? "0" + sec: sec;

            document.getElementById("hours")
            .innerHTML = hour;

            document.getElementById("mins").innerHTML = min

            document.getElementById("seconds").innerHTML = sec
        }
        showTime();


        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        var d = new Date();
        one = monthNames[d.getMonth()]
        two = d.getDate()
        three = d.getFullYear()


        let everything = one + " " +two + ", " + three
        document.getElementById("date").innerHTML = everything
