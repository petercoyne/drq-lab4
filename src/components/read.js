import { Component } from "react";
import { Movies } from "./movies";
import axios from 'axios';

export class Read extends Component {

	state = {
		movies: []
	};

	componentDidMount() {
		axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
			.then((res) => {
				this.setState({ movies: res.data.movies });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<Movies movies={this.state.movies} />
			</div>
		);
	}
}
export default Read;