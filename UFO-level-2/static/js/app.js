// from data.js
var tableData = data;

// YOUR CODE HERE!
function put_data(my_data) {
    var tbody = document.getElementById('ufo-table').getElementsByTagName('tbody')[0]

    for (let index = 0; index < my_data.length; index++) {
        const element = my_data[index];

        var row = tbody.insertRow(0);
        for (let index = 0; index < 7 ; index++) {
            var cell = row.insertCell(index);
            cell.innerHTML = element[Object.keys(element)[index]];
        }

    };
}

function filter_data() {
    date_query = document.getElementById('datetime').value;
    city_query = document.getElementById('city').value;
    state_query = document.getElementById('state').value;
    country_query = document.getElementById('country').value;
    shape_query = document.getElementById('shape').value;
    


    filtered_data=[...data];;


    for (let index = 0; index < filtered_data.length; index++) {
        const element = filtered_data[index];

        if (date_query!="" && element['datetime']!=date_query) {
            filtered_data[index]=-1;
        }
        if (city_query!="" && element['city']!=city_query) {
            filtered_data[index]=-1;
        }
        if (state_query!="" && element['state']!=state_query) {
            filtered_data[index]=-1;
        }
        if (country_query!="" && element['country']!=country_query) {
            filtered_data[index]=-1;
        }
        if (shape_query!="" && element['shape']!=shape_query) {
            filtered_data[index]=-1;
        }

    }

    
    output_data=[];

    for (let index = 0; index < filtered_data.length; index++) {
        const element = filtered_data[index];

        if (element!=-1) {
            output_data.push(element);
        }

    };


    let new_tbody = document.createElement('tbody');
    let old_tbody = document.getElementById('ufo-table').getElementsByTagName('tbody')[0];
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
    put_data(output_data);
}



put_data(data);
document.getElementById("filter-btn").addEventListener("click", filter_data);

// var new_tbody = document.createElement('tbody');
// old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
