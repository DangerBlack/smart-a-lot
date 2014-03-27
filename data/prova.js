/**
    This file is part of Smart A Lot.

    Smart A Lot is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Smart A Lot is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Smart A Lot.  If not, see <http://www.gnu.org/licenses/>.
    
    @author DangerBlack
    @version 0.992
*/

    
var levaduplicati = function(OriginaleArr) {
    var newArr = [],
    OriginaleLen = OriginaleArr.length,
    found,
    x, y;
    
    for ( x = 0; x < OriginaleLen; x++ ) {
    found = undefined;
    for ( y = 0; y < newArr.length; y++ ) {
    if ( OriginaleArr[x] === newArr[y] ) {
    found = true;
    break;
    }
    }
    if ( !found) newArr.push( OriginaleArr[x] );
    }
    return newArr;
    }
function aggiungiEtichetteAraldi(){
    if(window.location.href=="http://extremelot.leonardo.it/proc/chat_middle.asp"){
        try{
             $('img', window.parent.testo.document).live("mouseover",function(){
                var temp=$(this).attr("alt");
                $(this).attr("title",temp);
               });
               
              mappaturaDigitale();
        }catch(e){}
    }
}
aggiungiEtichetteAraldi();



/*
 *Memorizza in localWebStorage un json strutturato
 * 
 * luoghi[0].posizione
 * luoghi[0].giocatori[0].nome
*/
function mappaturaDigitale(){
      var acc="";
      var output="";
      var nomi=[];
      var loci=[];
      $('font[color="#606060"] b', window.parent.testo.document).each(function(){
          var N=$(this).parent().prev().prev().prev().text();
          if(N==""){
              N=$(this).parent().parent().text().split(" ")[1];
          }
          var L=$(this).text();
          acc+=N+" "+L+" \n";
          var index=nomi.indexOf(N);
          if(index!=-1){
              //alert(acc+"\nduplicato *"+N+"* pos "+index)
              nomi.splice(index,1);
              loci.splice(index,1);
              //alert(nomi+"\n"+loci);
          }
          nomi.push(N);
          loci.push(L);
          console.log( output );
      });
      var locis=levaduplicati(loci);
      output+='{ "luoghi" : [';
      for(var i=0;i<locis.length;i++){
          output+='{ "posizione" :"'+locis[i]+'", "giocatori" : [';
          for(var j=0;j<loci.length;j++){
           if(loci[j]==locis[i]){
                output+='{ "nome" : "'+nomi[j]+'" },';
           }
          }
          output=output.substring(0,output.length-1);
          output+='] },';
      }
      output=output.substring(0,output.length-1);
      output+='] }';
      //alert(output);
      console.log( output );
      addLC("loci",output);

}
$(document).ready(function(){
    
     //AGGIUNGERE COSE ALLA HOME PAGE (LE VARIE PAGINE NON COMUNICANO TRA DI LORO)
     if(($("html").find("title").text()=="ExtremeLOT - Il Regno Fantasy Virtuale")){
        aggiungiConfig();
        aggiungiPiccionButton();
        aggiungiMapButton();
         $("html").append("<div id=\"lavorare\" style=\"position:fixed;top:50px;left:50px;width:150px;background-color:red;overflow:visible;text-align:center;\">***</div>");
         $("html").append("<div id=\"azioni\" style=\"position:fixed;top:600px;left:30px;width:180px;overflow:visible;\"></div>");
         var dim=$(document).height()-650;
         if(dim<0)
            dim=180;
         $("html").append("<ul id=\"amici\" style=\"position:fixed;top:630px;left:30px;width:180px;background-color:#DEB887;background-image:url('http://www.danielebaschieri.eu/smartalot/sfondo_barra.png');overflow:visible;font-size:80%;max-height:"+dim+"px;overflow:auto;list-style-type:none;\"></ul>");
         var listaAmici=checkLC("amici");
         //alert($("input[name=titolo").attr("value"));
        preparaBoxAmici(listaAmici,"amici");
        amiciFunction();
        aggiungiDialog();
        aggiugniPiccionPrioritarioDialog();
        aggiugniMapDialog();
        cercaAmici(listaAmici);
        casaLavori();
        controlloPosta();//DA RIMUOVERE TODO
        ogni5MinutiMail();
        //generaListaConnessiFilterBy("defunti",""); //chiamata funzionante ma soppressa per callbackvoid
        //viaggioAstrale("http://extremelot.leonardo.it/lotnew/giard_del.asp",function(){alert("pappa");});
        //azioniSuper();
     }
});
function log(){
    alert("fatto");
}
function aggiungiConfig(){
    var config="<img id=\"configbutton\" style=\"position:fixed;top:505px;left:0px;overflow:visible;cursor:pointer;\" src=\"http://www.danielebaschieri.eu/smartalot/logo.png\"/>";
    $("html").append(config);
    $("#configbutton").click(function(){
        $("#configdialog").show();
    });
}

