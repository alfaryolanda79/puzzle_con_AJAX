let btn5 = document.getElementById('btn_5'),
    div1 = document.getElementById('div1');

btn5.onclick = () => {

    const XHR = new XMLHttpRequest();
    XHR.open('GET','pagefoto1.html',true);
    XHR.send();
    XHR.onreadystatechange = function() {

        if(this.readyState == "4" && this.status =="200" ){
            let data = this.responseText;
            div1.innerHTML = data;
        }
    }

}

let btn3 = document.getElementById('btn_3'),
    div2 = document.getElementById('div2');

btn3.onclick = () => {

    const XHR = new XMLHttpRequest();
    XHR.open('GET','pagefoto2.html',true);
    XHR.send();
    XHR.onreadystatechange = function() {

        if(this.readyState == "4" && this.status =="200" ){
            let data = this.responseText;
            div2.innerHTML = data;
        }
    }

}

let btn4 = document.getElementById('btn_4'),
    div3 = document.getElementById('div3');

btn4.onclick = () => {

    const XHR = new XMLHttpRequest();
    XHR.open('GET','pagefoto3.html',true);
    XHR.send();
    XHR.onreadystatechange = function() {

        if(this.readyState == "4" && this.status =="200" ){
            let data = this.responseText;
            div3.innerHTML = data;
        }
    }

}

let btn1 = document.getElementById('btn_1'),
    div4 = document.getElementById('div4');

btn1.onclick = () => {

    const XHR = new XMLHttpRequest();
    XHR.open('GET','pagefoto4.html',true);
    XHR.send();
    XHR.onreadystatechange = function() {

        if(this.readyState == "4" && this.status =="200" ){
            let data = this.responseText;
            div4.innerHTML = data;
        }
    }

}

let btn6 = document.getElementById('btn_6'),
    div5 = document.getElementById('div5');

btn6.onclick = () => {

    const XHR = new XMLHttpRequest();
    XHR.open('GET','pagefoto5.html',true);
    XHR.send();
    XHR.onreadystatechange = function() {

        if(this.readyState == "4" && this.status =="200" ){
            let data = this.responseText;
            div5.innerHTML = data;
        }
    }

}

let btn2 = document.getElementById('btn_2'),
    div6 = document.getElementById('div6');

btn2.onclick = () => {

    const XHR = new XMLHttpRequest();
    XHR.open('GET','pagefoto6.html',true);
    XHR.send();
    XHR.onreadystatechange = function() {

        if(this.readyState == "4" && this.status =="200" ){
            let data = this.responseText;
            div6.innerHTML = data;
        }
    }

}



