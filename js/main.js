let btnS = document.querySelectorAll('.view'); //находим все элементы данного класса
let numS = document.querySelectorAll('.num');
let noteS = document.querySelectorAll('.note');
let placeS = document.querySelectorAll('.place');
let dateS = document.querySelectorAll('.date');


for (let i = 0; i < btnS.length; i++) {
    btnS[i].addEventListener('click', function () {
        console.log("You clicked:", dateS[i].innerHTML, i);
        btnS[i].style.display = "none"; //скрываем кнопку редактирования

        //Поставить вместо нее кнопку Ок и Отмена
        let Ok_Cancel = document.createElement("div");
        //Ok_Cancel.classList.add("right_side");
        let buttonOk = document.createElement("img");  //кнопка ОК 
        buttonOk.src = "images/checkmark-square.png";
        buttonOk.classList.add("buttonOkCancel");
        let buttonCancel = document.createElement("img"); //кнопка Отмена
        buttonCancel.src = "images/cross-square.png";
        buttonCancel.classList.add("buttonOkCancel");
        Ok_Cancel.appendChild(buttonOk);
        Ok_Cancel.appendChild(buttonCancel);
        btnS[i].after(Ok_Cancel);

        numS[i].style.display = "none";
        noteS[i].style.display = "none";
        placeS[i].style.display = "none";
        dateS[i].style.display = "none";

        // создать HTML-элемент textarea
        let td_cell = document.createElement("td");
        let textarea = document.createElement("textarea");
        textarea.classList.add("editArea");
        td_cell.appendChild(textarea);
        textarea.value = numS[i].innerHTML; // «содержимое»

        //вставить текст-область вместо примечания
        let td_cellNote = document.createElement("td");
        let textareaNote = document.createElement("textarea");
        textareaNote.classList.add("editArea");
        td_cellNote.appendChild(textareaNote);
        textareaNote.value = noteS[i].innerHTML; // «содержимое»

        //вставить текст-область вместо места проведения
        let td_cellPlace = document.createElement("td");
        let textareaPlace = document.createElement("textarea");
        textareaPlace.classList.add("editArea");
        td_cellPlace.appendChild(textareaPlace);
        textareaPlace.value = placeS[i].innerHTML; // «содержимое»

        //вставить текст-область вместо даты
        let td_cellDate = document.createElement("td");
        td_cellDate.classList.add("left_side");
        let textareaDate = document.createElement("textarea");
        textareaDate.classList.add("editArea");
        td_cellDate.appendChild(textareaDate);
        textareaDate.value = dateS[i].innerHTML; // «содержимое»


        // вставить HTML-элемент textarea после HTML-элемента div
        numS[i].after(td_cell);
        noteS[i].after(td_cellNote);
        placeS[i].after(td_cellPlace);
        dateS[i].after(td_cellDate);
        
        document.addEventListener('keyup', function(event){
            console.log('Количество', textareaNote.value.length);
            if(textareaNote.value.length > 60){
                textareaNote.style.height = 44 + (textareaNote.value.length * 0.6) + "px";
            }
        });

        buttonOk.addEventListener("click", function OK() {
            noteS[i].innerHTML = textareaNote.value; // обновить содержимое HTML-элемента div
            numS[i].innerHTML = textarea.value; // обновить содержимое HTML-элемента div
            placeS[i].innerHTML = textareaPlace.value;
            dateS[i].innerHTML = textareaDate.value;
            td_cell.remove();               // удалить HTML-элемент textarea
            Ok_Cancel.remove();            //удаляем кнопки ок/отмена
            td_cellPlace.remove();
            td_cellNote.remove();
            td_cellDate.remove();
            btnS[i].style.display = "";         // убрать стиль, скрывавший HTML-элемент div
            numS[i].style.display = "";
            noteS[i].style.display = "";
            placeS[i].style.display = "";
            dateS[i].style.display = "";
        });
        buttonCancel.addEventListener("click", function () {
            td_cell.remove();               // удалить HTML-элемент textarea
            td_cellNote.remove();
            Ok_Cancel.remove();             //удаляем кнопки ок/отмена
            td_cellPlace.remove();
            td_cellDate.remove();
            btnS[i].style.display = "";         // убрать стиль, скрывавший HTML-элемент div
            numS[i].style.display = "";
            noteS[i].style.display = "";
            placeS[i].style.display = "";
            dateS[i].style.display = "";
        });

    });
}

