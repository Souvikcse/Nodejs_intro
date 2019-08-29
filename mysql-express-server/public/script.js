
$(function() {
    let in_name = $('#name')
    let in_age = $('#age')
    let in_city = $('#city')
    let submit_btn = $('#submit_btn')
    let table_persons = $('#persons')

    function refreshPage(persons){
        table_persons.empty();
        table_persons.append(
            `<thead>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </thead>`
        )

        for (person of persons){
            table_persons.append(
            `<tr>
                <td>${person.name}</td>
                <td>${person.age}</td>
                <td>${person.city}</td>
                </tr>`
            )
        }
    }

    $.get("/api/persons", function (data) {
            refreshPage(data)
        }
    )

    submit_btn.click(function () { 
        console.log('Button was clicked');
        
        
    });
})