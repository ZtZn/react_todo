var NewTask = React.createClass({
  getInitialState: function() {
    return {
      myValue: ''
    };
  },
  onChangeHandler: function(e) {
    this.setState({myValue: e.target.value})
  },
  handleclick(){
    var title = this.refs.title.value;
    if(title){
    $.ajax({
      url: '/api/v1/tasks',
      type: 'POST',
      data: { task: { title: title } },
      success: (task) => {
           this.props.handleSubmit(task);
       }
     }
   );}
  },
  render(){
    return(
      <div>
        <input value={this.state.myValue} ref="title" value={this.state.myValue} onChange={this.onChangeHandler} />
        <button onClick={this.handleclick}  type="button">Добавить</button>
      </div>

    )
  }

});
