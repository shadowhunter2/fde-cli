<%if(isReact){%>
import React,{Component} from 'react';
import "./index.scss";
class <%=classedName%> extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };
    }
    render() {
        return (
        <div className="<%= classname %>-component">
            hello world
        </div>);
    }
    componentDidMount(){}
}
export default <%=classedName%>;
<%}else{%>
class <%=classedName%>{
    constructor(options) {
        this.options = options;
        this.init()
    }
    init(){
        this.view();
        this.bindEvent();
    }
    view(){}
    bindEvent(){}
    destroy(){

    }
}
export default <%=classedName%>;
<%}%>