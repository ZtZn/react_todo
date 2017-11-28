var OpenTask = React.createClass({
  getInitialState() {
        return {}
    },
    handleEdit() {
        var id = this.props.task.id;
        var task = {id: id };
        console.log('handleedit', task.id)
        this.props.handleUpdate(task);
    },

    render (){
            return(
              <div key={this.props.task.id}>
              <input type="checkbox" onClick ={this.handleEdit}  /> {this.props.task.title}
              </div>
            )

        }


});
