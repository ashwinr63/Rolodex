import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {

  const [searchField, setSearchField] = useState(''); // value, setValue
  const [monsters, setMonsters] = useState([]); 
  const[filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [stringField, setStringField] = useState('');

  console.log('render')

  
  useEffect(() => {
    console.log('effect fired')
  fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])
      
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    })

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);

  }
  const onStringChange = (event) => {
    setStringField(event.target.value);
  }

 

  return (
    <div className='App'>
      <h1 className='app-title'>
        Rolodex
      </h1>

      <SearchBox
        className='search-box'
        onChangeHandler={onSearchChange}
        placeholder='Search a Monster'
      />
       <SearchBox
        onChangeHandler={onStringChange}
        placeholder='setString'
      />

    <CardList monsters={filteredMonsters} />
    </div>

  )

}

/* class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return {
          monsters: users
        };
      }));

  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return {
          searchField
        }
      }
    )
  }
  render() {

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;


    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    return (
      <div className="App">
        
        <h1 className='app-title'>Rolodex</h1>
        <SearchBox 
        className = 'search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search Monsters'/>

        <CardList monsters={filteredMonsters} />
        
      </div>
    );
  }
} */

export default App;
