import {css} from '@emotion/react';
import {RiCheckLine} from 'react-icons/ri';

import {theme} from '../constants/theme';

type CheckboxButtonProps = {
  checked?: boolean;
  size?: string | number;
};

export function CheckboxButton({
  checked = false,
  size = 22,
  ...rest
}: CheckboxButtonProps) {
  return (
    <button
      className='CheckboxButton'
      css={[
        css({
          width: size,
          height: size,
          display: 'inline-flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
          backgroundColor: theme.colors.whites.base,
        }),
        !checked &&
          css({
            boxShadow: `0 0 0 2px ${theme.colors.SECONDARY} inset`,
          }),
        checked &&
          css`
            background-color: ${theme.colors.PRIMARY};
          `,
      ]}
      {...rest}
    >
      {checked && <RiCheckLine color={theme.colors.whites.base} size={22} />}
    </button>
  );
}
