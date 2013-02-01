javascript:(
  function(){
    // check to see if the 'WorkMode' button has been added
    if(!$('#settings-dropdown > .work').length) 
    
      // it hasn't been added, so lets 'prepend' (add it to the beginning) it to the menu
      $('#settings-dropdown').prepend(
        
        // create the new menu item
        $(document.createElement('li'))
        
          // the option class will style it to look like all the other bottons
          .addClass('option work')
          
          // make the text say 'WorkMode' so we know what button it is.
          .text('WorkMode')
          
          // This is the handler (what to do if we click the 'WorkMode' button)
          .live('click', function(){
            // This is the code that hides/shows the game-looking stuff
            $('#stage-background,#dj-booth,#dj-table,#audience,'+
            '#awesome-meter,#songboard,#header>.logo,#header>.info').toggle()

          // I call click here, so that the first time you click the bookmark
          // it will hide everything.
          }).click());
    else 
      // If the 'WorkMode' button is already added, don't add it again, 
      // instead just 'Click' the button to hide/show everything 
      $('#settings-dropdown > .work').click()
  }
)();
