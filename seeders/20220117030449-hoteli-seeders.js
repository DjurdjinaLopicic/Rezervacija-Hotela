'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Hotelis', [
      {//1
        naziv: 'Hotel Slavija',
        opis: "Hotel Slavija je smešten u centru Beograda, u neposrednoj blizini raznovrsnih prodavnica i restorana. Besplatan WiFi je dostupan u zajedničkim prostorijama i svim sobama. Hotel je udaljen samo nekoliko koraka od Hrama Svetog Save, jedne od najvažnijih gradskih znamenitosti. Sve smeštajne jedinice poseduju sopstveno kupatilo sa kadom ili tušem. Sve jedinice sadrže i LCD TV. Parking u garaži dostupan je uz doplatu. Setalište u Knez Mihailovoj ulici udaljeno je 15 minuta hoda. Drevna Kalemegdanska tvrđava i boemska četvrt Skadarlija nalaze se na po 2,5 km. Na 4 km nalazi se jezero Ada Ciganlija, poznato po mestima za noćni provod. Direktno ispred objekta nalazi se stanica organizovanog autobusa koji saobraća do Međunarodnog aerodroma Beograd, udaljenog 16 km. Tramvajska stanica na Trgu Slavija udaljena je 200 metara. Glavna autobuska stanica u Beogradu nalazi se na 1,2 km od hotela Slavija",
        gradId: 1
      },
      {//2
        naziv: 'Garni Hotel Jugoslavija',
        opis: 'Hotel Jugoslavija smešten je na obali Dunava u Beogradu. Gostima su u okviru objekta na raspolaganju besplatan privatni parking, 4 à-la-carte restorana, razne prodavnice i frizerski saloni. Sve sobe su klimatizovane i opremljene besplatnim bežičnim internetom. Svaka smeštajna jedinica sadrži LCD TV sa kablovskim kanalima i mini-bar. U hotelskom restoranu Tex Mex Zapata služe se jela meksičke kuhinje, dok u drugom restoranu u okviru objekta možete probati hamburgere u američkom stilu. Gostima je na raspolaganju i palačinkarnica Sugar and Spice, uređena u stilu sedamdesetih. U ponudi je takođe klub i nargila bar Loža. Raznovrsna lokalna i internacionalna pića dostupna su u hotelskom baru. Recepcija radi non-stop, a hotel ima i bankomat i salu za sastanke. Pored smeštajnog objekta nalazi se kazino./nStanica javnog gradskog prevoza, odakle se autobusom može stići do centra grada udaljenog 3 km, nalazi se u neposrednoj blizini hotela. U gradu možete obići Kalemegdansku tvrđavu, Knez Mihailovu ulicu i boemsku četvrt Skadarliju.',
        gradId: 1
      },
      {//3
        naziv: 'Hotel Rex',
        opis: 'Hotel Rex je smešten na Savskom vencu, u četvrti sa brojnim ambasadama i državnim ustanovama. Nalazi se na samo 1,5 km od pešačke Knez Mihailove ulice u starom jezgru Beograda, Beogradskog sajma i Kongresnog centra Sava. Klimatizovane sobe imaju velike i svetle prozore, kupatila sa pločicama i drvene podove. Nude besplatan bežični internet i flat-screen TV sa kablovskim kanalima. Hotel raspolaže besplatnim parkingom. Hotel Rex je uređen u funkcionalnom poslovnom stilu. U klasičnom restoranu služe se raznovrsna jela tipične balkanske i internacionalne kuhinje. Hotel poseduje aperitiv bar i otvorenu terasu. Glavna autobuska i železnička stanica u Beogradu nalaze se na 700 metara od hotela. Do rekreativnih sadržaja na Adi Ciganliji može se stići za 10 minuta vožnje gradskim prevozom. Aerodrom Beograd je udaljen 14 km.',
        gradId: 1
      },
      {
        naziv: 'Maja',
        opis: 'Sadrzi bazen, teretanu i igraliste za decu',
        gradId: 3
      },
      {
        naziv: 'Cvet',
        opis: 'Mirna lokacija',
        gradId: 2
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Hotelis', null, {});
  }
};
