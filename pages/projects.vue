<template>
  <main>
    <section>
      <h1>Projects</h1>
      <div v-for="project in githubProjects" :key="project.id" class="projects">
          <h3><a :href="project.html_url">{{ project.name }}</a></h3>
          <p class="stars">✶ {{ project.stargazers_count }}</p>
          <p>{{ project.homepage }}</p>
          <p>{{ project.description }}</p>
      </div>
    </section>
    <aside><h3>About</h3>
    <p>I am a taco. I am fancy Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque deserunt consectetur ad, consequuntur magnam eos voluptatibus vel tempore facere, autem reiciendis, dignissimos nostrum molestias alias corporis modi. Vitae, illum? Quidem.</p></aside>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            'githubProjects',
        ])
    },
    mounted() {
        this.$store.dispatch('getGithubProjects')
    }
}
</script>

<style lang="scss" scoped>
main {
  width: 80vw;
  margin: 2% 8%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
  section {
    grid-area: 1 / 1 / 2 / 2;
    background: white;
    color: black;
    padding: 30px;
    a {
        color: black;
    }
  }
  aside {
    grid-area: 1 / 2 / 2 / 3;
  }
}
.stars {
  color: orangered;
}
.projects {
    margin-bottom: 30px;
}
</style>