javascript:(
  function(){
    // check to see if the 'WorkMode' button has been added.
    if(!$('#settings-dropdown>.work').length) 
    
      // it hasn't been added, so lets 'prepend' (add it to the beginning) it to the menu.
      $('#settings-dropdown').prepend(
        
        // create the new menu item
        $(document.createElement('li'))
        
          // the option class will style it to look like all the other bottons.
          .addClass('option work')
          
          // make the text say 'WorkMode' so we know what button it is.
          .text('WorkMode')
          
          // This is the handler (what to do if we click the 'WorkMode' button)
          .live('click',function(){
            
            // This is the code that hides/shows the game-looking stuff.
            $('#stage-background,#dj-booth,#dj-table,#audience,'+
            '#awesome-meter,#board,#header>.logo,#header>.info').toggle();
            
            // Remove gifs permanently... it's ok.
            $('.screen').remove();

            // The rate buttongs are moved around to make things look prettier.
            var v=$('#board').is(':visible');
            $('#lame-button').css({left:v?9:20,top:v?6:0});
            $('#awesome-button').css({right:v?9:20,top:v?6:0});
            $('#songboard,#header').css({background:v?'':'none'})
            $('#songboard').css({top:v?6:0})

          // I call click here, so that the first time you click the bookmark
          // it will hide everything.
          }).click());
    else 
      // If the 'WorkMode' button is already added, don't add it again, 
      // instead just 'Click' the button to hide/show everything.
      $('#settings-dropdown>.work').click()
  }
)();
