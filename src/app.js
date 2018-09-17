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
    data: {
        superheroes: xmen,
        sortColumn: 'name',
        sort: function(array) {
            // grab the current sort column
            const column = this.get('sortColumn'); 
    
            // clone the array so as not to modify the underlying data
            const arr = array.slice();
    
            return arr.sort( function ( a, b ) {
                return a[ sortColumn ] < b[ sortColumn ] ? -1 : 1;
            });
        }
    },
    sort: function(column) {
        // update the sort column
        this.set('sortColumn', column);
    }
}); // define our superheroes
