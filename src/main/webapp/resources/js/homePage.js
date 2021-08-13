/* EVENT LISTENERS */

document.addEventListener('DOMContentLoaded', function() {
    if(colCheck()){
        resizeNotes();
    }
}, false);

var resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(x => {
        if(colCheck()){
            resizeNotes();
        }
    }, 50);
});

/* check if number of columns should change */

function colCheck() {
    var notesBlock = document.getElementById('notes');
    var oldColCount = notesBlock.children.length;
    var colWidth = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--note-column-width'));
    var colCount = Math.max(1, parseInt(notesBlock.offsetWidth / colWidth));
    if(colCount == oldColCount) {
        return false;
    }
    return true;
}

/* function responsible for relocating the notes */

function resizeNotes() {
    var notesBlock = document.getElementById('notes');
    var articles = prepareArticles(document.querySelectorAll("#notes article"));
    
    var colWidth = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--note-column-width'));
    var colCount = Math.max(1, parseInt(notesBlock.offsetWidth / colWidth));

    while(notesBlock.firstChild){
        notesBlock.lastChild.remove();
    }

    var cols = [];

    for (i=0; i<colCount; i++){
        let column = document.createElement('div');
        column.setAttribute("class","column");
        column.style.verticalAlign = 'top';
        document.getElementById("notes").appendChild(column);
        cols[i] = column;
    }

    for (article of articles) {
        let colHeihts = getColHeights(cols);
        let m = arrayMinIndex(colHeihts)
        cols[m].appendChild(article);
    }

    appendAddNote();
}

/* functions helping with notes */

function prepareArticles(articleArray) {
    var orderedArray = [];
    var unorderedElements = [];
    
    addRemoveIcon(articleArray);
    addEditCapatibility(articleArray);

    for(node of articleArray){
        var i = node.getAttribute('order-number');
        if(!i || orderedArray[i]){
            unorderedElements.push(node);
        } else {
            orderedArray[i] = node;
        }
    }
    orderedArray = orderedArray.filter(Boolean);
    for(node of unorderedElements){
        orderedArray.push(node);
        node.setAttribute('order-number', orderedArray.length-1);
    }
    return orderedArray;

    function addRemoveIcon(array) {
        var articlesWithoutIcon = [...array].filter(node => node.querySelector('img[src="img/icoNotes/remove.png"]') == null);
        for(node of articlesWithoutIcon){
            var image = document.createElement('img');
            image.setAttribute('src', 'img/icoNotes/remove.png');
            image.setAttribute('class', 'removeIcon');
            image.setAttribute('onclick', 'removeArticle(this.parentNode)');
            node.appendChild(image);
        }
    }

    function addEditCapatibility(array){
        var articlesWithoutEdit = [...array].filter(node => node.querySelector('form.editField') == null);

        for (node of articlesWithoutEdit){
            for (child of node.children){
                if(child.tagName == 'H3') {
                    child.setAttribute('onclick', 'editArticle(this.parentNode, 0)');
                } else if (child.tagName == 'P') {
                    child.setAttribute('onclick', 'editArticle(this.parentNode, 1)');
                }
            }

            /* edit text fields */
            var editor = document.createElement('form');
            editor.setAttribute('class', 'editField');

                var titleField = document.createElement('textarea');
                titleField.setAttribute('type', 'text');
                titleField.setAttribute('onblur', 'finishEdit(this.parentNode.parentNode)');
                titleField.setAttribute('placeholder', 'Title');
                editor.append(titleField);

                var textField = document.createElement('textarea');
                textField.setAttribute('type', 'text');
                textField.setAttribute('onblur', 'finishEdit(this.parentNode.parentNode)');
                textField.setAttribute('placeholder', 'Note');
                editor.append(textField);
        
            node.appendChild(editor);
                editor.classList.add('hidden');
        }
    }
}

