import styled from '@emotion/styled';

type ImageProps = {
  fit?: React.CSSProperties['objectFit'];
  size?: string | number;
};

export const Image = styled.img<ImageProps>((props) => ({
  width: props.size ?? props.width ?? '100%',
  height: props.size ?? props.height ?? '100%',
  objectFit: props.fit ?? 'contain',
}));
