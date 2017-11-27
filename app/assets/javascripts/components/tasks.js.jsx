var Tasks = React.createClass({
    getInitialState: function() {
        return {data: this.props.data};
    },
    getDefaultProps: function() {
        return {tasks: []}
    },

    handleChange() {
        this.setState({
            isChecked: this.state.checked // flip boolean value
        }, function() {
            console.log(this.state);
        }.bind(this));
    },



    render: function() {

        var data = this.props.data;
        var task;

            task = data.map(function(item, index) {
               // let text = <input type="checkbox" defaultChecked={item.done}  />
                    //item.done? <strike>{this.props.title}</strike> : item.title;

                return (
                        <div key={index}>
                            <p className="item_checkbox"><input type="checkbox" defaultChecked={item.done} onChange={this.handleChange}/> {item.title} </p>
                        </div>
                   )
            })




        return (
            <div className="dev_tasks">
                <h2 className="title"> В работе </h2>
                {task}
            </div>

        );
    }
});