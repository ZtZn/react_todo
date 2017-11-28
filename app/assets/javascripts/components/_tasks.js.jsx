var Tasks = React.createClass({
  getInitialState() {
    return { tasks: [] }
  },
  handleEdit(){

    console.log('update');
  },
  onUpdate(task) {
    this.props.onUpdate(task);
},

  render() {
    var closed_tasks =  this.props.tasks.map((task) => {
      if (task.done == true)
      return (
        <div key = {task.id}>
          <ClosedTask task={task}
            />
        </div> );
      });
        var open_tasks = this.props.tasks.map((task) =>{
          if (task.done == false)
          return(
          <div key={task.id} >
          <OpenTask task={task}
            handleUpdate={this.onUpdate} />
          </div> );
        });

        return(
          <div>
        <div className = 'open_tasks' >
          <h3>В работе</h3>
            {open_tasks}
        </div>
          <div >
            <h3>Выполнено</h3>
            {closed_tasks}
          </div>
          </div>
      );
    }


});
