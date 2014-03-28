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
    @version 0.993
    
*/

exports.main = function() {
        /*
        var page =  require("sdk/page-mod");
        page.PageMod({
            include: "*.mozilla.org",
            contentScript: 'window.alert("Page matches ruleset");'
        });
        */
       var data = require("sdk/self").data;
        var pageMod = require("sdk/page-mod");
        pageMod.PageMod({
          include: "*.extremelot.leonardo.it",
          contentScriptFile:
                        [data.url("super_css.js"),data.url("jquery-1.10.2.js"),data.url("jquery-ui-1.10.4.custom.min.js"), data.url("prova.js")]
        });
        
};

require("sdk/widget").Widget({
    id: "widgetID1",
    label: "Smart a Lot",
    contentURL: "http://www.danielebaschieri.eu/smartalot/lot.ico",
    onClick: function(event) {
        require("sdk/tabs").open("http://www.danielebaschieri.eu/smartalot/php/checkextension.php?ver=0.993&sys=firefox");
        /*var panel = require("sdk/panel").Panel({
          contentURL: require("sdk/self").data.url("dialog.html")
        });
        panel.resize(600,400);
        panel.show();*/
        
    }
});

//SPOSTARE OGGETTI NELLA CASSA
//http://extremelot.leonardo.it/lotnew/borsacasa.asp?og=91017&indirizzo=Sentiero%20Oscuro&civico=3/a&chiave=PASSWORD&indice=0
//sembra un modo per clonarli

//http://extremelot.leonardo.it/lotnew/bsx.asp

//http://extremelot.leonardo.it/proc/collegati.asp collegati in presenti

//http://extremelot.leonardo.it/proc/collegati.asp?pos=clans
//http://extremelot.leonardo.it/proc/collegati.asp?pos=razze
//http://extremelot.leonardo.it/proc/collegati.asp?pos=K 

//"http://extremelot.leonardo.it/proc/casal.asp" ritorna vuoto casa lavori

//<input class="Mybutt" type="Submit" name="1" value="Artigiano"/>
//<input type="hidden" name="or" value="27"/>


//<input type="text" onfocus="conta()" onblur="conta()" onkeyup="conta()" maxlength="900" value="" size="50" name="msg"> <= l'input della chat =)

//../proc/azioni.asp?azione=10010 giardini delle delizie sacchetti <=> POST value CERCA
//../proc/azioni.asp?azione=10290 ORO miniere di Urk <=> POST value SCAVA ORO

//<a href="javascript:carica('http://extremelot.leonardo.it/lotnew/nuoveterre/locanda_rist.asp','http://extremelot.leonardo.it/proc/chat_taverne.asp','1120','Sala grande locanda');"> Le Nuove Terre - Sala Locanda</a> 
//muoversi nella mappa

//http://extremelot.leonardo.it/proc/posta/apriposta.asp?msg=244512403 apre il suddetto messaggio

//http://www.extralot.altervista.org/posta_firefox.htm <= funziona ma non so come!

//http://extremelot.leonardo.it/proc/posta/leggilaposta.asp <= dicono così ma non va =/

//http://www.extralot.altervista.org/mappa1.htm <=tutti i luoghi


//http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js <=jquery

/*b_suggerimento = "Grassetto: [B]testo[/B] (alt+b)";
i_suggerimento = "Corsivo: [I]testo[/I] (alt+i)";
u_suggerimento = "Sottolineato: [U]testo[/U] (alt+u)";
q_suggerimento = "Citazione: [QUOTE]testo[/QUOTE] (alt+q)";
w_suggerimento = "Inserisci URL: [URL]http://url[/URL] (alt+w)";
h_suggerimento = "Traccia una linea orizzontale[HR] (alt+h)";
a_suggerimento = "Chiude tutti tag aperti"; */


