import React, { Component } from 'react';
import { Tabs } from 'antd';

const API = "http://lara.loc/public/api/categories";
//const API = "http://lara.loc/public/categories.json";


class MainCategories extends Component {

	constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			categories: []
		};
	}

	componentWillMount() {
		//var data;

		fetch(API)
			.then(response => response.json())
			.then(data => this.setState({ categories: data }));

		//console.log()
	}

	
	

	render(){

		const {categories} = this.state.categories;
		console.log(categories);
		const TabPane = Tabs.TabPane;
	
		let categoriesArray = this.state.categories;

		return (
			<div>
			<Tabs>
        		{categoriesArray.map(function(item, index){
					if (item.parent_id === 0) {
						return <TabPane tab={item.title} key={index}>
							{
								categoriesArray.map(function(ChItem, index) {
									if (ChItem.parent_id === item.id) {
										let url = '/tech' + ChItem.id + ".htm";
										return <li key={index}><a href={url} >{ChItem.title}</a></li>
									}
									
								})
							}
						</TabPane>
					}
          			
				})}
			</Tabs>
			</div>

		);
	}

}


export default MainCategories;
