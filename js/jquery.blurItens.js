$.fn.blurItens = function(o){
  var  defaults = {height:false}
  var confs     = $.extend(defaults,o);

  var $container	= $(this),$articles	= $container.children('article'),timeout;
  $container.addClass('blurItens');

  if(confs.height){
    $articles.css('height',confs.height);
  }
  
  $articles.on('mouseenter',function(){
    var $article	= $(this);
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      if($article.hasClass('active')){
        return false;
      }
      $articles.not($article.removeClass('blur').addClass('active')).removeClass('active').addClass('blur');
    },65);
  });
  $container.on('mouseleave',function(){
    clearTimeout(timeout);
    $articles.removeClass('active blur');
  });
}