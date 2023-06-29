let btnJS = document.querySelector('.view');
console.log(btnJS.length);
btnJS.addEventListener('click', showElemObjEvent);
        
    function showElemObjEvent(event) {
        alert('hello');
        btnJS.style.display = "none";

        let num = document.querySelector('.num');
        num.style.display = "none";
        // создать HTML-элемент textarea
        let td_cell = document.createElement("td");
        let textarea = document.createElement("textarea");
        textarea.classList.add("editArea");
        td_cell.appendChild(textarea);
        //textarea.classList.add("edit");  // CSS-класс
        textarea.value = num.innerHTML; // «содержимое»
 
        // вставить HTML-элемент textarea после HTML-элемента div
        num.after(td_cell);

        textarea.addEventListener("blur", function () {
            num.innerHTML = textarea.value; // обновить содержимое HTML-элемента div
            td_cell.remove();               // удалить HTML-элемент textarea
            btnJS.style.display = "";         // убрать стиль, скрывавший HTML-элемент div
            num.style.display = "";
        });
    
        // в случае нажатия клавиши Enter делаем то же самое, что и при уходе фокуса
        textarea.addEventListener("keydown", function (event) {
            if (event.code == "Enter") textarea.blur();
        });

    }