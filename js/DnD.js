const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i];

    item.addEventListener('dragstart', function () {
        draggedItem = item;
        setTimeout(function () { 
            item.style.display = 'none';
        }, 0)
    });

    item.addEventListener('dragend', function () {
        setTimeout(function () {
            draggedItem.style.display = 'flex';
            draggedItem = null;
        }, 0);
    })

    for (let x = 0; x < lists.length; x++) {
        const list = lists[x];

        list.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        list.addEventListener('dragenter', function (e) {
            e.preventDefault();
        });
        list.addEventListener('dragleave', function (e) {
        
        });
        list.addEventListener('drop', function(e) {
            this.append(draggedItem);
        });
    }
}