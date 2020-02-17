const initState = {
  projects: [
    {id: '1', title: 'I need help here', content: 'blah blag bloop'},
    {id: '2', title: 'I need wazz up here', content: 'blah blag bloop'},
    {id: '3', title: 'I say wazzup ladys', content: 'blah blag bloop'},
    {id: '4', title: 'I say blablabla ladys', content: 'blah blag bloop'},
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err)
      return state;
    default:
      return state;
  }
}

export default projectReducer;