// "<input id=\"friend\" type=\"text\" value=\"\" style=\"width:100%;\" /><br />"+
function aggiungiDialog(){
    var dialog="<div id=\"configdialog\" style=\"position:fixed;top:200px;left:400px;width:400px;height:auto;background-color:#DEB887;overflow:visible;padding:10px 10px 10px 10px;box-shadow: 10px 10px 5px #888888;-moz-box-shadow: 10px 10px 5px #888888;border-style:solid;\">"+
    "<label>E-mail</label><br />"+
    "<input id=\"mail\" type=\"text\" value=\"\" style=\"width:100%;\" /><br />"+
    "<label>Lista Amici</label><br />"+
    "<textarea id=\"friend\" type=\"text\" value=\"\" style=\"width:100%;\" /><br />"+
    "<input id=\"hideifabsent\" type=\"checkbox\" name=\"hideifabsent\" value=\"true\">Nascondi amici assenti dalla lista<br />"+
    "<label>Casa Lavori</label><br />"+
    "<span>Avvisami se più di </span>"+
    "<input id=\"money\" type=\"text\" value=\"\" style=\"width:35px;\" />"+
    "<span> ducati.</span><br />"+
    "<label>Azioni Smart</label><br />"+
    "<select id=\"tipoazione\" style=\"width:200px;\">"+
    "<option val=\"10010\" azio=\"CERCA\"           url=\"http://extremelot.leonardo.it/lotnew/giard_del.asp\">Sacchetti</option>"+
    "<option val=\"10290\" azio=\"SCAVA ORO\"       url=\"http://extremelot.leonardo.it/lotnew/nuoveterre/miniera2.asp\" >Scava Oro</option>"+
    "<option val=\"10300\" azio=\"SCAVA ARGENTO\"   url=\"http://extremelot.leonardo.it/lotnew/nuoveterre/Urkul.asp\" >Scava Argento</option>"+
    "<option val=\"10310\" azio=\"SCAVA RAME\"      url=\"http://extremelot.leonardo.it/lotnew/nuoveterre/Urkul.asp\" >Scava Rame</option>"+
    "<option val=\"10330\" azio=\"SCAVA PIOMBO\"    url=\"http://extremelot.leonardo.it/lotnew/nuoveterre/miniera2.asp\" >Scava Piombo</option>"+
    "<option val=\"10320\" azio=\"SCAVA FERRO\"     url=\"http://extremelot.leonardo.it/lotnew/nuoveterre/miniera2.asp\" >Scava Ferro</option>"+
    "<option val=\"10050\" azio=\"PREGA\"           url=\"http://extremelot.leonardo.it/lotnew/tempio1.asp\" >Prega Themis</option>"+
    "<option val=\"10090\" azio=\"PRENDI\"          url=\"http://extremelot.leonardo.it/lotnew/giard_del.asp\" >Prendi Coniglio</option>"+
    "<option val=\"10060\" azio=\"CACCIA\"          url=\"http://extremelot.leonardo.it/lotnew/montinebbie.asp\" >Caccia</option>"+
    "<option val=\"10020\" azio=\"RACCOGLI\"        url=\"http://extremelot.leonardo.it/lotnew/giard_del.asp\" >Raccogli Fiori</option>"+
    "<option val=\"10440\" azio=\"CERCA LEGNA\"     url=\"http://extremelot.leonardo.it/lotnew/boscolupi.asp\" >Cerca Legna</option>"+
    "<option val=\"10620\" azio=\"CERCA\"           url=\"http://extremelot.leonardo.it/lotnew/boscolupi.asp\" >Raccogli Funghi</option>"+
    "<option val=\"10250\" azio=\"CERCA\"           url=\"http://extremelot.leonardo.it/lotnew/nuoveterre/passo.asp\" >Cerca crisalidi</option>"+
    "<option val=\"10260\" azio=\"RACCOGLI\"        url=\"http://extremelot.leonardo.it/lotnew/nuoveterre/grotta_omb.asp\" >Raccogli Funghi o Spore</option>"+
    "<option val=\"10200\" azio=\"ALLENATI\"        url=\"http://extremelot.leonardo.it/lotnew/gladiatori1.asp\" >Allenamento Duro</option>"+
    "<option val=\"10190\" azio=\"ALLENATI\"        url=\"http://extremelot.leonardo.it/lotnew/gladiatori1.asp\" >Allenamento Medio</option>"+
    "<option val=\"10180\" azio=\"ALLENATI\"        url=\"http://extremelot.leonardo.it/lotnew/gladiatori1.asp\" >Allenamento Leggero</option>"+
    "<option val=\"10210\" azio=\"COGLI\"           url=\"http://extremelot.leonardo.it/lotnew/nuoveterre/roseto.asp\" >Petalo Blu</option>"+
    "<option val=\"10630\" azio=\"CERCA\"           url=\"http://extremelot.leonardo.it/lotnew/cittadella/porto_orchi.asp\" >Cerca Perle e Coralli</option>"+
    "</select>"+
    "<input id=\"quanteazioni\" type=\"number\" value=\"5\" max=\"200\" min=\"1\" style=\"width:35px;margin-left:2px;margin-right:2px;\" />"+
    "<button id=\"faiazioni\">Fai Azioni</button><br /><br />"+
    "<button id=\"close\">close</button>"+ 
    "<button id=\"submitmail\">submit</button>"+
    "</div>";
     $("html").append(dialog);
     //$("#configdialog").css("position","fixed");
     $("#configdialog").css("top","200px");
     $("#configdialog").css("left","400px");
     $("#configdialog label").css("font-weight","bold");
     $("#configdialog label").css("padding-top","3px");
     $("#configdialog").hide();
     //$("#configdialog").width(250);
     //$("#configdialog").height(200);
     
     $("#close").click(function(){
         $("#configdialog").hide();
     });
     $("#submitmail").click(function(){
        addLC("email",$("#mail").val());
        addLC("amici", $("#friend").val());
        addLC("money",$("#money").val());
        addLC("hideifabsent",$("#hideifabsent").is(':checked'));
        $("#configdialog").hide();
        var listaAmici=checkLC("amici");
        preparaBoxAmici(listaAmici,"amici");
    });
    $("#faiazioni").click(function(){
        var nAzioni=$("#quanteazioni").val();
        if((nAzioni==null)||(nAzioni<0))
            nAzioni=1;
        var tipo=$('#tipoazione').find(":selected").attr("val");
        var campo=$('#tipoazione').find(":selected").attr("azio");
        var dove=$('#tipoazione').find(":selected").attr("url");
        viaggioAstrale(dove,function(){
            alert("Inzio le "+nAzioni+" azioni\npremere ok e\nattendere per "+nAzioni/2+" secondi ");
            azioniVelociEsegui(nAzioni,tipo,campo);
            setTimeout(function(){
                alert("Eseguite "+nAzioni+" idtipo "+tipo+" di "+campo);
            },nAzioni*300);
        });
        
    });
    $("#mail").val(checkLC("email"));
    $("#friend").val(checkLC("amici"));
    $("#money").val(checkLC("money"));
    $("#hideifabsent").attr('checked',checkLC("hideifabsent"));
     
}
function amiciFunction(){
    $("#amici").click(function(){
       var width=$("#amici").width();
       if(width==180){
            $("#amici").width(25);
             $("#amici").append("<span id=\"aaa\">A</span>")
            $("#amici li").hide();
            }else{
                $("#aaa").remove();
                $("#amici").width(180);
                $("#amici li").show();
                if(checkLC("hideifabsent")=="true"){
                    var listaAmici=checkLC("amici");
                    preparaBoxAmici(listaAmici,"amici");
                }
            }
    });
}
function checkLC(query){
    if(typeof(Storage)!=="undefined"){
        return localStorage.getItem("b"+query);
    }
    else
        return null;
}
function addLC(query,val){
     if(typeof(Storage)!=="undefined"){
        localStorage.setItem("b"+query,val);
     }
}

