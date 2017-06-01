window.koapp.jquerydemo = function() {
  $(document).ready(function(){
    // SAMPLE ACCESS TO KOAPP SERVICES
    console.log('App Object', koapp.structureService.get());

    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');

      $('.jquerydemo ul.tabs li').removeClass('current');
      $('.jquerydemo .tab-content').removeClass('current');

      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
  });
}


