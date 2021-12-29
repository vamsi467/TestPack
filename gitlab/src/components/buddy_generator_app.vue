<template>
  <section>
    <h1 class="title">Onboarding Buddy Generator</h1>
    <span>
      <div>
        <h3 class="sub-title">New team member's department</h3>
        <select :value="selectedTeam || defaultTeam" @change="selectedTeam = $event">
          <option v-for="(option, index) in departmentOptions" :key="index" value="option">
            {{ option }}
          </option>
        </select>
      </div>
      We want to help you select a buddy from a different department so that your new team member
      can get to know other people in the company.
      <button class="generate-btn" @click="generate">Generate buddy</button>
    </span>
    <span v-if="selected" class="selected-buddy">
      <div>Your randomly selected onboarding buddy is</div>
      <div class="image-container">
        <img
          :src="`https://gl-technical-interviews.gitlab.io/frontend-technical-interviews/template/fe-technical-assessment-spec/team-images/${teamData[selected].picture}`"
        />
      </div>
      <a :href="`https://gitlab.com/${teamData[selected].gitlab}`" target="_blank">
        {{ teamData[selected].name }}
      </a>
    </span>
  </section>
</template>

<script>
import axios from 'axios';
const DEPARTMENTS = [
  'Engineering Function',
  'Core Team Alum',
  'Executive',
  'Board',
  'Core Team Alumni',
  'Development Department',
  'Dev Section',
  'Gitaly Team',
];

export default {
  data: function () {
    return {
      teamData: [],
      selected: null,
      selectedTeam: '',
      departmentOptions: DEPARTMENTS,
    };
  },
  computed: {
    defaultTeam() {
      return DEPARTMENTS[0];
    },
  },
  mounted() {
    this.selectedTeam = DEPARTMENTS[0];
  },
  methods: {
    async getTeamData() {
      const { data } = await axios.get(`/api/team_data`);
      return data;
    },
    selectRandomPerson() {
      return Math.floor(Math.random() * this.teamData.length);
    },
    async generate() {
      this.teamData = await this.getTeamData();
      this.selected = this.selectRandomPerson();

      while (this.teamData[this.selected].departments[0] === this.selectedTeam) {
        this.selected = this.selectRandomPerson();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  display: block;
  font-size: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
}

.sub-title {
  display: block;
  padding-bottom: 16px;
}

span:not(#warning-container) {
  display: block;
  border-color: #e5e5e5;
  border-style: solid;
  border-width: 1px;
  border-radius: 2px;
  padding: 16px;
}

.container {
  left: 80px;
  position: relative;
  width: calc(100% - 160px);
}

select {
  height: 32px;
  width: 320px;
  font-size: 16px;
  margin-bottom: 16px;
}

.generate-btn {
  display: block;
  margin-top: 16px;
  background: #1aaa55;
  border: 1px solid #168f48;
  border-radius: 5px;
  color: white;
  height: 32px;
  font-size: 16px;
}

.selected-buddy {
  margin-top: 16px;

  div:first-child {
    font-weight: bold;
  }

  .image-container {
    display: inline-block;
    position: relative;
    width: 32px;

    img {
      width: 32px;
      height: 32px;
      border-radius: 16px;
      position: absolute;
      top: -22px;
    }
  }
}
</style>