function preparaBoxAmici(listaAmici,box){
    $("#"+box).html("");
    if(listaAmici!=null){
         var list =listaAmici.split(",");
         for(var i=0;i<list.length;i++){
            $("#"+box).append("<li id=\""+list[i]+"big\"><span>"+list[i]+"</span> : <span id=\""+list[i]+"\"></span></li>");
         }
    }
}
function svuotaBoxAmici(listaAmici){
    if(listaAmici!=null){
        var list2 =listaAmici.split(",");
        for(var i=0;i<list2.length;i++){
                 $("#"+list2[i]).html("");
                 $("#"+list2[i]+"big").css("font-weight","normal");
                 if(checkLC("hideifabsent")=="true")
                    $("#"+list2[i]+"big").css("display","none");
                 
        }
    }
}
function cercaAmici(listaAmici){
    if(listaAmici!=null){
        svuotaBoxAmici(listaAmici);
        var list =listaAmici.split(",");
        var primaLettera="";
        for(var i=0;i<list.length;i++){
            if(primaLettera.indexOf(list[i].substring(0,1).toUpperCase())==-1){
                primaLettera+=list[i].substring(0,1).toUpperCase();
            }
        }
        list=primaLettera.split("");
        for(var i=0;i<list.length;i++){
            $.get('http://extremelot.leonardo.it/proc/collegati.asp?pos='+list[i], function (data) {
                var elabo=$(data).find("td[align=left]").text(); //
                var list2 =listaAmici.split(",");
                for(var i=0;i<list2.length;i++){
                    if(elabo.contains(list2[i])){
                         $("#"+list2[i]).html("connesso");
                         $("#"+list2[i]+"big").css("font-weight","bold");
                         $("#"+list2[i]+"big").css("display","list-item");
                    }
                }
            });
        }
    }
}
function autoCercaAmici(){
    var listaAmici=checkLC("amici");
    if(listaAmici!=null)
    cercaAmici(listaAmici);
}
String.prototype.contains = function(it) { return this.indexOf(it) != -1; }

