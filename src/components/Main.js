import React from "react";

    
export class Main extends React.Component {
  state = {
    article:'',
    note:'',
    count:0,
    result:'',
}
 
handleChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
}

checkRansom = (e) => {
  this.state.count=0;
  this.state.result='';

  var x;
  var re = this.state.article.includes(this.state.note)
  
  if(re){
    console.log("Success")
    alert("The kidnapper could have written that note")
  }
  else{
    console.log("Failed")
    var res = this.state.note.split(" ")
    for(x=0;x<res.length;x++){
      if(this.state.article.includes(res[x])!=true){  
          this.state.result = this.state.result.concat(res[x]+ " ");
          this.state.count++;
      }
    }
    alert("Missing Words Count: " + this.state.count)
    alert("Missing Words: " + this.state.result)
  }
}


  render(){
        return(
          <div class="Admin">
            <div class="navbar-fixed">
                    <nav class="black">
                    <div class="container">
                    <div class="nav-wrapper">
                        <a href="/" class="brand-logo center">Forensic Investigation Department</a>
                    </div>
                    </div>
                    </nav>
                    </div>
            <span>
             <h5 class="center-align">Ransom Notes</h5>
            </span>
            <div className="container"> 
               <div class="row">
                  <div class="input-field col s12">
                    <textarea id="article" name="article" class="materialize-textarea" value={this.state.article} onChange={this.handleChange}></textarea>
                    <label for="article">Article</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <textarea id="note" name="note" class="materialize-textarea" value={this.state.note} onChange={this.handleChange}></textarea>
                    <label for="note">Note</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                  <button class="btn waves-effect waves-light" type="submit" name="action" onClick={this.checkRansom}>Check Suspect
    <i class="material-icons right">Send</i>
  </button>
                 </div>
                 </div>
               </div> 
             </div> 
        );
        }
      }

export default Main;