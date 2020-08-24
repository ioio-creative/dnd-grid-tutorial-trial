import React, { useContext } from 'react';
// import logo from './logo.svg';
// import './App.css';
import DragItem from 'components/DragItem';
import { Grid, GridImage, GridItem } from 'components/Grid';
import GridContext from 'contexts/GridContext';

function App() {
  const { items, moveItem } = useContext(GridContext);

  return (
    <div className='App'>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}
      <Grid>
        {items.map(item => (
          <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
            <GridItem>
              <GridImage src={item.src}></GridImage>
            </GridItem>
          </DragItem>
        ))}
      </Grid>
    </div>
  );
}

export default App;