function generaListaConnessiFilterBy(filter,job){
    $.get('http://extremelot.leonardo.it/proc/collegati.asp?pos='+filter, function (data) {
                var lista="";
                $(data).find("td[width='28%']/font/b").each(function(){
                   
                   var lung=$(this).text().indexOf("\n");
                   if(lung==-1)
                    lung=$(this).text().indexOf("\r");
                   if(lung==-1)
                    lung=$(this).text().length;
                   lista+=$(this).text().substring(0,lung)+",";
                   //alert("*"+$(this).text().replace(/ /g,"")+"*");
                });
                lista=lista.replace("Nome,","");
                lista=lista.substring(0,lista.length-1);
                job(lista);
                //alert(lista);
            });
}


function casaLavori(){
    var money= checkLC("money");
    if(money==null)
        money=-1;
    if(money===undefined)
        money=-1;
    if(parseFloat(money)!=-1){
        $.get('http://extremelot.leonardo.it/proc/casal.asp', function (data) {
            var temp="";
            var max=0;
            var money= checkLC("money");
            if(money==null)
                money=40;
            $(data).find("tr td:last-child").each(function(index,val){
                if(parseFloat(max)<parseFloat($(this).text())){
                    max=$(this).text();
                    temp=index;
                }
            });
            if(parseFloat(max)>=parseFloat(money)){
                $("#lavorare").html(""+max+" lavora");
            }
            else
                 $("#lavorare").html("");
        });
    }else{
             $("#lavorare").html("");
    }
}
function controlloPosta(){
    $.get('http://extremelot.leonardo.it/proc/posta/leggilaposta.asp', function (data) {
            //alert("Comincio Controllo");
            $(data).find("a").each(function(){
                if( $(this).attr("href").indexOf("swapbusta.asp?")!=-1){
                    //$(this).attr("href")
                    var id_mex=($(this).attr("href").split("=")[1]).split("&")[0];
                    //alert("Query =>"+id_mex);
                    //alert("Mex =>"+checkLC(id_mex));
                    if(checkLC(id_mex)!="true"){
                        scaricaMex(id_mex);
                        addLC(id_mex,"true");
                    }
                }
            });
        
        });
}
function ogni5MinutiMail(){
    setTimeout(function(){
        controlloPosta();
        casaLavori();
        autoCercaAmici();
        ogni5MinutiMail();
        //alert("torno nel loop");
    },60000); //60000
    
}
function scaricaMex(id_mex){
    $.get('http://extremelot.leonardo.it/proc/posta/apriposta.asp?msg='+id_mex, function (data) {
        //alert("ok");
        var mex_parsed=$(data).find("p[align=right]").text()+
                        "\n\n";//+$(data).find("p[align=center]").text();
        
        
        var tes=$(data).find("p[align=left]").html();
        
        var q=tes.replace(/<br>/g,"\n");
        
        mex_parsed+=$(q).text();
        
        
        //alert(mex_parsed);
        
        var url=$(data).find("a[target=result]").attr("href");
        if(url!=null){
            mex_parsed+="\nDesidera porre alla vostra cortese attenzione: \nhttp://extremelot.leonardo.it/proc/posta/"+url;
        }
                    
        var mittente="";
        $(data).find("p[align=center]").find("font").each(function(){
            mittente+=$(this).text()+"\n";
        });
        mex_parsed+="\n\nFirmato: "+mittente;
        mex_parsed=magicEncode(mex_parsed);
        var who=checkLC("email");
        if(who!=null)
            sendMailpost(who,mex_parsed);
    });
}
function sendMail(dst,mex){
    $.get('http://www.danielebaschieri.eu/smartalot/php/crossMail.php?dst='+encodeURI(dst)+'&'+"msg="+encodeURI(mex), function (data) {
            alert(data);
        });
}
function sendMailpost(dst,mex){
    $.ajax({
        type: "POST",
        url: "http://www.danielebaschieri.eu/smartalot/php/crossMailpost.php",
        data: {"dst":dst,"msg":mex},
        success: function(){}
        });
}
function azioniSuper(){
    var nAzioni=100;
    var time=nAzioni*300000;
    setTimeout(function(){
        apriAzioniToolBox(nAzioni,10010,azioniSuper);
    },time);
}
function apriAzioniToolBox(nAzioni,tipo,callback){
    $("#azioni").append("<button id=\"azionibutton\" >Azioni "+nAzioni+"</button>")

    $("#azionibutton").click(function(){
        azioniVelociEsegui(nAzioni,tipo,"CERCA");
        $("#azionibutton").remove();
        callback();
    });
}

