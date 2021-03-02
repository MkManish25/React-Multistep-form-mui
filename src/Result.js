import React from "react";
// import Confetti from "react-confetti";
import Swal from "sweetalert2";
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useData } from "./DataContext";
import { MainContainer } from "./components/MainContainer";
import { PrimaryButton } from "./components/PrimaryButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
    root: {
        marginBottom: "30px",
    },
    table: {
        marginBottom: "30px",
    },
});

export const Result = () => {
    const styles = useStyles();
    const { data } = useData();

    const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
    // const { files } = data;

    const onSubmit = async () => {
        const formData = new FormData();
        Swal.fire("Submitted!", "You've completed all Details!", "success");

        entries.forEach((entry) => {
            formData.append(entry[0], entry[1]);
        });

    };

    return (
        <>
            <MainContainer>
                <Typography component="h2" variant="h5">
                    📋 Form Data Preview
        </Typography>
                <TableContainer className={styles.root} component={Paper}>
                    <Table className={styles.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Field</b></TableCell>
                                <TableCell align="right"><strong>Value</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {entries.map((entry) => (
                                <TableRow key={entry[0]}>
                                    <TableCell component="th" scope="row">
                                        {entry[0]}
                                    </TableCell>
                                    <TableCell align="right">{entry[1].toString()}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <PrimaryButton onClick={onSubmit}>Submit</PrimaryButton>
                <Link to="/">
                    <Button>Edit Entered Data</Button></Link>
            </MainContainer>
        </>
    );
};