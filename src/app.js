import Ractive from 'ractive';

// execute this code with the play button in the top-right corner of this pane
const ractive = new Ractive({
  target: '#target',
  template: '#template',
  data: { greeting: 'Hello', name: 'world' }
});
