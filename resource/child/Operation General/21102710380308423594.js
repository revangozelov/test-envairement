$('#comp_id_21121114452203122387').click(function () {  
    let data = getGUIDataByStoryCard(this);  
var getUrl = Utility.getParamFromUrl('modul_name');
      var getUrl2 = Utility.getParamFromUrl('typeName');
      var getUrl3 = Utility.getParamFromUrl('taskTypeName');
  console.log('dasdad');
$('#comp_id_21102710494004373155').val(getUrl);
      $('#comp_id_21102710494004373155').attr('sa-data-value',Utility.getParamFromUrl('typeName'));

 callApi('21093011362708568651',{modulName1:getUrl},true, function (res){
   var el =  $('#comp_id_211027104940053310705')
   el.empty();
      var opt = res.tbl[0].r;
      for (let i = 0; i < opt.length; i++) {
          const k = opt[i];
           $(el).append($('<option>')
                             .attr("value",k.id)
                             .text(k.typeName)
                             )
      }
      el.val(getUrl2);
      el.attr('sa-data-value',getUrl2);
  });

  callApi('21121113071303538857',{typeName:getUrl2},true, function (res1){

    setValueOnCompAfterTriggerApi($('#comp_id_21102712292409469308'),res1.kv);
       el.val(getUrl3);
       el.attr('sa-data-value',getUrl3);
  });
  
  callApi('21121117334709267780',{fkTaskTypeId:getUrl3},true, function (res2){

    var el =  $('#comp_id_21102717433506514853')
    el.empty();
    var opt = res2.tbl[0].r;
    for (let i = 0; i < opt.length; i++) {
        const k = opt[i];
         $(el).append($('<option>')
                           .attr("value",k.id)
                           .text(k.kaName)
                           )
    }
    el.selectpicker('refresh');

  });

});