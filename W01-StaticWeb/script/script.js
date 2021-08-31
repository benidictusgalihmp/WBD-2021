// mengambil data dari books.js
var books = data.books;

// mencari elemen id (container) dari HTML yang akan diisi dengan temp
var temp = document.getElementById('container');

// melakukan loop yang berisi array dari books
books.forEach(book => {
    // melakukan wrap setiap elemen dalam array
    let gambar = '<img src="'+book.primer["url-foto"]+'" alt=""></img>';
    let harga =  '<p>Rp '+book.primer.harga+'</p>';
    let judul =  '<p class="home-judul">'+book.judul+'</p>';
    let wrapper =  '<div class="wrapper" id="'+book.primer["url-foto"]+'" onclick="display(this.id)">'+gambar+judul+harga+'</div>';
    // menambahkan elemen wrap ke dalam HTML atau temp
    temp.innerHTML+=wrapper;
});

// fungsi untuk mengembalikan page book.html dan mempassing storage url image
function display(url){
    localStorage.setItem("url", url);
    window.location.href="book.html";
};


