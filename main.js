function sortlist() {
    var albums = document.getElementById('albums');
    var albumTexts = new Array();

    for(i = 2; i < albums.length; i++)
    {
        albumTexts[i-2] =
            albums.options[i].text.toUpperCase() + "," +
            albums.options[i].text + "," +
            albums.options[i].value;
    }

    albumTexts.sort();

    for(i = 2; i < albums.length; i++)
    {
        var parts = albumTexts[i-2].split(',');

        albums.options[i].text = parts[1];
        albums.options[i].value = parts[2];
    }
}

sortlist();
