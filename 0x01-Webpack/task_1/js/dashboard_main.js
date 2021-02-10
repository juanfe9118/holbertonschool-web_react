import $ from "jquery";
import { debounce } from "lodash";

$('body').append("<p>Hoberton Dashboard</p><p>Dashboard data for the students</p><button>Click here to get started</button><p id='count'></p><p>Copyright - Holberton School</p>");

let count = 0;

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', debounce(updateCounter));