function viaggioAstrale(dove,callback){
    if(dove!=null)
    $.get(dove, function (data) {
        callback();
    });
}
function azioniVelociEsegui(nAzioni,tipo,campo){
    var time_space=300;
    for(var i=0;i<nAzioni;i++){
        setTimeout(function(){
            $.post('http://extremelot.leonardo.it/proc/azioni.asp?azione='+tipo,{ value: campo });
        },time_space*i);
    }
}

function magicEncode(testo){
    testo=testo.replace(/à/g,"a\'");
    testo=testo.replace(/è/g,"e\'");
    testo=testo.replace(/é/g,"e\'");
    testo=testo.replace(/ì/g,"i\'");
    testo=testo.replace(/ò/g,"o\'");
    testo=testo.replace(/ù/g,"u\'");
    return testo;
}
function sendPiccione(who,what){
    
    var listWho =who.split(",");
    for(var i=0;i<listWho.length;i++){
        if(listWho[i]!=null){
            if(listWho!="amici"){
                what=what.replace(/\n/g,"\r\n");
                what=what.replace(/\[nome\]/g,""+listWho[i]);
                //what=escape(what);
                what=magicEncode(what);
                $.post('http://extremelot.leonardo.it/proc/posta/_mandaltri.asp',{ nome: listWho[i], Testo: what+"\r\n [I][Inviato tramite piccione prioritario][/I]", contatore: 1, inoltro : "" },'Content-type: text/plain; charset=iso-8859-1');//,"application/x-www-form-urlencoded"
        
            }else{
                var listaAmici=checkLC("amici");
                if(listaAmici!=null){
                 listaAmici=listaAmici.replace(/amici/g,"");
                 sendPiccione(listaAmici,what);
                }
            }
        }
    }
}
function aggiungiPiccionButton(){
    var config="<img id=\"piccionButton\" style=\"position:fixed;top:537px;left:0px;overflow:visible;cursor:pointer;\" src=\"http://www.danielebaschieri.eu/smartalot/penna.png\"/>";
    $("html").append(config);
    $("#piccionButton").click(function(){
        $("#piccionDialog").show();
    });
}
new function($) {
  $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }
}(jQuery);
function aggiugniPiccionPrioritarioDialog(){
    var dialog=''+
    '<div id="piccionDialog" style="position:fixed;top:200px;left:400px;width:500px;height:auto;background-color:#DEB887;overflow:visible;padding:10px 10px 10px 10px;box-shadow: 10px 10px 5px #888888;-moz-box-shadow: 10px 10px 5px #888888;border-style:solid;" >'+
        '<h2 style="text-align:center;">Piccione Prioritario <a href="http://www.extralot.altervista.org/posta_firefox.htm" target="_blank" title="Apri casella di posta"><img src="http://www.danielebaschieri.eu/smartalot/pergamena.gif" /></a></h2>'+
        '<label>Destinatario/i</label><br />'+
        '<input id="piccionDest" type="text" value="" style="width:100%;" />'+
        '<label>Messaggio</label>'+
        '<textarea id="piccionMex" value="" style="width:100%;margin-bottom:5px;" rows="5" ></textarea>'+
        '<button id="underlined" title="sottotitolato" class="tag" value="[U][/U]"><u>u</u></button>'+
        '<button id="italic" title="italic" class="tag" value="[I][/I]"><i>i</i></button>'+
        '<button id="bold" title="grassetto" class="tag" value="[B][/B]"><b>b</b></button>'+
        '<button id="interlinea" title="linea" class="tag" value="[HR]    ">[HR]</button>'+
        '<button id="nomeamico" title="nome destinatario" class="tag" value="[nome]      ">[nome_dest]</button><br /><br />'+
        '<button id="piccionClose">Close</button>'+
        '<button id="piccionSend">Invia</button>'+        
    '</div>';
    $("html").append(dialog);
    $("#piccionDialog").hide();
    $("#piccionClose").click(function(){
        $("#piccionDialog").hide();
    });
     $("#piccionSend").click(function(){
        var who=$("#piccionDest").val();
        var what=$("#piccionMex").val();
        if((who!=null)&&(what!=null)){
            sendPiccione(who,what);
            $("#piccionMex").val("");
            $("#piccionDialog").hide();
        }
        
    });
    $(".tag").click(function(){
        $("#piccionMex").val( $("#piccionMex").val()+$(this).attr("value"));
         $("#piccionMex").setCursorPosition($("#piccionMex").val().length-$(this).attr("value").length/2);
         $("#piccionMex").focus();
    });
}

