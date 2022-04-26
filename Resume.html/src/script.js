let skills = {
    knowledge: {
        html: 90,
        css: 80,
        js:20,
        photoshop: 30,
        illustrator: 20,
        adobexd: 50
    },
    languages: {
        creative: 70,
        leading: 90,
        teamwork: 40
    }
};

$(function (){
   let languageObjects = $('div[data-language]'); // polu4enije objektov s atributom data-language
   let knowledgeObjects = $('div[data-knowledge]');
   //obrabotka objektov s atributom data-languaged
   $.each(languageObjects,function (){
      $(this).css({
         width:skills.languages[$(this).data('language')]+'%'
      });
   });
   $.each(knowledgeObjects,function (){
      $(this).css({
         width:skills.knowledge[$(this).data('knowledge')]+'%'
      });
   });
});