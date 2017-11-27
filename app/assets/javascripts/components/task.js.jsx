var Task = React.createClass({
    render (){
        let text = this.state.done ? <strike>{this.props.title}</strike> : this.props.title;
        return (
            <div className="row">
                <div className="col-md-12">
                    <input type="checkbox"  />&nbsp;{text}
                    <hr />
                </div>
            </div>
        );
    }
})


