'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slikes', [
      /**
       * Hotel Slavija
      **/
      //Hotel
      {
      url: 'https://informer.rs/data/images/2018-01-13/32268_14%20hotel%20slavija_f.jpg',
      hotelId: 1
      },
      {
        url: "https://www.slavijahotel.com/wp-content/uploads/2017/02/recepcija.jpg",
        hotelId: 1
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/238909708.jpg?k=a785d8e8baf68abcbc92f788e44d5226e926e9d9edec79342a097cb8de192d10&o=&hp=1",
        hotelId: 1
      },
      //Sobe
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239091609.jpg?k=e9a88d230d4fc1aaae68c6481cb85e1131658557eff8802687cf31d971faca8d&o=",
        sobaId: 1
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/245815456.jpg?k=1102f67f7d485c531657921181f622b56cbefcbf40c7963e9812ce5bd3486cf9&o=",
        sobaId: 1
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/245815296.jpg?k=3f46d36a7e69b26c2585efdfb1b7ddabc044caefb131006b295b44dc155f0c61&o=",
        sobaId: 1
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/238748831.jpg?k=cefbcbc5b72ffaa1d0a7589b5e4cd63e7f5e0e7f39256c9c051a34b2979b7077&o=",
        sobaId: 2
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239090225.jpg?k=9ce97197d3ff269badd48dcf378b23810cffb8ec4f256cddedbdb1245de5f120&o=",
        sobaId: 2
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/175587337.jpg?k=5d3d9f1c33f9ff5215be1d17d71448ef8001ce7b78be108e2361b651f1717a4f&o=",
        sobaId: 2
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/238920225.jpg?k=953c2de2ae764c5dcd1c4c3610e8be3635df0e08fb248471d7f85cc8b23cd984&o=",
        sobaId: 2
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/238936119.jpg?k=fce1197dcae62f5f7635066289af82a68dbcc66da6f7feb28b706d69ed6f91c4&o=",
        sobaId: 2
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239074574.jpg?k=8767c786bc0f7c1d75a177148ac75a09fc21d028c2388e77d2239944f8203c63&o=",
        sobaId: 3
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/239096766.jpg?k=b32f23f058006c3a09e16743ee9427149183403ea58d3087df8c10009d74b382&o=",
        sobaId: 3
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/245811340.jpg?k=d3de325b21d2b5310fbb0fa5ef22a8f8cceba6b9f21791236d63c5cf50955aff&o=",
        sobaId: 3
      },
      /**
       * Garni Hotel Jugoslavija
       */
      //Hotel
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/264711477.jpg?k=1341c3c8708d570735256e8bd2457ac03f316006d4cde925a12f51ef768551c8&o=&hp=1",
        hotelId: 2
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254132868.jpg?k=d34efc1a61ce9dc41f74645dbc87e6b8308c63959ae36643cd9011d64436b2bc&o=&hp=1",
        hotelId: 2
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254129913.jpg?k=7a5f051c43576c6d72c69981c3e1752e19241462370bf14236c473b53103d8f6&o=&hp=1",
        hotelId: 2
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/247894754.jpg?k=ebde8ecc7f148d82ce855351a43ded02e8a67b0d3f1e9f3894777ef5bcee41a9&o=&hp=1",
        hotelId: 2
      },
      //Sobe
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292459293.jpg?k=4f07dfde70e63ab3b761ee69b73d01071af83ce9949fefd9724683b4adc7b76b&o=",
        sobaId: 4
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292459941.jpg?k=06c7b953785300cbccc9de50bcd21931c70e2c2cdf9903bfe9cc7888572d2065&o=",
        sobaId: 4
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292460074.jpg?k=1d60a1dcc76f7e66c86b59284103655c824d121e14ef4a511a02b6ab50c80edf&o=",
        sobaId: 4
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292457517.jpg?k=ecca33fc1a038805e2249cef18c52f34389421b24a0789dc4b1d172f918a338d&o=",
        sobaId: 5
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292457597.jpg?k=0ba970668cbf795e69a470ba135362aa404cc0bb818b7c632b525fa3fd6180b9&o=",
        sobaId: 5
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292458335.jpg?k=0dbbffa1cce55eaefe30606198cb2d5d9983cc6cb965fe4f23ed157cb4e38161&o=",
        sobaId: 5
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292456213.jpg?k=e40bf9e3ba07b202e854da43e1be06d419c7fb9cbe3d23a4c3e5d5b9e3be70cc&o=",
        sobaId: 5
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292456240.jpg?k=e58916140d87ad6b05dc058bcf48d02fdca3ab29aa7fa78680e6ac90c07d02b9&o=",
        sobaId: 6
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292845253.jpg?k=48e700fabd8d187cf2d16cacee4d9a2faf65287379f069e266a1cb2fa5f2a78d&o=",
        sobaId: 6
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292456426.jpg?k=ef31754d5da1446943ca8e34411c58e4bfab2335b92b271df5a21021294bda4e&o=",
        sobaId: 6 
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292468374.jpg?k=cb589db33552fdfc30edc1f8881ec2570f664f2e6edc4d04dea9277b3b998552&o=",
        sobaId: 6
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292456965.jpg?k=09691456d86a25d0ad31c9864b82ba1ee668e1a6371ae853e5a0dc31b011153b&o=",
        sobaId: 7
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292466936.jpg?k=fed8ad5353f5f5dd331a91060923883f613f056437b08603dd9ff40f43fed134&o=",
        sobaId: 7
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/292456213.jpg?k=e40bf9e3ba07b202e854da43e1be06d419c7fb9cbe3d23a4c3e5d5b9e3be70cc&o=",
        sobaId: 7
      },
      /**
       * Hotel Rex
       */
      //Hotel
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/44190454.jpg?k=0809e6755fc0fb91e489b83a06e8839c7c8607c477b60c9c5e470c6562aa81db&o=&hp=1",
        hotelId: 3
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/44449507.jpg?k=4c4012103d858d4d76f7a236720b10cf28cd523d125b177a1f66468daf8e70e1&o=&hp=1",
        hotelId: 3
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/70528956.jpg?k=9fd7c48c329240d812352598ca9ec8eeb858e880b759b3f1ea5c1b95a3143df8&o=&hp=1",
        hotelId: 3
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/43894177.jpg?k=a123b704c4b694714fc79812f8d652649afac798746b0b65f1894d23543bed32&o=&hp=1",
        hotelId: 3
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/43893881.jpg?k=b697652673a4198b043e9800cee292a89bf7da61bb7ce50a386ac356623f42e7&o=&hp=1",
        hotelId: 3
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/46118678.jpg?k=ab401e1619d70e501d157cd9538a3a0430289ebf37815a6c092e5fbff73c48cf&o=&hp=1",
        hotelId: 3
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/43894046.jpg?k=f05206823e73fab3ed545053d6d6446bc13c11a3d64f41bc1013553a96813f8d&o=&hp=1",
        hotelId: 3
      },
      //Sobe
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/43896513.jpg?k=57f978136565247331134e73156773adb04e06f3e46c704f4ce93770f6f7711f&o=",
        sobaId: 8
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/24799496.jpg?k=1bac667482c314c7e797aaa000c5a767bc8a7dfed54297d860bce568ee4ea2c7&o=",
        sobaId: 8
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/43895939.jpg?k=6d9ecaa5a5abb7d7efd988b05b77fe619c070ddc42d0d6db0f69b5a2b83ee7a6&o=",
        sobaId: 9
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/42005124.jpg?k=93a7bf2badbde6180f87b5888df43f6a27ff3060a31c6a4df5b295c38f27fd9b&o=",
        sobaId: 9
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/24799496.jpg?k=1bac667482c314c7e797aaa000c5a767bc8a7dfed54297d860bce568ee4ea2c7&o=",
        sobaId: 9
      },
      {
        url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/43853218.jpg?k=50c394add2e3f7304598980a23d9ce64a1efce8983627e45af34bfcb72af381d&o=",
        sobaId: 9
      }

    ]);
  },
  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Slikes', null, {});

  }
};
