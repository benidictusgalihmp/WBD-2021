// mengambil data dari books.js
var books = data.books;

// mengambil data passing url
var url = localStorage.getItem("url");

// mencari elemen id (book-detail) dari HTML yang akan diisi dengan temp
var temp = document.getElementById('book-detail');

// melakukan loop yang berisi array dari books
books.forEach(book => {
    // jika url yang dipassing dari localstorage sama dengan book.primer["url-foto"]
    if(book.primer["url-foto"] === url){
        // wrap semua elemen awal
        let home = '<div class="home" onclick="home()"><p>Back to Homepage</p></div>';
        
        let gambar = '<img src="'+book.primer["url-foto"]+'" alt=""></img>';

        let judul =  '<p class="judul">'+book.judul+'</p>';
        let harga =  '<p class="harga">Rp '+book.primer.harga+'</p>';

        let tempo = ''

        // loop untuk mengambil elemen key dan value dari key dictionary 'deskripsi'
        // dan menambahkannya ke dalam string tempo
        for (const [key, value] of Object.entries(book.deskripsi)) {
            tempo += '<p>'+key+':</p>';
            tempo += '<p>'+value+'</p>';
        };

        let detail = '<div class="detail-info">'+judul+harga+tempo+'</div>';
        
        // melakukan wrap seluruh elemen 
        let wrapper =  home+'<div class="book-content">'+gambar+detail+'</div>';

        // menambahkan elemen wrapper ke dalam HTML
        temp.innerHTML+=wrapper;
    }
});

// fungsi untuk mengembalikan page ke index.html
function home(){
    window.location.href="index.html";
};