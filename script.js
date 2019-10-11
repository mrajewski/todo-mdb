$(function () {

    const $btnAdd = $('.add-btn');
    const $btnClear = $('.clear-btn');
    const $btnRemove = $('.remove-btn');
    const $list = $('.list-container');
    let counter = 0;

    $btnAdd.on('click',function (e) {
        e.preventDefault();
        counter += 1;
        const $listEl= $(`<li>Task ${counter}</li>`);
        $list.append($listEl);
    });

    $btnRemove.on('click',function (e) {
        e.preventDefault();
        counter -= 1;
        $list.find('li').last().remove()
    });

    $btnClear.on('click',function (e) {
        e.preventDefault();
        counter = 0;
        $list.empty()
    })

});