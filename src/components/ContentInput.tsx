import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ChangeEvent } from 'react';
import { checkExtension } from '../helpers/helpers';

export function ContentInput(): JSX.Element {

  const onChangeHendler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e) {
      // @ts-ignore: Object is possibly 'null'.
      console.log(checkExtension(e.target.files[0].name, 'txt'));
    }
  }

  return (
    <>
      <Stack direction="row" alignItems="center">
        <label htmlFor="input-text-doc">
          <input type="file" id="input-text-doc"
            accept=".txt" className="hidden" onChange={onChangeHendler}></input>
          <Button variant="contained" component="span">
            Pick a file
          </Button>
        </label>
      </Stack>
    </>
  )
}