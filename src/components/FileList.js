import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const FileList = () => {
    const files = useSelector((state) => state.files.files);
    
    return (
        <div className="container mt-5">
            <h4 className="text-left text-white bg-danger p-2 mb-4">React Test App</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Text</th>
                        <th>Number</th>
                        <th>Hex</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file) =>
                        file.lines.map((line, index) => (
                            <tr key={`${file.file}-${index}`}>
                                <td>{file.file}</td>
                                <td>{line.text}</td>
                                <td>{line.number}</td>
                                <td>{line.hex}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default FileList;

