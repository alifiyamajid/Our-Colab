// event pada saat link di klik

$('.page-scroll').on('click', function(e){
    
    // ambil isi tujuan

    var tujuan = $(this).attr('href');
    
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // Pindahkan Scroll

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 2000,'easeOutBounce');

    e.preventDefault()
});