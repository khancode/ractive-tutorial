import Ractive from 'ractive';

const xmen = [
    { name: 'Nightcrawler', realname: 'Wagner, Kurt',     power: 'Teleportation',    info: 'http://www.superherodb.com/Nightcrawler/10-107/' },
    { name: 'Cyclops',      realname: 'Summers, Scott',   power: 'Optic blast',      info: 'http://www.superherodb.com/Cyclops/10-50/' },
    { name: 'Rogue',        realname: 'Marie, Anna',      power: 'Absorbing powers', info: 'http://www.superherodb.com/Rogue/10-831/' },
    { name: 'Wolverine',    realname: 'Howlett, James',   power: 'Regeneration',     info: 'http://www.superherodb.com/Wolverine/10-161/' }
];
  
const ractive = new Ractive({
    target: '#target',
    template: '#template',
    data: { superheroes: xmen }
}); // define our superheroes

const newSuperhero = {
    name: 'Storm',
    realname: 'Monroe, Ororo',
    power: 'Controlling the weather',
    info: 'http://www.superherodb.com/Storm/10-135/'
};

// Add an item to a list
// xmen[xmen.length] = newSuperhero;
// ractive.update('superheroes');

// Another way to add
ractive.push('superheroes', newSuperhero);