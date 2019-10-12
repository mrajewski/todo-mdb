$(function () {
    //Declaring elements
    const $btnAdd = $('.add-btn');
    const $btnClear = $('.clear-btn');
    const $btnRemove = $('.remove-btn');
    const $list = $('.list-container');
    let counter = 0;

//Adding button event
    $btnAdd.on('click',function (e) {
        e.preventDefault();
        counter += 1;
        const $listEl= $(`<li>Task ${counter}</li>`);
        const $checkBox= $(`<label class="checkbox-container"><input type="checkbox"><span class="check"></span></label>`);
        $listEl.append($checkBox);
        $list.append($listEl);
    });

//Remove button event
    $btnRemove.on('click',function (e) {
        e.preventDefault();
        counter>=1?counter -= 1:null;
        $list.find('li').last().remove()
    });

//Clear button event
    $btnClear.on('click',function (e) {
        e.preventDefault();
        counter = 0;
        $list.empty()
    })
});