<template>
  <article :style="project.color">
    <div class="info">
      <h1>{{ project.title }}</h1>
      <h3>{{ project.description }}</h3>
      <h3>Technologies:</h3>
      <ul>
        <li v-for="(tech, index) in project.technologies" :key="index">
          <i :class="tech.icon"></i>{{ tech.name }}
        </li>
      </ul>
      <div v-if="project.link" class="link">
        Link:
        <a :href="project.link" target="_blank" rel="noopener noreferrer">
          {{ project.link }}
        </a>
      </div>
      <div v-if="project.preview" class="preview">
        Preview:
        <a :href="project.preview" target="_blank" rel="noopener noreferrer">
          <span class="yt"></span>
        </a>
      </div>
    </div>
    <div class="image" :style="{ backgroundImage: background }"></div>
  </article>
</template>
<script>
export default {
  name: "ProjectPreview",
  props: {
    project: {
      type: Object,
      required: true,
      default() {
        return {
          title: "Project title",
          description: "Project description",
          link: "",
          color: "background: #fff",
          image: "",
          preview: "",
          technologies: [],
        }
      },
    },
  },
  computed: {
    background() {
      return `url("${this.project.image}")`
    },
  },
}
</script>

<style lang="scss" scoped>
.fab,
.fas {
  font-size: 20px;
  position: absolute;
  left: -30px;
  top: -1px;
}
.lodash {
  position: absolute;
  display: inline-block;
  top: 0;
  left: -30px;
  width: 20px;
  height: 20px;
  background: url("../assets/icons/lodash.png");
  background-size: cover;
}
article {
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  width: 100%;
  margin: 30px 0;
  box-sizing: border-box;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.1);
  color: #efefef;
  position: relative;

  & .image {
    width: 100%;
    height: 40vw;
    margin: 30px 0 0 0;
    background-size: cover;
    box-shadow: -6px 6px 80px 5px #00000069;
  }
  @media (min-width: 715px) {
    flex-direction: row;
    width: 700px;
    height: 460px;
    padding: 30px 0 30px 60px;

    & .info {
      width: 50%;
      padding: 0 15px 0 0px;
      box-sizing: border-box;
      background-size: contain;
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    & .image {
      position: absolute;
      right: -60px;
      width: 360px;
      height: 220px;
      margin: 90px 0;
      box-shadow: -6px 6px 80px 5px #00000069;
      background-position: center;
    }
  }
  @media (min-width: 915px) {
    width: 900px;
    height: 600px;
    padding: 40px 0 40px 80px;

    & .image {
      right: -190px;
      width: 620px;
      height: 330px;
      margin: 90px 0;
      box-shadow: -6px 6px 80px 5px #00000069;
    }
  }
}

h1 {
  font-family: "Hind", sans-serif;
  font-size: 2rem;
}

.yt {
  display: inline-block;
  position: relative;
  top: 7px;
  margin: 0 7px;
  height: 24px;
  width: 24px;
  background-image: url("../assets/images/yt.png");
  background-size: cover;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0 0 30px 40px;
  li {
    margin: 5px 0;
    position: relative;
  }
}
</style>
