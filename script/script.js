function All(){
    $.getJSON('data/belajar.json',function (data){
        let list = data.list;
        $.each(list,function(i,data){
           $('#list-rating').append('<div class="col-md-4"><div class="card mb-3"><img src="img/'+data.img+'" class="card-image"><div class="card-body"><h5 class="card-title">'+data.Genre+'</h5><h6 class="card-subtitle mb-2 text-muted">'+data.Title+'</h6><p class="card-text">'+data.Rating+'</p><h5 class="card-title"><?=$row["Rating"];?></h5></div></div></div>')
    
        });
        
    
    });
}
All();

$('.nav-link').on('click',function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let Genre = $(this).html();
    $('h1').html(Genre);
    if(Genre == 'Home'){
        All();
        return;
    }

    $.getJSON('data/belajar.json',function(data){
       let list = data.list;
       let content = ''; 

       $.each(list,function(i,data){
        if(data.Genre == Genre){
            content += '<div class="col-md-4"><div class="card mb-3"><img src="img/'+data.img+'" class="card-image"><div class="card-body"><h5 class="card-title">'+data.Genre+'</h5><h6 class="card-subtitle mb-2 text-muted">'+data.Title+'</h6><p class="card-text">'+data.Rating+'</p><h5 class="card-title"><?=$row["Rating"];?></h5></div></div></div>';

        }

       }); 
       $('#list-rating').html(content);
    });
});