import React, { Fragment, useContext, useEffect } from 'react';
import Form from '../components/Form';
import Loader from '../components/Loader';
import Notes from '../components/Notes';
import { FirebaseContext } from '../context/firebase/firebaseContext';


function Home(props) {
	const { loading, notes, removeNote, fetchNotes } = useContext(FirebaseContext);

	useEffect(() => {
		fetchNotes();
	}, [])
	return (
		<Fragment>
			<Form />
			<hr />
			{loading
				? <Loader />
				: <Notes notes={notes} onRemove={removeNote} />
			}
		</Fragment>
	);
}

export default Home;