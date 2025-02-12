"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const movies = [
      {
        id: "movie1",
        title: "My Neighbor Totoro",
        desc: "Two girls move to the countryside and encounter magical creatures, including the lovable Totoro.",
        age_rating: "G",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner15_k0hfx0.webp",
        type: "single",
      },
      {
        id: "movie2",
        title: "Parasite",
        desc: "A poor family schemes to become employed by a wealthy family and infiltrates their household.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb2_jlg8t3.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner13_hypkn1.webp",
        type: "single",
      },
      {
        id: "movie3",
        title: "The Lord of the Rings",
        desc: "A hobbit and his companions set out to destroy the powerful One Ring and defeat dark lord Sauron.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb3_amum39.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner16_bst8mq.webp",
        type: "session",
      },
      {
        id: "movie4",
        title: "The Godfather",
        desc: "An organized crime dynasty's aging patriarch transfers control of his empire to his reluctant son.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb4_xt8dbk.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner14_rpdaat.webp",
        type: "single",
      },
      {
        id: "movie5",
        title: "Inception",
        desc: "A skilled thief is given a chance to have his criminal history erased in exchange for implanting another person's idea into a target's subconscious.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb5_cvbpg6.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner12_a89rnl.webp",
        type: "single",
      },
      {
        id: "movie6",
        title: "The Hangover",
        desc: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb6_eca5r3.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner9_vxfjsy.webp",
        type: "single",
      },
      {
        id: "movie7",
        title: "Mad Max: Fury Road",
        desc: "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical warlord.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb7_lxuvxh.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner6_grcadu.webp",
        type: "single",
      },
      {
        id: "movie8",
        title: "Jurassic Park",
        desc: "A theme park showcasing genetically-engineered dinosaurs turns deadly.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb8_lrmhxn.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner10_lhpphm.webp",
        type: "single",
      },
      {
        id: "movie9",
        title: "Interstellar",
        desc: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb9_frhzqw.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner8_omm6kl.webp",
        type: "single",
      },
      {
        id: "movie10",
        title: "The Conjuring",
        desc: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb10_lc13id.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner7_hmxcbf.webp",
        type: "single",
      },
      {
        id: "movie11",
        title: "Casablanca",
        desc: "A cynical nightclub owner protects an old flame and her husband from Nazis in Morocco.",
        age_rating: "PG",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb11_p7jb67.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner11_zsvbja.webp",
        type: "single",
      },
      {
        id: "movie12",
        title: "Home Alone",
        desc: "An eight-year-old troublemaker must protect his house from burglars when he is accidentally left home alone by his family during Christmas vacation.",
        age_rating: "PG",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb12_gczg9t.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner4_pueidb.webp",
        type: "single",
      },
      {
        id: "movie13",
        title: "The Notebook",
        desc: "A young couple falls in love in the 1940s but is separated by their social differences and war.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb13_p7or42.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner5_gtjwbn.webp",
        type: "single",
      },
      {
        id: "movie14",
        title: "La La Land",
        desc: "A jazz musician and an aspiring actress struggle to keep their love alive as they chase their dreams.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb14_dypf7m.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner3_owgwbu.webp",
        type: "session",
      },
      {
        id: "movie15",
        title: "Schindler's List",
        desc: "In Nazi-occupied Poland during World War II, industrialist Oskar Schindler saves his Jewish employees from the Holocaust.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb15_d0xbdh.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner1_vcrm8h.webp",
        type: "session",
      },
      {
        id: "movie16",
        title: "Moonlight",
        desc: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb16_j6qcmf.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner2_rwmp0r.webp",
        type: "session",
      },
      {
        id: "movie17",
        title: "My Neighbor Totoro",
        desc: "Two girls move to the countryside and encounter magical creatures, including the lovable Totoro.",
        age_rating: "G",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner15_k0hfx0.webp",
        type: "single",
      },
      {
        id: "movie18",
        title: "Parasite",
        desc: "A poor family schemes to become employed by a wealthy family and infiltrates their household.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb2_jlg8t3.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner13_hypkn1.webp",
        type: "single",
      },
      {
        id: "movie19",
        title: "The Lord of the Rings",
        desc: "A hobbit and his companions set out to destroy the powerful One Ring and defeat dark lord Sauron.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb3_amum39.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner16_bst8mq.webp",
        type: "session",
      },
      {
        id: "movie20",
        title: "The Godfather",
        desc: "An organized crime dynasty's aging patriarch transfers control of his empire to his reluctant son.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb4_xt8dbk.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner14_rpdaat.webp",
        type: "single",
      },
      {
        id: "movie21",
        title: "Inception",
        desc: "A skilled thief is given a chance to have his criminal history erased in exchange for implanting another person's idea into a target's subconscious.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb5_cvbpg6.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner12_a89rnl.webp",
        type: "single",
      },
      {
        id: "movie22",
        title: "The Hangover",
        desc: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb6_eca5r3.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner9_vxfjsy.webp",
        type: "single",
      },
      {
        id: "movie23",
        title: "Mad Max: Fury Road",
        desc: "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical warlord.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb7_lxuvxh.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner6_grcadu.webp",
        type: "single",
      },
      {
        id: "movie24",
        title: "Jurassic Park",
        desc: "A theme park showcasing genetically-engineered dinosaurs turns deadly.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb8_lrmhxn.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner10_lhpphm.webp",
        type: "single",
      },
      {
        id: "movie25",
        title: "The Conjuring",
        desc: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb10_lc13id.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner7_hmxcbf.webp",
        type: "single",
      },
      {
        id: "movie26",
        title: "Casablanca",
        desc: "A cynical nightclub owner protects an old flame and her husband from Nazis in Morocco.",
        age_rating: "PG",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb11_p7jb67.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner11_zsvbja.webp",
        type: "single",
      },
      {
        id: "movie27",
        title: "Home Alone",
        desc: "An eight-year-old troublemaker must protect his house from burglars when he is accidentally left home alone by his family during Christmas vacation.",
        age_rating: "PG",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb12_gczg9t.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner4_pueidb.webp",
        type: "single",
      },
      {
        id: "movie28",
        title: "The Notebook",
        desc: "A young couple falls in love in the 1940s but is separated by their social differences and war.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb13_p7or42.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner5_gtjwbn.webp",
        type: "single",
      },
      {
        id: "movie29",
        title: "La La Land",
        desc: "A jazz musician and an aspiring actress struggle to keep their love alive as they chase their dreams.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb14_dypf7m.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner3_owgwbu.webp",
        type: "session",
      },
      {
        id: "movie30",
        title: "Schindler's List",
        desc: "In Nazi-occupied Poland during World War II, industrialist Oskar Schindler saves his Jewish employees from the Holocaust.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb15_d0xbdh.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner1_vcrm8h.webp",
        type: "session",
      },
      {
        id: "movie31",
        title: "Moonlight",
        desc: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb16_j6qcmf.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner2_rwmp0r.webp",
        type: "session",
      },
      {
        id: "movie32",
        title: "Interstellar",
        desc: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb9_frhzqw.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner8_omm6kl.webp",
        type: "single",
      },
      {
        id: "movie33",
        title: "My Neighbor Totoro",
        desc: "Two girls move to the countryside and encounter magical creatures, including the lovable Totoro.",
        age_rating: "G",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner15_k0hfx0.webp",
        type: "single",
      },
      {
        id: "movie34",
        title: "Parasite",
        desc: "A poor family schemes to become employed by a wealthy family and infiltrates their household.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb2_jlg8t3.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner13_hypkn1.webp",
        type: "single",
      },
      {
        id: "movie35",
        title: "The Lord of the Rings",
        desc: "A hobbit and his companions set out to destroy the powerful One Ring and defeat dark lord Sauron.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb3_amum39.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner16_bst8mq.webp",
        type: "session",
      },
      {
        id: "movie36",
        title: "The Godfather",
        desc: "An organized crime dynasty's aging patriarch transfers control of his empire to his reluctant son.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb4_xt8dbk.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner14_rpdaat.webp",
        type: "single",
      },
      {
        id: "movie37",
        title: "Inception",
        desc: "A skilled thief is given a chance to have his criminal history erased in exchange for implanting another person's idea into a target's subconscious.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb5_cvbpg6.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner12_a89rnl.webp",
        type: "single",
      },
      {
        id: "movie38",
        title: "The Hangover",
        desc: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb6_eca5r3.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner9_vxfjsy.webp",
        type: "single",
      },
      {
        id: "movie39",
        title: "Mad Max: Fury Road",
        desc: "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical warlord.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb7_lxuvxh.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner6_grcadu.webp",
        type: "single",
      },
      {
        id: "movie40",
        title: "Jurassic Park",
        desc: "A theme park showcasing genetically-engineered dinosaurs turns deadly.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb8_lrmhxn.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner10_lhpphm.webp",
        type: "single",
      },
      {
        id: "movie41",
        title: "Interstellar",
        desc: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb9_frhzqw.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner8_omm6kl.webp",
        type: "single",
      },
      {
        id: "movie42",
        title: "The Conjuring",
        desc: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb10_lc13id.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner7_hmxcbf.webp",
        type: "single",
      },
      {
        id: "movie43",
        title: "Casablanca",
        desc: "A cynical nightclub owner protects an old flame and her husband from Nazis in Morocco.",
        age_rating: "PG",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb11_p7jb67.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner11_zsvbja.webp",
        type: "single",
      },
      {
        id: "movie44",
        title: "Home Alone",
        desc: "An eight-year-old troublemaker must protect his house from burglars when he is accidentally left home alone by his family during Christmas vacation.",
        age_rating: "PG",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb12_gczg9t.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner4_pueidb.webp",
        type: "single",
      },
      {
        id: "movie45",
        title: "The Notebook",
        desc: "A young couple falls in love in the 1940s but is separated by their social differences and war.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb13_p7or42.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner5_gtjwbn.webp",
        type: "single",
      },
      {
        id: "movie46",
        title: "La La Land",
        desc: "A jazz musician and an aspiring actress struggle to keep their love alive as they chase their dreams.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb14_dypf7m.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner3_owgwbu.webp",
        type: "session",
      },
      {
        id: "movie47",
        title: "Schindler's List",
        desc: "In Nazi-occupied Poland during World War II, industrialist Oskar Schindler saves his Jewish employees from the Holocaust.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb15_d0xbdh.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner1_vcrm8h.webp",
        type: "session",
      },
      {
        id: "movie48",
        title: "Moonlight",
        desc: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb16_j6qcmf.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner2_rwmp0r.webp",
        type: "session",
      },
      {
        id: "movie49",
        title: "My Neighbor Totoro",
        desc: "Two girls move to the countryside and encounter magical creatures, including the lovable Totoro.",
        age_rating: "G",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner15_k0hfx0.webp",
        type: "single",
      },
      {
        id: "movie50",
        title: "Parasite",
        desc: "A poor family schemes to become employed by a wealthy family and infiltrates their household.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb2_jlg8t3.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner13_hypkn1.webp",
        type: "single",
      },
      {
        id: "movie51",
        title: "The Lord of the Rings",
        desc: "A hobbit and his companions set out to destroy the powerful One Ring and defeat dark lord Sauron.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb3_amum39.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner16_bst8mq.webp",
        type: "session",
      },
      {
        id: "movie52",
        title: "The Godfather",
        desc: "An organized crime dynasty's aging patriarch transfers control of his empire to his reluctant son.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041533/thumb4_xt8dbk.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner14_rpdaat.webp",
        type: "single",
      },
      {
        id: "movie53",
        title: "Inception",
        desc: "A skilled thief is given a chance to have his criminal history erased in exchange for implanting another person's idea into a target's subconscious.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb5_cvbpg6.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner12_a89rnl.webp",
        type: "single",
      },
      {
        id: "movie54",
        title: "The Hangover",
        desc: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb6_eca5r3.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner9_vxfjsy.webp",
        type: "single",
      },
      {
        id: "movie55",
        title: "Mad Max: Fury Road",
        desc: "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrannical warlord.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041532/thumb7_lxuvxh.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner6_grcadu.webp",
        type: "single",
      },
      {
        id: "movie56",
        title: "Jurassic Park",
        desc: "A theme park showcasing genetically-engineered dinosaurs turns deadly.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb8_lrmhxn.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner10_lhpphm.webp",
        type: "single",
      },
      {
        id: "movie57",
        title: "Interstellar",
        desc: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb9_frhzqw.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner8_omm6kl.webp",
        type: "single",
      },
      {
        id: "movie58",
        title: "The Conjuring",
        desc: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb10_lc13id.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner7_hmxcbf.webp",
        type: "single",
      },
      {
        id: "movie59",
        title: "Casablanca",
        desc: "A cynical nightclub owner protects an old flame and her husband from Nazis in Morocco.",
        age_rating: "PG",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb11_p7jb67.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978070/banner11_zsvbja.webp",
        type: "single",
      },
      {
        id: "movie60",
        title: "Home Alone",
        desc: "An eight-year-old troublemaker must protect his house from burglars when he is accidentally left home alone by his family during Christmas vacation.",
        age_rating: "PG",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb12_gczg9t.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner4_pueidb.webp",
        type: "single",
      },
      {
        id: "movie61",
        title: "The Notebook",
        desc: "A young couple falls in love in the 1940s but is separated by their social differences and war.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb13_p7or42.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner5_gtjwbn.webp",
        type: "single",
      },
      {
        id: "movie62",
        title: "La La Land",
        desc: "A jazz musician and an aspiring actress struggle to keep their love alive as they chase their dreams.",
        age_rating: "PG-13",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041531/thumb14_dypf7m.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner3_owgwbu.webp",
        type: "session",
      },
      {
        id: "movie63",
        title: "Schindler's List",
        desc: "In Nazi-occupied Poland during World War II, industrialist Oskar Schindler saves his Jewish employees from the Holocaust.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb15_d0xbdh.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1731440937/banner_jyvpnc.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978071/banner1_vcrm8h.webp",
        type: "session",
      },
      {
        id: "movie64",
        title: "Moonlight",
        desc: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
        age_rating: "R",
        thumbnail_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041530/thumb16_j6qcmf.jpg",
        trailer:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1736978069/banner15_k0hfx0.webp",
        type: "session",
      },
    ];

    await queryInterface.bulkInsert("movies", movies, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("movies", null, {});
  },
};
