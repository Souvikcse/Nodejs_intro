$(function(){
    let newtask = $('#newtask');
    let add = $('#addbtn');
    let list = $('#list');

    add.click(function (){                                                            // $.post() sends a post request asynchronously 
        let task = newtask.val();                                                     //   without reloading the page
        $.post('/list', {Type: task},
            function (data) {
                list.empty();
                for(task of data){
                    list.append('<li>' + task.Type + '</li>');
                }
                console.log(data);
                })
    })
})