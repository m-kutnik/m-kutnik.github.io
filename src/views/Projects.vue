<template>
  <section class="projects main">
    <ProjectPreview
      v-for="(project, key) in projects"
      :key="key"
      :project="project"
    />
  </section>
</template>

<script>
import ProjectPreview from "@/components/projectPreview"
import spotifyImage from "@/assets/images/spotify.png"
import bulmaImage from "@/assets/images/btg.png"
import noraImage from "@/assets/images/nora.png"
import gardenImage from "@/assets/images/garden.png"
import aosImage from "@/assets/images/aos.png"

export default {
  name: "Projects",
  components: {
    ProjectPreview,
  },
  data() {
    return {
      projects: [
        {
          title: "Spotify Scoreboard",
          description:
            "Some statistics about your Spotify Collaborative playlists",
          link: "https://m-kutnik.github.io/spotify-scoreboard",
          color:
            "background-image: linear-gradient( 45deg, rgb(0, 144, 199) -10%, rgb(96, 0, 132) 100%)",
          image: spotifyImage,
          preview: "https://youtu.be/MT0VSR7FyAY",
          technologies: [
            { name: "Vue", icon: "fab fa-vuejs" },
            { name: "Lodash", icon: "lodash" },
            { name: "OAuth", icon: "fas fa-fingerprint" },
          ],
        },
        {
          title: "Bulma Themes",
          description:
            "Free themes generator for Bulma CSS Framework, with live-preview and ready-to-go presets",
          link: "https://m-kutnik.github.io/bulma-themes",
          color:
            "background-image: linear-gradient(330deg, rgb(232, 193, 0) -10%, rgb(222, 67, 19) 100%)",
          image: bulmaImage,
          technologies: [
            { name: "Vue", icon: "fab fa-vuejs" },
            { name: "Google Cloud Platform", icon: "fab fa-google" },
          ],
        },
        {
          title: "Project NORA",
          description:
            "NORA is a Twitch/Smashcast chat assistant with the Viewer Engagement System. WORK-IN-PROGRESS",
          color:
            "background-image: linear-gradient(330deg, rgb(255, 111, 216) -60%, rgb(56, 19, 194) 100%)",
          image: noraImage,
          technologies: [
            { name: "Vue", icon: "fab fa-vuejs" },
            { name: "NodeJS", icon: "fab fa-node-js" },
            { name: "Google Cloud Platform", icon: "fab fa-google" },
            { name: "WebSocket", icon: "fas fa-comments" },
            { name: "IRC", icon: "fas fa-comments" },
          ],
        },
        {
          title: "Garden Metamorfozi",
          description: "A simple website I've designed and helped to code",
          link: "http://garden-metamorfozi.pl/",
          color:
            "background-image: linear-gradient(330deg, rgb(40, 165, 96) 10%, rgb(0, 115, 51) 100%)",
          image: gardenImage,
          technologies: [
            { name: "Wordpress", icon: "fab fa-wordpress-simple" },
          ],
        },
        {
          title: "AOS",
          description: "An Open Source project I contribute to",
          link: "https://github.com/michalsnik/aos",
          color:
            "background-image: linear-gradient(45deg, rgb(171, 23, 53), rgb(228, 103, 0))",
          image: aosImage,
          technologies: [{ name: "JS", icon: "fab fa-js" }],
        },
      ],
    }
  },
}
</script>
