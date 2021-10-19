import { useState, useEffect } from "react";
import * as C from './App.styles';
import { Item } from './types/Item';
import { AddArea } from "./components/AddArea";
import { ListItem } from './components/ListItem';
import QrReader from 'react-qr-reader';

const App = () => {

  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    const itens = [
      { id: 1, name: 'Comprar café', done: false },
      { id: 2, name: 'Comprar leite', done: true },
      { id: 3, name: 'Ligar para TV', done: false },
    ]
    setList(itens)
  }, [])

  const handleAddTask = (name: string) => {
    const cloneList = [...list];
    const id = cloneList.length + 1;
    cloneList.push({ id, name, done: false });
    setList(cloneList);
  }

  const handleUpdateTask = (idItemUpdate: number) => {
    const cloneList = list.map((item: Item) => {
      if (item.id === idItemUpdate) {
        item.done = !item.done;
      }
      return item;
    })
    setList(cloneList);
  }

  const handleError = ()  => {

  }

  const handleScan = () => {

  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tareafas</C.Header>

        <AddArea onEnter={handleAddTask} />


        {list.map((item, index) => {
          return (
            <ListItem key={index} item={item} onChange={handleUpdateTask} />
          )
        })}

        <QrReader 
        
          onError={handleError}
          onScan={handleScan}
        />
      </C.Area>
    </C.Container>
  );

}

export default App;