import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

const Empitem = styled.div`
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0, .2);

    a {
        display: block;
        margin: 10px 0 10px 0;
        color: ${props => props.active ? 'orange': 'black'};
    }

    input {
        display: block;
        margin-top: 10px;
    }
`;

const Header = styled.h2`
    font-size: 22px;
`;


export const Button = styled.button`
    display: block;
    padding: 5px 15px;
    background-color: gold;
    border: 1px solid rgba(0,0,0,0.2)
    box-shadow: 5px 5px 10px rgba(0,0,0,.2)
`;

class WhoAmI extends Component {
    constructor(props) {
        // каждый потомок будет иметь props
        super(props);
        this.state = {
            year: 27,
            text: '+',
            position: ''
        }
        this.nextYear1 = this.nextYear1.bind(this)
    }

    nextYear1() {
        console.log('+++');
        // setstate (примает объект или callback для точности) запускает перерисовку компонента с новым состоянием (асинхронная команда)
        // при задании нового state нельзя менять предудущий
        // state - this.state приходит автоматически
        // команда setstate не пересоздает а изменяет состояние
        this.setState(state => ({
                year: state.year + 1
            }))
    }


    nextYear2 = () => {
        console.log('+++');
        // setstate (примает объект или callback для точности) запускает перерисовку компонента с новым состоянием (асинхронная команда)
        // при задании нового state нельзя менять предудущий
        // state - this.state приходит автоматически
        // команда setstate не пересоздает а изменяет состояние
        this.setState(state => ({
                year: state.year + 1
            }))
    }


    commitInputChanges = (e, color) => {
        console.log(color);
        this.setState({
            position: e.target.value
        })
    }


    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state;
        return (
            <Empitem active>
                <Button onClick={this.nextYear1}>{this.state.text}</Button>
                <Header>My name is {name}, surname - {surname}, age - {this.state.year}, position - {position}</Header>
                <a href={link}> My Profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange = {(e) => this.commitInputChanges(e, 'some color')} />


                </form>


            </Empitem>
        )
    }
}



// function WhoAmI ({name, surname, link}) {
//     return (
//         <div>

//             <h1>Me name is {name()}, surname - {surname}</h1>
//             <a href= {link}> My Profile</a>

//         </div>
//     )
// }


const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto;
`;


const DynamicCreating = (props) => {
    return (
        <div className = {'mb-3 p-3 border border-' + props.color}>
            {

                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
                })

            }
        </div> 
    )
}


function App() {
    return (
        <Wrapper>

 

            <BootstrapTest
                left={
                    <DynamicCreating color={'primary'}>
                        <h2>This weel was hard  </h2>
                        <h2> Hello world  </h2>
                    </DynamicCreating>
                }

                right = {
                    <DynamicCreating color={'primary'}>
                        <h2>RIGHT</h2>
                    </DynamicCreating>
                }
            />


            <WhoAmI name='John' surname="Smith" link="facebook.com" />
            <WhoAmI name='Alex' surname="Shepard" link="vk.com" />
        </Wrapper>
    )
}



export default App;
