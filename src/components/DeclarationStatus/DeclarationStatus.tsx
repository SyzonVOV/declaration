import PauseIcon from '@mui/icons-material/Pause';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SvgIcon, { SvgIconTypeMap } from '@mui/material/SvgIcon';
import { TDeclarationStatus } from '../../helpers/helpers';


const statusesComponent = new Map<TDeclarationStatus, typeof SvgIcon>([
  ['none', PauseIcon],
  ['good', ThumbUpAltIcon],
  ['bad', ThumbDownAltIcon]
])

const getIcon = (status: TDeclarationStatus) => {
  return statusesComponent.get(status) || PauseIcon
}

function throwBadStatus(status: never): never;
function throwBadStatus(status: TDeclarationStatus) {
  throw new Error('Unknown status: ' + status);
}

const getColor = (status: TDeclarationStatus): SvgIconTypeMap['props']['color'] => {
  switch (status) {
    case 'good':
      return 'success';
    case 'bad':
      return 'error';
    case 'none':
      return 'disabled';
    default:
      return throwBadStatus(status);
  }
}

export function DeclarationStatus({ status }: { status: any }) {
  const Status = getIcon(status);
  const componentColor = getColor(status)
  return (
    <div>
      <Status color={componentColor} />
    </div>
  )
}
