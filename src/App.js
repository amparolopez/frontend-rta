import React, { useEffect } from 'react';
import { Container, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FileList from './components/FileList';
import { fetchFiles } from './store/actions';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const dispatch = useDispatch();
    const { files, loading, error } = useSelector((state) => state.files);

    useEffect(() => {
        dispatch(fetchFiles());
    }, [dispatch]);

    return (
        <Container>
            {loading ? (
                <Spinner animation="border" />
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <FileList files={files} />
            )}
        </Container>
    );
};

export default App;
