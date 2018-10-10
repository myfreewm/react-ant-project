
import React,{Component} from 'react';

import classNames from 'classnames';
class Input extends Component{

    constructor(props){

        super(props);

        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handChange = this.handChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleMulSelectChange = this.handleMulSelectChange.bind(this);

        this.state = {

            inputValue:'',
            textareaValue:'',
            radioValue:'',
            coffees:[],
            area:'',
            areas:['beijing','shanghai']
        }
    };

    handleInputChange(name,e){
       console.log(name); 
        this.setState({
            inputValue:e.target.value
        })
    }

    handleTextareaChange(e){

        this.setState({

            textareaValue:e.target.value
        })
    }
    
    handleRadioChange(e){
        
        this.setState({

            radioValue:e.target.value
        })
    }

    handChange(e){
        const {checked,value} = e.target;

        let {coffees} = this.state;

        if(checked && coffees.indexOf(value)===-1){
            coffees.push(value);
        }else{
            coffees = coffees.filter(i => i !== value);
        }

        this.setState({coffees})
    }
    handleSelectChange(e){

        const {value} = e.target;

        this.setState({area:value})
    }
    handleMulSelectChange(e){
        
        const {options} = e.target;
        
        console.log(options)
        const areas = Object.keys(options).filter(i => options[i].selected === true).map(i => options[i].value);

        this.setState({areas,})
    }
    render(){

        const {inputValue,textareaValue,radioValue,coffees,area,areas} = this.state;
        return(
                
                <div>
                    <p>
                        单行输入框：
                        <input type='text' value={inputValue} onChange={this.handleInputChange.bind(this,inputValue)} />
                    </p>
                    <p>
                        result:{inputValue}
                    </p>
                    <p>
                        多行输入框:
                        <textarea value={textareaValue} onChange={this.handleTextareaChange} />
                    </p>
                    <p>
                        result:{textareaValue}
                    </p>
                    <p>单选框</p>
                    <label>
                        male:
                        <input type="radio" value="male" checked={radioValue === 'male'}
                        onChange={this.handleRadioChange}/>
                        female:
                        <input type="radio" value="female" checked={radioValue === 'female'}
                        onChange={this.handleRadioChange}/>
                    </label>
                    <p>复选框</p>
                    <p>请选择你爱喝的咖啡</p>
                    <label>
                        <input type="checkbox" value="cappuccio" checked={coffees.indexOf('cappuccio') !== -1} onChange={this.handChange}/>
                        cappuccio
                    </label>          
                    <label>
                        <input type="checkbox" value="cafa" checked={coffees.indexOf('cafa') !== -1} onChange={this.handChange}/>
                        cafa
                    </label> 
                    <label>
                        <input type="checkbox" value="macha" checked={coffees.indexOf('macha') !== -1} onChange={this.handChange}/>
                        macha
                    </label> 
                    <p>下拉框</p>

                    <select value={area} onChange={this.handleSelectChange}>
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="shenzhen">深圳</option>
                    </select>
                    <p>多选下拉框</p>

                    <select multiple={true} value={areas} onChange={this.handleMulSelectChange} >
                        <option value="beijing">北京</option>
                        <option value="shanghai">上海</option>
                        <option value="shenzhen">深圳</option>
                    </select>
                </div>

              )
    }
}

export default Input;
