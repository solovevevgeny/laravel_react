import React, { Component } from 'react';
import { Tabs, Menu, Icons} from 'antd';
import { Button } from 'antd';


const API = "http://lara.loc/public/menu.json";


class MainMenu extends Component {

	constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
            categories: [],
            mainMenu: []
		};
	}

	componentWillMount() {
		//var data;

		fetch(API)
			.then(response => response.json())
			.then(data => this.setState({ mainMenu: data }));

	}
	render(){

        let mainMenuArray = this.state.mainMenu;
		return (
	            <div>
	                {mainMenuArray.map (function(menuItem,index){
        	        	return <Button key={index} type="primary">{menuItem.title}</Button>
	                })}
	            </div>		
        );


	}

}


export default MainMenu;