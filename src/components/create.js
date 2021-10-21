import { Component } from "react";

export class Create extends Component {

	constructor() {
		super();

		this.onSubmit = this.onSubmit.bind(this);
		this.onChangeMovieName = this.onChangeMovieName.bind(this);
		this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
		this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
		
		this.state = {
			Title: ``,
			Year: ``,
			Poster: ``
		}
	}

	onSubmit(e) {
		e.preventDefault();
		alert(`Movie: ${this.state.Title} ${this.state.Year} ${this.state.Poster}`);
	}

	onChangeMovieName(e) { this.setState({ Title: e.target.value }) };
	onChangeMovieYear(e) { this.setState({ Year: e.target.value }) };
	onChangeMoviePoster(e) { this.setState({ Poster: e.target.value }) };

	render() {
		return (
			<div className="App">
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Add Movie Name: </label>
						<input type="text"
							className="form-control"
							value={this.state.Title}
							onChange={this.onChangeMovieName}
						/>
					</div>
					<div className="form-group">
						<label>Add Movie Year: </label>
						<input type="text"
							className="form-control"
							value={this.state.Year}
							onChange={this.onChangeMovieYear}
						/>
					</div>
					<div className="form-group">
						<label>Add Movie Poster URL: </label>
						<textarea
							type="text"
							className="form-control"
							value={this.state.Poster}
							onChange={this.onChangeMoviePoster}
						/>
					</div>
					<input type="submit" value="Add Movie" />
				</form>
			</div>
		);
	}
}