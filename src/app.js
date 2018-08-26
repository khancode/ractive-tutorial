import Ractive from 'ractive';

// execute this code with the play button in the top-right corner of this pane
const ractive = new Ractive({
  target: '#target',
  template: '#template',
  data: { greeting: 'Hello', name: 'world' }
});

// Set template variables
ractive.set('greeting', 'Bonjour');
ractive.set('name', 'tout le monde');

// Another way
ractive.set({
    greeting: 'Bonjour',
    name: 'tout le monde'
});
