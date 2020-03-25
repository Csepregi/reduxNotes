import React from 'react'
import { createNote } from '../reducers/noteReducer'
import { connect } from 'react-redux'


const NewNote = (props) => {
	console.log(createNote)
	console.log(props.createNote)

	const addNote = async (event) => {
		event.preventDefault()
		const content = event.target.note.value
		event.target.value = ''
		props.createNote(content)
	}

	return (
		<form onSubmit={addNote}>
			<input name="note" />
			<button type="submit">add</button>
		</form>
	)
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		createNote: value => {
// 			dispatch(createNote(value))
// 		},
// 	}
// }

export default connect(
	null,
	{ createNote }
)(NewNote)