var Main = React.createClass({
  getInitialState() {
    return { tasks: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/tasks.json', (response) => { this.setState({ tasks: response }) });
  },

  handleSubmit(task) {
    var newState = this.state.tasks.concat(task);
    this.setState({ tasks: newState })
  },
  handleUpdate(task) {
    var id = task.id;
    console.log('update new',task.id);
    $.ajax({ url: `/api/v1/tasks/${task.id}`, type: 'PUT', data: {id: id},
    success: () => { this.updateTasks(task); console.log('update')} }
  )},
  updateTasks(task) {
    var tasks = this.state.tasks.filter((i) => { return i.id != task.id });
    tasks.push(task);
    this.setState({tasks: tasks });
  },
  render() {
        return (
            <div>
            <NewTask handleSubmit={this.handleSubmit}/>
            <Tasks tasks={this.state.tasks} onUpdate={this.handleUpdate} />
            </div>
        )
    }
});
