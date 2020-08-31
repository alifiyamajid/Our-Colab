// event pada saat link di klik

$('.page-scroll').on('click', function(e){

    console.log('ok')
    // ambil isi tujuan

    var tujuan = $(this).attr('href');
    
    //tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // Pindahkan Scroll

    $('body').animate({
      scrollTop: elemenTujuan.offset().top - 70
    }, 2000,'easeOutBounce');

    e.preventDefault()
});