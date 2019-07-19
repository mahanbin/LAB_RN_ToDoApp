import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './app/components/Header'
import SubTitle from './app/components/SubTitle'
import Input from './app/components/Input'
import TodoItem from './app/components/Todo'

export default class App extends React.Component {

  state = {
    inputValue: "",
    todos: [
      {
        title: "물 3잔 마시기",
        isComplete: false
      },
      {
        title: "30분 이상 걷기",
        isComplete: false
      }
    ]
  }

  _makeTodoItem = ({ item, index }) => {
    return (
      <TodoItem
        text={item.title}
        isComplete={item.isComplete}
        changeComplete={this._changeComplete} />
    );
  }

  _changeText = (value) => {
    this.setState({inputValue:value});
  }

  _addTodoItem = () =>{
    const Input = this.state.inputValue;
    const prevItem = this.state.todos;
    const newItem = { title: Input, isComplete: false}
    this.setState({
      inputValue: '',
      todos: prevItem.concat(newItem)
    })
  }

  _changeComplete = (index) => {
    alert(...index);
    //const newTodo = [...this.state.todos];
    //newTodo[index].isComplete = !newTodo[index].isComplete;
    //alert(newTodo[index].title);
    //this.setState({todos:newTodo},this.saveItem);
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Header />
        </View>
        <View style={styles.inputContainer}>
          <SubTitle title="To-Do 입력" />
          <Input
              value={this.state.inputValue}
              changeText={this._changeText}
              addTodo={this._addTodoItem}/>
        </View>
        <View style={styles.todoContainer}>
          <SubTitle title="To-Do List" />
          <FlatList
            data={this.state.todos}
            renderItem={this._makeTodoItem}
            keyExtractor={(item, index) => { return `${index}` }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    marginLeft: 20
  },
  todoContainer: {
    marginTop: 20,
    marginLeft: 20
  }
});