function aggiungiMapButton(){
    var config="<img id=\"mapButton\" style=\"position:fixed;top:569px;left:0px;overflow:visible;cursor:pointer;\" src=\"http://www.danielebaschieri.eu/smartalot/mappa.png\"/>";
    $("html").append(config);
    function aggiungiGiocatoriMappa(js,index){
        var output="";
        for(var i=0;i<js.luoghi[index].giocatori.length;i++){
            output+='<span><a href="http://extremelot.leonardo.it/proc/schedaPG/scheda.asp?ID='+js.luoghi[index].giocatori[i].nome+'" target="_blank">'+js.luoghi[index].giocatori[i].nome+'</a></span>, '
        }
        return output;
    }
    $("#mapButton").click(function(){
        var tolleranza=3;
        $("#mapDialog").show();
        $("#loci").html("");
        var js_s=checkLC("loci");
        //alert(js_s);//{ "luoghi" : ] }
        try{
            var js=JSON.parse(js_s);
            var temp="";
            var signed=[];
            for(var i=0;i<js.luoghi.length;i++){
                if(signed.indexOf(i)==-1){
                    //alert(js.luoghi[i].posizione);
                    $("#loci").append("<b>"+js.luoghi[i].posizione+": </b>");
                    $("#loci").append(aggiungiGiocatoriMappa(js,i));
                    for(var j=(i+1);j<js.luoghi.length;j++)
                        if((signed.indexOf(j)==-1)&&(fuzzySearch(js.luoghi[i].posizione,js.luoghi[j].posizione).distance<=tolleranza)){
                            $("#loci").append(aggiungiGiocatoriMappa(js,j));
                            signed.push(j);                        
                        }
                    $("#loci").append("<br />");
                }
            }                   
        }catch(e){
            //alert("Errore "+e);
        }
    });

    
}
function aggiugniMapDialog(){
    var dialog=''+
    '<div id="mapDialog" style="position:fixed;top:200px;left:400px;width:500px;height:auto;background-color:#DEB887;overflow:visible;padding:10px 10px 10px 10px;box-shadow: 10px 10px 5px #888888;-moz-box-shadow: 10px 10px 5px #888888;border-style:solid;" >'+
        '<h2 style="text-align:center;">Mappa</h2>'+
        '<div id="loci" style=\"\"></div>'+
        '<br /><br />'+
        '<button id="mapClose">Close</button>'+
        '<button id="mapSend">Invia</button>'+        
    '</div>';

    $(".player").css("float","left");
    $("html").append(dialog);
    $("#mapDialog").hide();
    $("#mapClose").click(function(){
        $("#mapDialog").hide();
    });
     $("#mapSend").click(function(){    
         alert(fuzzySearch("[mappa]","[mapa]").distance);
    });
}

function fuzzySearch(t, p) { // returns minimum edit distance between substring of t and p
  var a = [], // current row
      b = [], // previous row
      pa = [], // from
      pb = [],
      s, i, j;
  for (i = 0; i <= p.length; i++) {
    s = b;
    b = a;
    a = s;
    s = pb;
    pb = pa;
    pa = s;
    for (j = 0; j <= t.length; j++) {
      if (i && j) {
        a[j] = a[j - 1] + 1;
        pa[j] = pa[j - 1];
 
        s = b[j - 1] + (t[j - 1] === p[i - 1] ? 0 : 1);
        if (a[j] > s) {
          a[j] = s;
          pa[j] = pb[j - 1];
        }
 
        if (a[j] > b[j] + 1) {
          a[j] = b[j] + 1;
          pa[j] = pb[j];
        }
      } else {
        a[j] = i;
        pa[j] = j;
      }
    }
  }
 
  s = 0;
  for (j = a.length - 1; j >= 1; j--) {
    if (a[j] < a[s]) {
      s = j;
    }
  }
 
  return {
    distance: a[s],
    substring: t.slice(pa[s], s)
  };
}
