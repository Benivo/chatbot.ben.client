import { Component, OnInit } from '@angular/core';
import {ApiAiClient} from "api-ai-javascript";


@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {
  public title:string="Dima";
  public response:string = '';
  public request:string ='';
  public client:ApiAiClient;
  public readings_data:string="I know that you just landed on this screen and didn't spoke to agent yet";
  public messages=[];
  public InfographicNumber;
  public parentModel = {
    infographic1 : {},
  };
  /*
    {message:"Hi Jenny! I'm Ben, your rental budget specialist. I was designed to help you to build your monthly budget for your move to London.",type:"agent"},
    {message:"Would you like to know how much money you will need to live in London?",type:"agent"}
  ];
  */
  public pre_populated:string='Hi';
  constructor() { }

  ngOnInit() {
    this.client = new ApiAiClient({accessToken: '7038fb95c5384508a0886caf841ef9b8'})
    this.client.eventRequest("WELCOME")
    .then((response) => {
        this.handleAPIAIresponse(response);
    })
    .catch((error) => {
      console.log(error);
      this.response="sorry but something went wrong, try again in few minutes";
    })
  }
 

  SubmitRequest(box_value){
    let retVal;
    // show the message on screen
    this.request=box_value;
    this.messages.push({message:this.request,type:"me"});
    console.log('request = ' + this.request);
    // make testing easier fulfill the chat input with next user text
    
    if(box_value=="I am from Berlin"){
       retVal= "ready";
    }
    else if(box_value=="ready"){
       retVal= "I want to learn about Moorgate";
    }
    else if(box_value=="I want to learn about Moorgate"){
       retVal= "I want to stay room";
    }
    else if(box_value=="I want to stay room"){
       retVal= "add";
    }
    else if(box_value=="add"){
       retVal= "commuting";
    }
    else if(box_value=="commuting"){
       retVal= "tube";
    }
    else if(box_value=="tube"){
       retVal= "I am happy with this choice";
    }
    else if(box_value=="I am happy with this choice"){
       retVal= "2 times a week";
    }
    else if(box_value=="2 times a week"){
       retVal= "no";
    } 
    else {
       retVal= "";      
    }
      


    // send message to API AI and handle the response
    this.client.textRequest(this.request)
    .then((response) => {

        this.handleAPIAIresponse(response);
    
      })
    .catch((error) => {
      console.log(error);
      this.response="sorry but something went wrong, try again in few minutes";
    })
    return retVal;   
  }
 
  // API AI response processor
  handleAPIAIresponse(response){
    console.log(response);
    // handle next 
    let infographic = response.result.fulfillment.data.Infographics;
    if(infographic.hasOwnProperty("number")){
      console.log("infographic.number",infographic.number);
      this.InfographicNumber = infographic.number;
      this.parentModel = infographic.data_infographic;
      }
      this.response=response.result.fulfillment.speech;
    let responsemessage=this.response.split("$$$");
    responsemessage.forEach(element => {
      if(element!=""){
        this.messages.push({message:element,type:"agent"});
      }
    });
    this.ScrollDown();    
    
    let fire_event=response.result.fulfillment.data.fire_event;
    
    // if we want to fire specific event
    if(fire_event!=""){
      this.client.eventRequest(fire_event)
      .then((response) => {
        this.handleAPIAIresponse(response);
      })
      .catch((error) => {
        console.log(error);
        this.response="sorry but something went wrong, try again in few minutes";
      })
    }
    console.log(this.messages); 
  }

  ScrollDown() {
      setTimeout(function(){
        var objDiv = document.getElementById("chatHeight");
        objDiv.scrollTop = objDiv.scrollHeight;
      },200);
      setTimeout(function(){
        var objDiv = document.getElementById("chatHeight");
        objDiv.scrollTop = objDiv.scrollHeight;
      },400);
      setTimeout(function(){
        var objDiv = document.getElementById("chatHeight");
        objDiv.scrollTop = objDiv.scrollHeight;
      },1000);
    }


}
