import React from "react"
import "../app/app.css";

export default class App extends React.Component{
    state={
        value:"",
        list:[]
    }

    handleChange=(e)=>{

        this.setState({
            value:e.target.value
        })

    }

    handleSubmit=(e)=>{
        e.preventDefault();
    let newlist=this.state.list
    let newvalue=this.state.value;
    let time=new Date().toLocaleTimeString();

    newlist.push([newvalue,time])

    this.setState({
        list:newlist,
        value:"",
        index:0
    })
    }
    handleup=(i)=>{
        if(i===0){alert('its on top already')}
        else{
        let newlist=this.state.list

        let temp=newlist[i]
        newlist[i]=newlist[i-1]
        newlist[i-1]=temp

        this.setState({
            list:newlist
        })
    }
    }
    handledown=(i)=>{
        let newlist=this.state.list

        let temp=newlist[i]
        newlist[i]=newlist[i+1]
        newlist[i+1]=temp

        this.setState({
            list:newlist
        })
    }
  
    deletevalue=(i)=>{
        let newlist=this.state.list

        newlist.splice(i,1)

        this.setState({
            list:newlist
        })
    }

render(){
        console.log(this.state);
    let response=this.state.list.map((listitem,i)=>{
    return(
        <tr>
            <td>{i}</td>
            <td>{listitem[0]}</td>
            <td>{listitem[1]}</td>
            <td className="td_btn">
          <button className="btn btn-danger" onClick={()=>{this.deletevalue(i)}}>
              <i class="fas fa-trash-alt"></i>Del
          </button>
          <button className="btn btn-success" onClick={()=>{this.handleup(i)}}>
            <i class="fas fa-arrow-up"></i>Shiftup
          </button>
          <button className="btn btn-success" onClick={()=>{this.handledown(i)}}>
            <i class="fas fa-arrow-down"></i>Shiftdown
          </button>
            </td>
        </tr>
    )
})

    return(
    <div className="container-fluid">
        <nav>
            <h1><i class="far fa-list-alt"></i>To Do List</h1> 
        </nav>
        <div className="container">
            <form onSubmit={this.handleSubmit} className="mx-5 px-5">
                <div class="input-group my-5 ">
                  <input type="text" 
                   onChange={this.handleChange} value={this.state.value}
                   class="form-control" placeholder="Add Your Task " 
                   aria-label="Recipient's username" aria-describedby="basic-addon2"/>

                  <div class="input-group-append">
                    <button class="input-group-text" id="basic-addon2"> Add </button>
                  </div>
                </div>
            </form>

            <table class="table table-hover border">
              <thead>
                <tr>
                    <th scope="col">Sr#</th>
                    <th scope="col">Task Name</th>
                    <th scope="col">Time</th>
                    <th scope="col">
                        
                    </th>
                </tr>
              </thead>
              <tbody>
                {response}                
              </tbody>
            </table>
        </div>
    </div>
    )
}

}