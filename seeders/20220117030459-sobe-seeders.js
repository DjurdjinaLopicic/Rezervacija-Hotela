'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Sobes', [
      //Hotel Slavija
      {//1 trokrevetna
        opis: 'Veličina sobe 28 m².\nOva prostrana soba sadrži TV i sopstveno kupatilo sa kadom. Uključuje takođe dodatni toalet.',
        cena: 6000,
        hotelId: 1,
        tipSobeId: 3,
        broj: 20
      },
      {//2 porodicna
        opis: 'Veličina sobe 43 m²\n2 kreveta za 1 osobu i 1 veliki bračni krevet\nOvaj suite nudi TV i sopstveno kupatilo sa tušem. Zidovi sobe su uređeni drvenim oblogama.',
        cena: 6800,
        hotelId: 1,
        tipSobeId: 6,
        broj: 10
      },
      {//3 petokrevetna
        opis: 'Veličina sobe 50 m²\n5 kreveta za 1 osobu\nOva porodična soba nudi TV sa kablovskim kanalima.',
        cena: 7000,
        hotelId: 1,
        tipSobeId: 5,
        broj: 2
      },

      //Garni Hotel Jugoslavija
      {//4 dvokrevetna
        opis: 'Veličina sobe 18 m²\n1 bračni krevet\nOva dvokrevetna soba sa bračnim krevetom nudi sopstven balkon sa pogledom na grad. Pored toga ima LCD TV sa kablovskim kanalima, mini-bar i klima-uređaj. Kupatilo je opremljeno kadom i fenom za kosu.',
        cena: 5700,
        hotelId: 2,
        tipSobeId: 2,
        broj: 20
      },
      {//5 suite
        opis: "Veličina sobe 40 m²\n1 bračni krevet  i 1 kauč na razvlačenje \nOvaj apartman tipa suite gleda na Dunav i nudi flat-screen TV sa kablovskim kanalima u svakoj sobi. Sadrži dnevni boravak sa sofom, mini-bar i sopstveno kupatilo sa kadom",
        cena: 9000,
        hotelId: 2,
        tipSobeId: 7,
        broj: 4
      },
      {//6 trokrevetna
        opis: "Veličina sobe 40 m²\n3 kreveta za 1 osobu \nOva trokrevetna soba nudi mali francuski balkon sa pogledom na Dunav, LCD TV sa kablovskim kanalima, mini-bar i klima-uređaj. Kupatilo je opremljeno kadom i fenom za kosu.",
        cena: 8500,
        hotelId: 2,
        tipSobeId: 3,
        broj: 10
      },
      {//7 Porodicna
        opis:"Veličina sobe 40 m²\n2 kreveta za 1 osobu  i 1 veliki bračni krevet \nOva porodična soba nudi sopstven balkon sa pogledom na Dunav, LCD TV sa kablovskim kanalima, mini-bar i klima-uređaj. Kupatilo je opremljeno kadom i fenom za kosu, a na raspolaganju je i dodatni toalet.",
        cena: 11000,
        hotelId: 2,
        tipSobeId: 6,
        broj: 5
      },

      //Hotel Rex
      {//8 Dvokrevetna
        opis: 'Veličina sobe 22 m²\n2 kreveta za jednu osobu\nSobe sa drvenim podovima i kablovskom televizijom.\n',
        cena: 4800,
        hotelId: 3,
        tipSobeId: 2,
        broj: 8
      },
      {// 9 Trokrevetna
        opis: 'Veličina sobe 22 m²\n3 kreveta za 1 osobu\nOva trokrevetna soba nudi mini-bar i klima-uređaj.',
        cena: 6000,
        hotelId: 3,
        tipSobeId: 3,
        broj: 6
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sobes', null, {});
  }
};
