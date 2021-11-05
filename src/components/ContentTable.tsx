import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const initialNames = [
    "БАШИНСЬКИЙ Володимир Георгійович",
    "ЖИРНИЙ Володимир Анатолійович",
    "ДМИТРІЄВ Володимир Анатолійович",
    "ЛАМПІК Михайло Михайлович",
    "КОРЗУН Світлана Миколаївна"
];

interface IPerson {
    name: string
    surname: string
    fathername: string
}

function removeExtraSpaces(string: string) {
    return string.replace(/\s+/g, ' ').trim()
}

function createPersonObject(string: string) {
    let personArr = string.split(' ');
    return { 'surname': personArr[0], 'name': personArr[1], 'fathername': personArr[2] }
}

function reducer(prev: Array<IPerson>, curr: string) {
    let createdObj = createPersonObject(removeExtraSpaces(curr))
    return [...prev, createdObj]
}
const initialNamesParced = initialNames.reduce(reducer, [] as Array<IPerson>)

/* function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
} 

const rows = [
    ...initialNamesParced
]; */

export function ContentTable(): JSX.Element {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Surname</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Father's name</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {initialNamesParced.map((row) => (
                        <TableRow
                            key={`${row.surname}${row.name}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.surname}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.fathername}</TableCell>
                            <TableCell align="right">{'     '}</TableCell>
                            <TableCell align="right">{'     '}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
