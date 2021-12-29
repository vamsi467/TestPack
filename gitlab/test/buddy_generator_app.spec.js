import { mount } from '@vue/test-utils';
import axios from 'axios';
import BuddyGeneratorApp from 'buddy_generator_app.vue';
import { teamJson } from './constants';

jest.mock('axios');

describe('Buddy Generator App', () => {
  const createComponent = async () => {
    const component = mount(BuddyGeneratorApp);
    await component.vm.$nextTick();
    return component;
  };

  beforeAll(() => {
    axios.get.mockResolvedValue({
      data: teamJson,
    });
  });

  test('#getTeamData: loads team data from json endpoint', async () => {
    const component = await createComponent();
    const teamData = await component.vm.getTeamData();

    expect(teamData).toEqual(teamJson);
  });

  test('#selectRandomPerson: selects a random person', async () => {
    const component = await createComponent();
    component.vm.teamData = teamJson;

    const randomPerson = component.vm.selectRandomPerson();
    expect(randomPerson).toBeLessThan(teamJson.length);
    expect(randomPerson >= 0).toBeTruthy();
  });

  test('#generate: renders the selected person name', async () => {
    const randomNumber = 1;
    jest
      .spyOn(BuddyGeneratorApp.methods, 'selectRandomPerson')
      .mockImplementationOnce(() => randomNumber);
    const component = await createComponent();

    await component.vm.generate();

    expect(component.find('.selected-buddy').text()).toContain(
      'Your randomly selected onboarding buddy is',
    );
    expect(component.find('.selected-buddy').text()).toContain(teamJson[randomNumber].name);
  });

  test('#generate: is called when button clicked', async () => {
    const mock = jest.spyOn(BuddyGeneratorApp.methods, 'generate').mockImplementationOnce(() => {});
    const component = await createComponent();

    component.find('button').trigger('click');

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
