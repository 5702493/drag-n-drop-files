/*jslint browser*/

(function () {
    'use strict';

    var drop_zone = document.getElementById('drop-zone');
    var file_list = document.getElementById('file-list');

    function add_file_item(file) {
        var file_item = document.createElement('li');
        file_item.className = 'file-item';
        // New items at the top of the list
        file_list.insertAdjacentElement('afterbegin', file_item);

        var file_name = document.createElement('div');
        file_name.className = 'file-name';
        file_name.innerText = file.name;
        file_item.appendChild(file_name);

        var file_size = document.createElement('div');
        // Only kilobytes. Sorry
        file_size.innerText = Math.round(file.size / 1000) + ' КБ';
        file_item.appendChild(file_size);
    }

    drop_zone.ondrop = function (event) {
        event.preventDefault();

        var files = event.dataTransfer.files;

        var file;
        var i = 0;
        while (i < files.length) {
            file = files[i];
            add_file_item(file);
            i += 1;
        }
    };

    // Prevent the browser's default drag behavior
    drop_zone.ondragover = function (event) {
        event.preventDefault();
    };
}());
