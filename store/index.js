export const state = () => ({
  githubProjects: []
});

export const mutations = {
  updateGithubProjects: (state, payload) => {
    state.githubProjects = payload;
  }
};

export const actions = {
  async getGithubProjects({ state, commit }) {
    if (state.githubProjects.length) return;

    try {
      let payload = await fetch(
        `https://api.github.com/users/clelange/repos?page=1&per_page=200`
      ).then(res => res.json());

      payload = payload.filter(el => el.fork == false).map(({id, name, description, stargazers_count, html_url}) => ({id, name, description, stargazers_count, html_url}));
    //   console.log(payload);
      commit("updateGithubProjects", payload);
    } catch (err) {
      console.log(err);
    }
  }
};
