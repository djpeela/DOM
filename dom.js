// console.dir(document);

// console.log(document.domain);

// console.log(document.URL);
// console.log(document.title);
// document.title = 'DOM Practice';

// console.log(document.head);
// console.log(document.body);


// console.log(document.forms[0]);
// console.log(document.links);

// console.log(document.images);

// getelementbyid
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px lightGreen';
// header.style.borderTop = 'solid 3px lightGreen';
// header.style.border = 'solid 3px lightGreen';

// getelementbyclassname //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'lightgray';

// for (i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'lightgray';
// }

// getelementbyname

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'lightgray';

// for (i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'lightgray';
// }


// queryselector

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px lightgreen';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND'

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nthchild(2)');
// secondItem.style.color = 'coral';

// query selector all

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e){
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');

    // add class
    li.className = 'list-group-item';
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create del button element
    var deleteBtn = document.createElement('button');

    // add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // append text
    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);
}

// remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


// filter items
function filterItems(e){
    // convert text to lower case
    var text = e.target.value.toLowerCase();
    // get lis
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}









