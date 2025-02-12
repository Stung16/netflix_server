"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const episodes = [
      {
        id: "Episodes1",
        seasons_id: "season3",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
      },
      {
        id: "Episodes2",
        seasons_id: "season3",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 2,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042544/movie3_ffhznw.mp4",
      },
      {
        id: "Episodes3",
        seasons_id: "season4",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042627/movive4_gw4hn2.mp4",
      },
      {
        id: "Episodes4",
        seasons_id: "season4",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 2,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4",
      },
      {
        id: "Episodes5",
        seasons_id: "season15",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
      },
      {
        id: "Episodes6",
        seasons_id: "season15",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 2,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042544/movie3_ffhznw.mp4",
      },
      {
        id: "Episodes7",
        seasons_id: "season16",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042627/movive4_gw4hn2.mp4",
      },
      {
        id: "Episodes8",
        seasons_id: "season16",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 2,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4",
      },
      {
        id: "Episodes9",
        seasons_id: "season17",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
      },
      {
        id: "Episodes10",
        seasons_id: "season17",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 2,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042544/movie3_ffhznw.mp4",
      },
      {
        id: "Episodes11",
        seasons_id: "season18",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042627/movive4_gw4hn2.mp4",
      },
      {
        id: "Episodes12",
        seasons_id: "season18",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 2,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4",
      },
      {
        id: "Episodes13",
        seasons_id: "season19",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
      },
      {
        id: "Episodes14",
        seasons_id: "season19",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 2,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042544/movie3_ffhznw.mp4",
      },
      {
        id: "Episodes15",
        seasons_id: "season20",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042627/movive4_gw4hn2.mp4",
      },
      {
        id: "Episodes16",
        seasons_id: "season20",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 2,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4",
      },
      {
        id: "Episodes17",
        seasons_id: "season1",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
      },
      {
        id: "Episodes18",
        seasons_id: "season2",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042544/movie3_ffhznw.mp4",
      },
      {
        id: "Episodes19",
        seasons_id: "season5",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042627/movive4_gw4hn2.mp4",
      },
      {
        id: "Episodes20",
        seasons_id: "season6",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4",
      },
      {
        id: "Episodes21",
        seasons_id: "season7",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
      },
      {
        id: "Episodes22",
        seasons_id: "season8",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042544/movie3_ffhznw.mp4",
      },
      {
        id: "Episodes23",
        seasons_id: "season9",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042627/movive4_gw4hn2.mp4",
      },
      {
        id: "Episodes24",
        seasons_id: "season10",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4",
      },
      {
        id: "Episodes25",
        seasons_id: "season11",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042402/movie2_khdpcl.mp4",
      },
      {
        id: "Episodes26",
        seasons_id: "season12",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042544/movie3_ffhznw.mp4",
      },
      {
        id: "Episodes27",
        seasons_id: "season13",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042627/movive4_gw4hn2.mp4",
      },
      {
        id: "Episodes28",
        seasons_id: "season14",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.y',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4",
      },
      //
      {
        id: "Episodes29",
        seasons_id: "season22",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie2_qqdkdi.mp4",
      },
      {
        id: "Episodes30",
        seasons_id: "season23",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie3_qqdkdi.mp4",
      },
      {
        id: "Episodes31",
        seasons_id: "season24",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie4_qqdkdi.mp4",
      },
      {
        id: "Episodes32",
        seasons_id: "season25",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie5_qqdkdi.mp4",
      },
      {
        id: "Episodes33",
        seasons_id: "season26",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie6_qqdkdi.mp4",
      },
      {
        id: "Episodes34",
        seasons_id: "season27",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie7_qqdkdi.mp4",
      },
      {
        id: "Episodes35",
        seasons_id: "season28",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie8_qqdkdi.mp4",
      },
      {
        id: "Episodes36",
        seasons_id: "season29",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie9_qqdkdi.mp4",
      },
      {
        id: "Episodes37",
        seasons_id: "season30",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 10,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie10_qqdkdi.mp4",
      },
      {
        id: "Episodes38",
        seasons_id: "season31",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 11,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie11_qqdkdi.mp4",
      },
      {
        id: "Episodes39",
        seasons_id: "season32",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 12,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie12_qqdkdi.mp4",
      },
      {
        id: "Episodes40",
        seasons_id: "season33",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 13,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie13_qqdkdi.mp4",
      },
      {
        id: "Episodes41",
        seasons_id: "season34",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 14,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie14_qqdkdi.mp4",
      },
      {
        id: "Episodes42",
        seasons_id: "season35",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 15,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie15_qqdkdi.mp4",
      },
      {
        id: "Episodes43",
        seasons_id: "season36",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 16,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie16_qqdkdi.mp4",
      },
      {
        id: "Episodes44",
        seasons_id: "season37",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 17,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie17_qqdkdi.mp4",
      },
      {
        id: "Episodes45",
        seasons_id: "season38",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 18,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie18_qqdkdi.mp4",
      },
      {
        id: "Episodes46",
        seasons_id: "season39",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 19,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie19_qqdkdi.mp4",
      },
      {
        id: "Episodes47",
        seasons_id: "season40",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 10,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie20_qqdkdi.mp4",
      },
      {
        id: "Episodes48",
        seasons_id: "season41",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4",
      },
      {
        id: "Episodes49",
        seasons_id: "season42",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie2_qqdkdi.mp4",
      },
      {
        id: "Episodes50",
        seasons_id: "season43",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie3_qqdkdi.mp4",
      },
      {
        id: "Episodes51",
        seasons_id: "season44",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie4_qqdkdi.mp4",
      },
      {
        id: "Episodes52",
        seasons_id: "season45",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie5_qqdkdi.mp4",
      },
      {
        id: "Episodes53",
        seasons_id: "season46",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie6_qqdkdi.mp4",
      },
      {
        id: "Episodes54",
        seasons_id: "season47",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie7_qqdkdi.mp4",
      },
      {
        id: "Episodes55",
        seasons_id: "season48",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie8_qqdkdi.mp4",
      },
      {
        id: "Episodes56",
        seasons_id: "season49",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie9_qqdkdi.mp4",
      },
      {
        id: "Episodes57",
        seasons_id: "season50",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 10,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie10_qqdkdi.mp4",
      },
      {
        id: "Episodes58",
        seasons_id: "season51",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 11,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie11_qqdkdi.mp4",
      },
      {
        id: "Episodes59",
        seasons_id: "season52",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 12,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie12_qqdkdi.mp4",
      },
      {
        id: "Episodes60",
        seasons_id: "season53",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 13,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie13_qqdkdi.mp4",
      },
      {
        id: "Episodes61",
        seasons_id: "season54",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 14,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie14_qqdkdi.mp4",
      },
      {
        id: "Episodes62",
        seasons_id: "season55",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 15,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie15_qqdkdi.mp4",
      },
      {
        id: "Episodes63",
        seasons_id: "season56",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 16,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie16_qqdkdi.mp4",
      },
      {
        id: "Episodes64",
        seasons_id: "season57",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 17,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie17_qqdkdi.mp4",
      },
      {
        id: "Episodes65",
        seasons_id: "season58",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 18,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie18_qqdkdi.mp4",
      },
      {
        id: "Episodes66",
        seasons_id: "season59",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 19,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie19_qqdkdi.mp4",
      },
      {
        id: "Episodes67",
        seasons_id: "season60",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 10,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie20_qqdkdi.mp4",
      },
      {
        id: "Episodes68",
        seasons_id: "season61",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4",
      },
      {
        id: "Episodes69",
        seasons_id: "season62",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie2_qqdkdi.mp4",
      },
      {
        id: "Episodes70",
        seasons_id: "season63",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie3_qqdkdi.mp4",
      },
      {
        id: "Episodes71",
        seasons_id: "season64",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie4_qqdkdi.mp4",
      },
      {
        id: "Episodes72",
        seasons_id: "season65",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie5_qqdkdi.mp4",
      },
      {
        id: "Episodes73",
        seasons_id: "season66",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie6_qqdkdi.mp4",
      },
      {
        id: "Episodes74",
        seasons_id: "season67",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie7_qqdkdi.mp4",
      },
      {
        id: "Episodes75",
        seasons_id: "season68",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie8_qqdkdi.mp4",
      },
      {
        id: "Episodes76",
        seasons_id: "season21",
        desc: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        image_url:
          "https://res.cloudinary.com/dtht61558/image/upload/v1732041534/thumb1_ddsz7r.jpg",
        episode_number: 1,
        is_seen: false,
        watched_duration: 0,
        video_url:
          "https://res.cloudinary.com/dtht61558/video/upload/v1732042074/movie1_qqdkdi.mp4",
      },
    ];

    await queryInterface.bulkInsert("episodes", episodes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("episodes", null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
