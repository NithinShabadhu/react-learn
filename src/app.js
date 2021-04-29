console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit=(e)=>{
e.preventDefault();
const option=e.target.elements.option.value;
if(option){
    app.options.push(option);

    e.target.elements.option.value='';
    renderForm();
}

}
const onRemoveAll=()=>{
    app.options=[];
    renderForm();
}

const onMakeDecision=()=>{
    const random=Math.floor(Math.random()*app.options.length);
    const option=app.options[random];
    alert(option);
}

const appRoot = document.getElementById('app');



const renderForm=()=>{
    const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <p>{app.options.length}</p>
    <button disabled={app.options.length===0} onClick={onMakeDecision}>What Should I Do?</button>
    <button onClick={onRemoveAll}>Remove All</button>
    <ol>
     {
         app.options.map((option)=><li key={option}>{option}</li>)
     }
    </ol>  
    <form onSubmit={onFormSubmit}>
    <input type="text" name="option"></input>
    <button>Add Option</button>
    </form>
  </div>
);
ReactDOM.render(template,appRoot);
}
renderForm();

