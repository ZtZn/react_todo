var ClosedTask = React.createClass({
  getInitialState() {
        return {  }
    },
     render (){
            return(
              <div key={this.props.task.id}>
              <input type="checkbox" checked='true' /><strike> {this.props.task.title} </strike>
              </div>
            )

        }


});
