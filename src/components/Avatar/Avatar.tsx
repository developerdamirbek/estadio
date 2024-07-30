import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { Avatar as MuiAvatar, AvatarProps, Box } from '@mui/material'
import classNames from 'classnames/bind'
import Image, { StaticImageData } from 'next/image'
import { getInitials } from '@/helpers/client-utils'
import { AvatarType } from './types'

import styles from './Avatar.module.scss'

const cn = classNames.bind(styles)

const avatarSize: Record<AvatarType, number> = {
  [AvatarType.Small]: 33,
  [AvatarType.Medium]: 44,
  [AvatarType.Large]: 80,
  [AvatarType.ExtraLarge]: 99,
}

type Props = AvatarProps & {
  isBorder?: boolean
  firstName?: string
  lastName?: string
  size?: AvatarType
  image?: StaticImageData | string
}

export const Avatar = ({
  lastName,
  firstName,
  image,
  size = AvatarType.Medium,
  isBorder,
  ...restAvatarProps
}: Props) => (
  <Box className={cn('avatar', { 'avatar--bordered': isBorder })}>
    <Box>
      {image ? (
        <MuiAvatar sx={{ width: avatarSize[size], height: avatarSize[size] }} className={cn('avatar__image')}>
          <Image src={image} alt="avatar" width={avatarSize[size]} height={avatarSize[size]} />
        </MuiAvatar>
      ) : (
        <MuiAvatar
          sx={{ width: avatarSize[size], height: avatarSize[size] }}
          {...restAvatarProps}
          className={cn('avatar__image')}
        >
          {!restAvatarProps.src && (getInitials(firstName, lastName) || <AccountCircleOutlinedIcon />)}
        </MuiAvatar>
      )}
    </Box>
  </Box>
)