/*
<select class="mycombo" name="clan">
<option value="C8700|Abiura Moris">Abiura Moris</option>
<option value="C8500|Alba Rossa">Alba Rossa</option>
<option value="C8000|Antica Congiura">Antica Congiura</option>
<option value="C2800|Antichi Mezzelfi">Antichi Mezzelfi</option>
<option value="C1800|Ardh ò Calien Nars">Ardh ò Calien Nars</option>
<option value="C5700|Artigli della Luna">Artigli della Luna</option>
<option value="C8400|Atrox Eximia">Atrox Eximia</option>
<option value="C6900|Aulelid Grungron">Aulelid Grungron</option>
<option value="C5300|Azure">Azure</option>
<option value="C2200|Casa di Ferro">Casa di Ferro</option>
<option value="C6800|Clan Amdir">Clan Amdir</option>
<option value="c1200|Clan degli Aerlinn">Clan degli Aerlinn</option>
<option value="C6100|Clan della Maschera del Vento">Clan della Maschera del Vento</option>
<option value="c3000|Clan delle Fate di Oneira">Clan delle Fate di Oneira</option>
<option value="C8300|Clan Rea Progenie Maris">Clan Rea Progenie Maris</option>
<option value="C6500|Clan Stirpi di Ethengar">Clan Stirpi di Ethengar</option>
<option value="C0900|Clan Yurath">Clan Yurath</option>
<option value="C5900|Dinastia dei Cuivië">Dinastia dei Cuivië</option>
<option value="C7900|Elysium">Elysium</option>
<option value="C4400|Eversor">Eversor</option>
<option value="C3700|Fate della Sfera di Ameral">Fate della Sfera di Ameral</option>
<option value="C2300|Fate di Avalon">Fate di Avalon</option>
<option value="C2000|Fiamme di Simeht">Fiamme di Simeht</option>
<option value="c0300|Figli di Gondor">Figli di Gondor</option>
<option value="C6200|Fratellanza di Shikha">Fratellanza di Shikha</option>
<option value="c2700|I Cavalieri della Sfera">I Cavalieri della Sfera</option>
<option value="C1000|I Custodi dell`Era">I Custodi dell`Era</option>
<option value="C0000|I Santi">I Santi</option>
<option value="C1700|Il Branco">Il Branco</option>
<option value="C6600|Khalaj">Khalaj</option>
<option value="C5100|Legio Caelestis">Legio Caelestis</option>
<option value="C1500|Magisterum Noctis">Magisterum Noctis</option>
<option value="C3400|Mezzelfi SenzaNome">Mezzelfi SenzaNome</option>
<option value="c0500|Nienna Ciryatan">Nienna Ciryatan</option>
<option value="c0600|Prima Comunità Folletta">Prima Comunità Folletta</option>
<option value="C7100|Qu`Ellar Orbb Sil`In">Qu`Ellar Orbb Sil`In</option>
<option value="C3500|Regno degli Eldalië">Regno degli Eldalië</option>
<option value="C7400|Stirpe degli Armhes">Stirpe degli Armhes</option>
<option value="C8600|Stirpe dei BlunaigLim">Stirpe dei BlunaigLim</option>
<option value="C2500|Stirpe di Salewick">Stirpe di Salewick</option>
<option value="C6700|Suplicium Sanguinis">Suplicium Sanguinis</option>
<option value="C8100|Synodus Sanguinis">Synodus Sanguinis</option>
<option value="C7800|Tribù Wacehi">Tribù Wacehi</option>
</select>

<select class="mycombo" name="razza">
<option value="1|ANGELI">ANGELI</option>
<option value="2|DEMONI">DEMONI</option>
<option value="16|DRAGHI">DRAGHI</option>
<option value="15|DROW">DROW</option>
<option value="3|ELFI">ELFI</option>
<option value="4|FATE">FATE</option>
<option value="5|FOLLETTI">FOLLETTI</option>
<option value="6|GNOMI">GNOMI</option>
<option value="20|GOBLIN">GOBLIN</option>
<option value="7|HOBBIT">HOBBIT</option>
<option value="14|KENDOT">KENDOT</option>
<option value="8|MANNARI">MANNARI</option>
<option value="9|MEZZELFI">MEZZELFI</option>
<option value="10|MOSTRI">MOSTRI</option>
<option value="11|NANI">NANI</option>
<option value="19|ORCHETTI">ORCHETTI</option>
<option value="17|TALLMULD">TALLMULD</option>
<option value="12|UMANI">UMANI</option>
<option value="18|UMANOIDE">UMANOIDE</option>
<option value="13|VAMPIRI">VAMPIRI</option>
</select>

<select class="mycombo" name="gilda">
<option value="Accademia dei Ruoli di LOT|M450">Accademia dei Ruoli di LOT</option>
<option value="Ammiragliato Ducale|M110">Ammiragliato Ducale</option>
<option value="Armata Ducale|C445">Armata Ducale</option>
<option value="Ateneo delle Scienze Naturali|C190">Ateneo delle Scienze Naturali</option>
<option value="Banda dei Ladri|C213">Banda dei Ladri</option>
<option value="Bardi di Lot|C720">Bardi di Lot</option>
<option value="Cavalieri della Dea Themis|M201">Cavalieri della Dea Themis</option>
<option value="Cavalieri dell`Ordine Consacrato a Simeht|C220">Cavalieri dell`Ordine Consacrato a Simeht</option>
<option value="Cavalieri Erranti|C428">Cavalieri Erranti</option>
<option value="Cavalieri Neri|C250">Cavalieri Neri</option>
<option value="Chierici di LOT|C330">Chierici di LOT</option>
<option value="Compagnia dei Musicanti|C487">Compagnia dei Musicanti</option>
<option value="Compagnia dell`Anello del Fato|M120">Compagnia dell`Anello del Fato</option>
<option value="Compagnia Teatrale di LOT|C480">Compagnia Teatrale di LOT</option>
<option value="Concilio delle Corporazioni|M155">Concilio delle Corporazioni</option>
<option value="Confraternita dei Druidi|C203">Confraternita dei Druidi</option>
<option value="Congrega delle Streghe|C301">Congrega delle Streghe</option>
<option value="Convivio degli Appassionati di Belle Arti|C162">Convivio degli Appassionati di Belle Arti</option>
<option value="Corpo dei Dragoni di LOT|M989">Corpo dei Dragoni di LOT</option>
<option value="Corpo dei Volontari di LOT|M500">Corpo dei Volontari di LOT</option>
<option value="Corpo delle Guide Ducali|M100">Corpo delle Guide Ducali</option>
<option value="Corte del Nibbio|M705">Corte del Nibbio</option>
<option value="Corte della Madre Themis|M708">Corte della Madre Themis</option>
<option value="Corte di ERIK|M710">Corte di ERIK</option>
<option value="Corte di Giustizia|M011">Corte di Giustizia</option>
<option value="Cricca del Piccolo Popolo|M403">Cricca del Piccolo Popolo</option>
<option value="Custodi dell`Ade|C470">Custodi dell`Ade</option>
<option value="Detentori dell`Arcana Saggezza|M460">Detentori dell`Arcana Saggezza</option>
<option value="Feudo degli AntiQui|C711">Feudo degli AntiQui</option>
<option value="FURIE|M346">FURIE</option>
<option value="Gran Consiglio dei Saggi|C715">Gran Consiglio dei Saggi</option>
<option value="HONOT Teste di Cuoio|C667">HONOT Teste di Cuoio</option>
<option value="I Picari|C157">I Picari</option>
<option value="I pirati|C348">I pirati</option>
<option value="Masnada dei Mercenari|C440">Masnada dei Mercenari</option>
<option value="Masseria di LOT|C158">Masseria di LOT</option>
<option value="Monaci di Simeht|C725">Monaci di Simeht</option>
<option value="Orda dei Barbari|C335">Orda dei Barbari</option>
<option value="Ordine degli Alchimisti|C204">Ordine degli Alchimisti</option>
<option value="Ordine dei Cerusici|M209">Ordine dei Cerusici</option>
<option value="Ordine dei Maghi del Crepuscolo|C206">Ordine dei Maghi del Crepuscolo</option>
<option value="Ordine dei Maghi della Notte|C207">Ordine dei Maghi della Notte</option>
<option value="Ordine dei Maghi dell`Alba|C205">Ordine dei Maghi dell`Alba</option>
<option value="Ordine dei Mecenati di LOT|M730">Ordine dei Mecenati di LOT</option>
<option value="Ordine dei Samurai|C347">Ordine dei Samurai</option>
<option value="Paladini dell`Antico Codice|C430">Paladini dell`Antico Codice</option>
<option value="Paratico di Governo|M008">Paratico di Governo</option>
<option value="Prescelti della Dea Themis|C215">Prescelti della Dea Themis</option>
<option value="Reggia dei Miserabili|C214">Reggia dei Miserabili</option>
<option value="Reggimento Legio Victrix|C169">Reggimento Legio Victrix</option>
<option value="Sacro Ordine del Leone|C400">Sacro Ordine del Leone</option>
<option value="Scorpioni di Antares|C441">Scorpioni di Antares</option>
<option value="Senato dei Clan|M135">Senato dei Clan</option>
<option value="Sensali di LOT|C159">Sensali di LOT</option>
<option value="Setta dei Necromanti|C212">Setta dei Necromanti</option>
<option value="Signori dei Draghi della Luce|C420">Signori dei Draghi della Luce</option>
<option value="Signori dei Draghi delle Tenebre|C421">Signori dei Draghi delle Tenebre</option>
<option value="Stregoni della Setta Oscura|C340">Stregoni della Setta Oscura</option>
<option value="Tribù degli Sciamani|C217">Tribù degli Sciamani</option>
</select>

*/

