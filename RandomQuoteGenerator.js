$(document).ready(function (){
  $('blockquote').hide();
  $('.load').show();
  getQuote();
  
  $('#btn-quote').click(function(){
   $('blockquote').hide();
  $('.load').show();
  getQuote();
  });
});

 function getQuote(){
 
  $.ajax({ 

    url:'http://api.forismatic.com/api/1.0/?',
    dataType:'jsonp',
    data : 'method=getQuote&format=jsonp&lang=en&jsonp=?',
    success: function(response){
	  console.log(response);
      $('.load').hide();
      $('blockquote').show();
      $('#quoteText').html(response.quoteText);
      
      if(response.quoteAuthor !== ''){
        $('#quoteAuthor').html(response.quoteAuthor);
      }
      else{
        $('#quoteAuhtor').html('Unknown')
      }
    }
    
  });
};