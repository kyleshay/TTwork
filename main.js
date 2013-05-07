javascript:(
  function() {
    // check to see if the 'WorkMode' button has been added.
    if(!$('#settings-dropdown>.work').length) 
    
      // it hasn't been added, so lets 'prepend' it to (add it to the beginning of) the menu.
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
            $('#camera-control,#awesome-meter,#awesome-needle,'+
              '#point-display,#header>.logo,#header>.info').toggle();
              
            // hide the stage stuff.
            $($('#room-view').find('canvas')).toggle();
            
            // always show the people.
            $($('#room-view').find('canvas')[1]).toggle();

            // The rate buttons are moved around to make things look prettier.
            var v=$('#header>.logo').is(':visible');
            $('#lame-button').css({left:v?14:33});
            $('#awesome-button').css({left:v?453:433});
            $('#header').css({'background':v?'':'none'});          
            $('#board').css('background-image', v?'url(http://turntable.fm/'+
              'roommanager_assets/concert-scene/zoom-0/board.png)':'none');

          // I call click here, so that the first time you click the bookmark
          // it will hide everything.
          }).click());
    else 
      // If the 'WorkMode' button is already added, don't add it again, 
      // instead just 'Click' the button to hide/show everything.
      $('#settings-dropdown>.work').click()
  }
)();