function arrayMinIndex(array) {
    var minIndex = 0;
    var minVal = array[0];
    for (i=1; i<array.length; i++){
        if (array[i]<minVal){
            minVal = array[i];
            minIndex = i;
        }
    }
    return minIndex;
}

function getColHeights(array) {
    var colHeights = [];
    array.forEach(col => {
        colHeights.push(col.offsetHeight);
    });
    return colHeights;
}

/* add option to add a note - also part of note sorting */
function appendAddNote() {
    var addNote = document.createElement('div');
    addNote.setAttribute('class', 'addNote');
    addNote.setAttribute('onclick', 'newNote()');
        var h3 = document.createElement('h3');
        addNote.appendChild(h3);
            var title = document.createTextNode('Add Note...');
            h3.appendChild(title);
        var p = document.createElement('p');
        addNote.appendChild(p);
            var text = document.createTextNode('Leave your message here!');
            p.appendChild(text);
        var image = document.createElement('img');
        image.setAttribute('src', 'img/icoNotes/add.png');
        image.setAttribute('class', 'addIcon');
        addNote.appendChild(image);

    var cols = document.querySelectorAll("#notes .column");
    var colHeights = getColHeights(cols);
    var m = arrayMinIndex(colHeights)
    cols[m].appendChild(addNote);
}

/* remove option to add a note */
function removeAddNote() {
    var addNote = document.getElementsByClassName('addNote');
    for (node of addNote) {
        node.remove();
    }
}

/* append any article */
function addEmptyArticle() {
    var article = document.createElement('article');
        var h3 = document.createElement('h3');
        article.appendChild(h3);
            var headerText = document.createTextNode('Title');
            h3.appendChild(headerText);
        var p = document.createElement('p');
        article.appendChild(p);
            var text = document.createTextNode('Some text to enable scrolling.. Lorem ipsum dolor sit amet...');
            p.appendChild(text);

    var cols = document.querySelectorAll('#notes>.column');
    var colHeights = getColHeights(cols);
    let m = arrayMinIndex(colHeights)
    cols[m].appendChild(article);
}

/* remove any article */
function removeArticle(note) {
    note.remove();
    resizeNotes();
}

/* add a new note */

function newNote() {
    removeAddNote();
    addEmptyArticle();
    resizeNotes();
}

/* article editor */
function editArticle(article, focusIndex) {
    var titleData, textData;
    // open editor, read article text
    for(child of article.children) {
        if(child.tagName == 'H3'){
            child.classList.add('hidden');
            titleData = child.textContent;
        } else if (child.tagName == 'P') {
            child.classList.add('hidden');
            textData = child.textContent;
        }
    }
    // copy data to editor
    for(child of article.children) {
        if (child.tagName == 'FORM' && child.classList.contains('editField')) {
            child.classList.remove('hidden');
            child.children[0].value = titleData;
            child.children[1].value = textData;
        }
    }
}

function finishEdit(article) {

    setTimeout(() => {
        
        for (child of article.children) {
            if (child.tagName == 'FORM' && child.classList.contains('editField')) {
                if (document.activeElement != child.children[0] &&
                    document.activeElement != child.children[1]) {
                        
                    closeEditor(article);
                }
            }
        }

    }, 100);
    
}
function closeEditor(article) {
    var titleData, textData;
    // read input
    for(child of article.children) {
        if (child.tagName == 'FORM' && child.classList.contains('editField')) {
            child.classList.add('hidden');
            titleData = child.children[0].value;
            textData = child.children[1].value;
        }
    }
    // if note is empty - remove
    if (!titleData && !textData){
        removeArticle(article);
        return;
    }
    // close editor and paste text to article
    for(child of article.children) {
        if(child.tagName == 'H3'){
            child.classList.remove('hidden');
            child.childNodes[0].nodeValue = titleData;
        } else if (child.tagName == 'P') {
            child.classList.remove('hidden');
            child.childNodes[0].nodeValue = textData;
        }
    }
}