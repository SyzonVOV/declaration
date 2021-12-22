import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ChangeEvent, useState, useEffect } from 'react';
import { checkExtension } from '../helpers/helpers';
import { useAppDispatch } from "../app/hooks";
import { addMembers } from '../app/slices/membersSlice';

export function ContentInput(): JSX.Element {
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let reader = new FileReader();
    if (file != null) {
      reader.readAsText(file);
      reader.onload = function () {
        if (typeof reader.result === 'string') {
          // console.log(reader.result.split(/\s{2}/));
          dispatch(addMembers(reader.result.split(/\s{2}/)))
        }
      };
      reader.onerror = function () {
        console.log(reader.error);
      };
    }

    return () => {
      reader.abort()
    }
  }, [file, dispatch])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (file) {
      if (checkExtension(file.name, 'txt')) {
        setFile(file)
      }
    }
  }

  return (
    <>
      <Stack direction="row" alignItems="center">
        <label htmlFor="input-text-doc">
          <input type="file" id="input-text-doc"
            accept=".txt" className="hidden"
            onChange={onChangeHandler}>
          </input>
          <Button variant="contained" component="span">
            Pick a file
          </Button>
        </label>
      </Stack>
    </>
  )
}