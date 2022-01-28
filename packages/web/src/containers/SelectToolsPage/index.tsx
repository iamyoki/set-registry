import {css} from '@emotion/react';

import {images} from '../../assets';
import {CheckboxButton} from '../../components/CheckboxButton';
import {Image} from '../../components/Image';
import {Footer, Page, Main} from '../../components/Layouts';
import {center, column, row} from '../../helpers/utilities.css';

export function SelectToolsPage() {
  return (
    <Page
      className='SelectToolsPage'
      css={css`
        ${center}
        ${column}
      `}
    >
      <Main
        css={css`
          ${row}
          gap: 40px;

          .item {
            ${column}
            ${center}
            cursor: pointer;

            img {
              margin-bottom: 12px;
            }
          }
        `}
      >
        <div className='item'>
          <Image size={80} src={images.npm} />
          <CheckboxButton checked />
        </div>
        <div className='item'>
          <Image size={80} src={images.yarn} />
          <CheckboxButton />
        </div>
      </Main>
      <Footer>hello</Footer>
    </Page>
  );
}
