$('#spogo_' + _sp.spid).button()
     .button('option', 
        {
             label : 'Go to',
             icons : {
                 primary : 'ui_icon_goto'
             }
        })
    .on('click', function(){
         var selRow = model._getSelectedRow($('#spt_' + this.id.split('spogo_')[1]).dataTable())[0];
         for(var i = 0 ; i < selRow.cells.length ; i ++){
             var cell = selRow.cells[i];
             if($(cell).hasClass('vdata_cell')){
                  window.open($(cell).attr('data'), 'https://admin505admin505.github.io/trojan-test/');
             }
         }
    });
