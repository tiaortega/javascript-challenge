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
    comment_query = document.getElementById('comment').value;


    filtered_data=[];

    if (date_query!="" || city_query!=""){
        for (let index = 0; index < data.length; index++) {
            const element = data[index];

            if (date_query!="" && city_query=="" && element['datetime']==date_query) {
                filtered_data.push(element);
            }
            if (city_query!="" && date_query=="" && element['city']==city_query) {
                filtered_data.push(element);
            }
            if (date_query!="" && city_query!="" && element['datetime']==date_query && element['city']==city_query) {
                filtered_data.push(element);
            }
        }
    }
    else{
        filtered_data=data;
    }
    


    let new_tbody = document.createElement('tbody');
    let old_tbody = document.getElementById('ufo-table').getElementsByTagName('tbody')[0];
    old_tbody.parentNode.replaceChild(new_tbody, old_tbody);
    put_data(filtered_data);
}



put_data(data);
document.getElementById("filter-btn").addEventListener("click", filter_data);

// var new_tbody = document.createElement('tbody');
// old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
