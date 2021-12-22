import * as React from 'react';
import { useAppSelector } from "../app/hooks";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RootState } from '../app/store';

export function ContentTable(): JSX.Element {
    const initialNamesParced = useAppSelector((state: RootState) => state.member.members)
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
